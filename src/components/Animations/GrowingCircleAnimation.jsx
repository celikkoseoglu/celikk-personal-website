import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { size } from "../../stylesheets/components/Animations/GrowingCircleAnimation.module.sass";

const ANIM_DURATION_CONSTANT = 50000;
const RADIUS_INCREASE_CONSTANT = 1600;

const colors = {
  white: "#FFF",
  midnightBlack: "#111",
};

const getExponentialRadius = (frame) => {
  return frame ** 2 * 0.01;
};

const canvasState = {
  isAnimating: false,
  isReverse: false,
  wasDarkBeforeAnimationStarted: null, // this variable name doesn't make much sense
  mouseX: null,
  mouseY: null,
  currentAnimationFrame: null,
  currentAnimationTime: 0,
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
  let ctx = null;

  function fillCanvas(paintDark) {
    ctx.fillStyle = paintDark ? colors.midnightBlack : colors.white;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  const getMaxRadius = () => {
    return Math.max(ctx.canvas.width * 0.75, ctx.canvas.height * 1.25);
  };

  const getRadiusCoefficient = (timePastInMills) => {
    return (
      (1 - (ANIM_DURATION_CONSTANT - timePastInMills) / ANIM_DURATION_CONSTANT) *
      RADIUS_INCREASE_CONSTANT
    );
  };

  const draw = (radius) => {
    fillCanvas(canvasState.wasDarkBeforeAnimationStarted);

    ctx.fillStyle = canvasState.wasDarkBeforeAnimationStarted ? colors.white : colors.midnightBlack;
    ctx.beginPath();
    ctx.arc(canvasState.mouseX, canvasState.mouseY, getExponentialRadius(radius), 0, 2 * Math.PI);
    ctx.fill();
  };

  function startDrawing() {
    const startTimeInMills = Date.now() - 1; // make sure we don't start from now
    const maxRadius = getMaxRadius();

    const render = () => {
      if (canvasState.isReverse) {
        canvasState.currentAnimationTime -= Date.now() - startTimeInMills;
      } else {
        canvasState.currentAnimationTime += Date.now() - startTimeInMills;
      }
      const radius = getRadiusCoefficient(Math.max(0, canvasState.currentAnimationTime));
      draw(radius);
      canvasState.currentAnimationFrame = window.requestAnimationFrame(render);
      if (getExponentialRadius(radius) > maxRadius || radius === 0) {
        window.cancelAnimationFrame(canvasState.currentAnimationFrame);
        canvasState.isAnimating = false;
        canvasState.isReverse = false;
        canvasState.currentAnimationTime = 0;
        canvasState.wasDarkBeforeAnimationStarted = isDark;
        fillCanvas(isDark);
      }
    };
    render();
  }

  function handleClick(event) {
    window.cancelAnimationFrame(canvasState.currentAnimationFrame);

    // fill in the mouse coordinates
    canvasState.mouseX = event.detail.pageX;
    canvasState.mouseY = event.detail.pageY;

    // next time the component is redrawn, it will know it needs to animate
    if (canvasState.isAnimating === false) {
      canvasState.isAnimating = true;
    } else {
      canvasState.isReverse = !canvasState.isReverse;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ctx = canvas.getContext("2d");
    resizeCanvas(ctx);

    if (!canvasState.isAnimating) {
      fillCanvas(isDark);
      canvasState.wasDarkBeforeAnimationStarted = isDark;
    } else {
      fillCanvas(canvasState.wasDarkBeforeAnimationStarted);
      startDrawing();
    }

    window.addEventListener("darkModeToggled", handleClick);
    return () => {
      window.removeEventListener("darkModeToggled", handleClick);
    };
  }, [handleClick]);

  return <canvas className={`${size}`} ref={canvasRef} />;
};

GrowingCircleAnimation.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default GrowingCircleAnimation;
