import React, { useEffect, useRef } from "react";

const GrowingCircleCanvasTime = () => {
  const canvasRef = useRef(null);
  const RADIUS_INCREASE_PER_MS = 0.05;
  let timeAtPreviousDraw = Date.now();

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#FFF";
    ctx.beginPath();
    ctx.arc(50, 100, frameCount, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    const { width, height } = context.canvas.getBoundingClientRect();
    if (context.canvas.width !== width || context.canvas.height !== height) {
      const { devicePixelRatio: originalRatio = 1 } = window;
      // we don't need such a high resolution for this type of animation. Plus it makes the edges
      // of the circle look blurred, which looks nicer. Also improves performance a lot on slow GPUs
      // change from 0.5 to 1 if you want to use display's native resolution.
      const lowerResolutionRatio = originalRatio * 0.5;
      context.canvas.width = width * lowerResolutionRatio;
      context.canvas.height = height * lowerResolutionRatio;
      context.scale(lowerResolutionRatio, lowerResolutionRatio);
    }

    const render = () => {
      const timeAtRenderStart = Date.now();
      const timePastSincePreviousDraw = timeAtRenderStart - timeAtPreviousDraw;
      // In the future, we will get computers so fast that the difference between
      // previous and current frame is less than 1ms. Math.max() ensures that we
      // still grow the circle even if the computer is super fast.
      const timePastSinceLastDraw = Math.max(1, timePastSincePreviousDraw);
      frameCount += RADIUS_INCREASE_PER_MS * timePastSinceLastDraw;
      timeAtPreviousDraw = timeAtRenderStart;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} />;
};

export default GrowingCircleCanvasTime;
