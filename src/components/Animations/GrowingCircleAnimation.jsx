import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { size } from "../../stylesheets/components/Animations/GrowingCircleAnimation.module.sass";
import { debounce, throttle } from "../../utils/Limitors";

const COLORS = {
  white: "#FFF",
  midnightBlack: "#111",
};

const RADIUS_GROWTH_PER_MS = 0.025;
const GROWTH_FUNCTION_EXPONENTIAL = 2.9;

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

const circleCenterCoordinates = {
  x: null,
  y: null,

  resetMouseState: () => {
    circleCenterCoordinates.x = null;
    circleCenterCoordinates.y = null;
  },
};

// circle animation state machine
const m = {
  ctx: null, // canvas context
  isDark: null,
  radiusMultiplier: null,
  maxRadiusMultiplier: null,
  timeAtPreviousDraw: null,
  height: null,
  width: null,

  resetState: (ctx, isDark) => {
    m.ctx = ctx;
    m.isDark = isDark;
    m.radiusMultiplier = null;
    m.maxRadiusMultiplier = null;
    m.timeAtPreviousDraw = null;

    return null; // no next step - end of state machine
  },

  createMachine: (ctx, isDark) => {
    m.ctx = ctx;
    m.isDark = isDark;
    m.height = getHeight();
    m.width = getWidth();

    const { width, height } = m.ctx.canvas.getBoundingClientRect();
    if (m.ctx.canvas.width !== width || m.ctx.canvas.height !== height) {
      const { devicePixelRatio: originalRatio = 1 } = window;
      // we don't need such a high resolution for this type of animation. Plus it makes the edges
      // of the circle look blurred, which looks nicer. Also improves performance a lot on slow GPUs
      const lowerResolutionRatio = originalRatio * 0.5;
      m.ctx.canvas.width = width * lowerResolutionRatio;
      m.ctx.canvas.height = height * lowerResolutionRatio;
      m.ctx.scale(lowerResolutionRatio, lowerResolutionRatio);
    }

    m.maxRadiusMultiplier =
      Math.max(m.width * 0.75, m.height * 1.5) ** (1.0 / GROWTH_FUNCTION_EXPONENTIAL);
    m.timeAtPreviousDraw = Date.now();

    // iOS page zoom doesn't trigger resize event handler. If user switches to light mode on smaller
    // zoom and then changes zoom factor back to something bigger, radiusMultiplier will be greater
    // than maxRadiusMultiplier. verifyCircleBounds will think the anim is complete and return null
    if (m.radiusMultiplier > m.maxRadiusMultiplier) {
      m.radiusMultiplier = m.maxRadiusMultiplier;
    }

    if (circleCenterCoordinates.x == null || circleCenterCoordinates.y == null) {
      if (isDark) {
        m.radiusMultiplier = 0;
      } else {
        m.radiusMultiplier = m.maxRadiusMultiplier;
      }

      return m.verifyCircleBounds;
    }

    return m.start;
  },
  start: () => {
    if (!m.isDark) {
      return m.growCircle;
    }
    return m.shrinkCircle;
  },

  growCircle: () => {
    m.radiusMultiplier += RADIUS_GROWTH_PER_MS * Math.max(1, Date.now() - m.timeAtPreviousDraw);
    if (m.radiusMultiplier > m.maxRadiusMultiplier) {
      m.radiusMultiplier = m.maxRadiusMultiplier;
    }
    return m.verifyCircleBounds;
  },

  shrinkCircle: () => {
    m.radiusMultiplier -= RADIUS_GROWTH_PER_MS * Math.max(1, Date.now() - m.timeAtPreviousDraw);
    if (m.radiusMultiplier < 0) {
      m.radiusMultiplier = 0;
    }
    return m.verifyCircleBounds;
  },

  verifyCircleBounds: () => {
    if (m.radiusMultiplier <= 0 || m.radiusMultiplier >= m.maxRadiusMultiplier) {
      // just paint the canvas - no more circle drawing is necessary. We're at the limit
      m.ctx.fillStyle = m.isDark ? COLORS.midnightBlack : COLORS.white;
      m.ctx.fillRect(0, 0, m.width, m.height);

      return null; // no next step - end of state machine
    }

    // clear canvas before drawing the next circle
    m.ctx.clearRect(0, 0, m.width, m.height);
    return m.drawCircle;
  },

  drawCircle: () => {
    m.ctx.fillStyle = COLORS.white;
    m.ctx.beginPath();
    m.ctx.arc(
      circleCenterCoordinates.x,
      circleCenterCoordinates.y,
      m.radiusMultiplier ** GROWTH_FUNCTION_EXPONENTIAL,
      0,
      2 * Math.PI
    );
    m.ctx.fill();

    // Note the time when we start drawing. This will be used to determine how much time has passed
    // since last draw. Circle growth is based on time delta, not CPU performance
    m.timeAtPreviousDraw = Date.now();

    return new Promise((rtn) => {
      const returnAfterAnimating = () => {
        rtn(m.start);
      };
      window.requestAnimationFrame(returnAfterAnimating);
    });
  },
};

const GrowingCircleAnimation = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleClick = (event) => {
      // fill in the mouse coordinates when we receive a click so we know the center of the circle
      circleCenterCoordinates.x = event.detail.x;
      circleCenterCoordinates.y = event.detail.y;
    };

    let stateMachine = m.createMachine(ctx, isDark);
    let isStateMachinePowered = true;

    const stateMachineRunner = () => {
      if (stateMachine !== null && isStateMachinePowered) {
        if (stateMachine instanceof Function) {
          stateMachine = stateMachine();
          stateMachineRunner();
        } else {
          stateMachine.then((val) => {
            stateMachine = val();
            stateMachineRunner();
          });
        }
      }
    };

    stateMachineRunner();

    const handleResize = () => {
      circleCenterCoordinates.resetMouseState();
      m.resetState(isDark);
      stateMachine = m.createMachine(ctx, isDark);
      stateMachineRunner();
    };

    window.addEventListener("darkModeToggled", handleClick);
    window.addEventListener("resize", throttle(debounce(handleResize)), false);
    return () => {
      isStateMachinePowered = false;
      window.removeEventListener("darkModeToggled", handleClick);
      window.removeEventListener("resize", throttle(debounce(handleResize)), false);
    };
  }, [isDark]);

  return <canvas className={`${size}`} ref={canvasRef} />;
};

GrowingCircleAnimation.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default GrowingCircleAnimation;
