import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { size } from "../../stylesheets/components/Animations/GrowingCircleAnimation.module.sass";

const COLORS = {
  white: "#FFF",
  midnightBlack: "#111",
};

const RADIUS_GROWTH_PER_MS = 0.027;
const GROWTH_FUNCTION_EXPONENTIAL = 2.8;

const mouseState = {
  mouseX: null,
  mouseY: null,
};

// circle animation state machine
const m = {
  isDark: null,
  radiusMultiplier: 0,
  maxRadiusMultiplier: 0,
  ctx: null, // canvas context
  timeAtPreviousDraw: null,

  createMachine: (ctx, isDark) => {
    // populate initial state
    m.ctx = ctx;
    m.isDark = isDark;
    m.maxRadiusMultiplier =
      Math.max(ctx.canvas.width * 0.75, ctx.canvas.height * 1.5) **
      (1.0 / GROWTH_FUNCTION_EXPONENTIAL);
    m.timeAtPreviousDraw = Date.now();
    return m.start;
  },
  start: () => {
    if (!m.isDark) {
      return m.canGrowCircle;
    }
    return m.canShrinkCircle;
  },

  canGrowCircle: () => {
    if (m.radiusMultiplier < m.maxRadiusMultiplier) {
      return m.growCircle;
    }
    return m.verifyCircleBounds;
  },

  canShrinkCircle: () => {
    if (m.radiusMultiplier > 0) {
      return m.shrinkCircle;
    }
    return m.verifyCircleBounds;
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
      // just paint the canvas
      m.ctx.fillStyle = m.isDark ? COLORS.midnightBlack : COLORS.white;
      m.ctx.fillRect(0, 0, m.ctx.canvas.width, m.ctx.canvas.height);

      return null; // no next step
    }

    return m.clearCanvas;
  },

  clearCanvas: () => {
    m.ctx.fillStyle = COLORS.midnightBlack;
    m.ctx.fillRect(0, 0, m.ctx.canvas.width, m.ctx.canvas.height);

    return m.drawCircle;
  },

  drawCircle: () => {
    m.ctx.fillStyle = COLORS.white;
    m.ctx.beginPath();
    m.ctx.arc(
      mouseState.mouseX,
      mouseState.mouseY,
      m.radiusMultiplier ** GROWTH_FUNCTION_EXPONENTIAL,
      0,
      2 * Math.PI
    );
    m.ctx.fill();
    m.timeAtPreviousDraw = Date.now();

    const waitTillAnimationCompletes = new Promise((rtn) => {
      const writeBackTime = () => {
        rtn(m.start);
      };

      window.requestAnimationFrame(writeBackTime); // note the time when we end drawing
    });

    return waitTillAnimationCompletes;
  },
};

const resizeCanvas = (context) => {
  const { width, height } = context.canvas.getBoundingClientRect();
  if (context.canvas.width !== width || context.canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    context.canvas.width = width * ratio;
    context.canvas.height = height * ratio;
    context.scale(ratio, ratio);
  }
};

const GrowingCircleAnimation = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    resizeCanvas(ctx);

    function handleClick(event) {
      // fill in the mouse coordinates
      mouseState.mouseX = event.detail.pageX;
      mouseState.mouseY = event.detail.pageY;
    }

    let stateMachine = m.createMachine(ctx, isDark);

    let stateMachineRunner = () => {
      if (stateMachine !== null) {
        if (stateMachine instanceof Function) {
          stateMachine = stateMachine();
          if (stateMachineRunner !== null) {
            stateMachineRunner();
          }
        } else {
          stateMachine.then((val) => {
            stateMachine = val();
            if (stateMachineRunner !== null) {
              stateMachineRunner();
            }
          });
        }
      }
    };

    stateMachineRunner();

    window.addEventListener("darkModeToggled", handleClick);
    return () => {
      stateMachineRunner = null;
      window.removeEventListener("darkModeToggled", handleClick);
    };
  }, [isDark]);

  return <canvas className={`${size}`} ref={canvasRef} />;
};

GrowingCircleAnimation.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default GrowingCircleAnimation;
