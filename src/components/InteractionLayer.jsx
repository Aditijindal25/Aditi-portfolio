import { useEffect, useRef, useState } from "react";

function InteractionLayer() {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);
  const progressRef = useRef(null);
  const frameRef = useRef(null);
  const pointerRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const [cursorLabel, setCursorLabel] = useState("");
  const [isPointerMode, setIsPointerMode] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canHover || reducedMotion) {
      return undefined;
    }

    const render = () => {
      const target = pointerRef.current;
      const current = currentRef.current;
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }

      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${current.x + 18}px, ${current.y + 18}px, 0)`;
      }

      frameRef.current = requestAnimationFrame(render);
    };

    const handlePointerMove = (event) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      document.documentElement.style.setProperty("--pointer-x", `${(event.clientX - window.innerWidth / 2) * 0.018}px`);
      document.documentElement.style.setProperty("--pointer-y", `${(event.clientY - window.innerHeight / 2) * 0.018}px`);

      const magnetic = event.target.closest("[data-magnetic]");
      if (magnetic) {
        const bounds = magnetic.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.08;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.08;
        magnetic.style.setProperty("--magnetic-x", `${x}px`);
        magnetic.style.setProperty("--magnetic-y", `${y}px`);
      }
    };

    const handlePointerOver = (event) => {
      const target = event.target.closest("a, button, .project-item, [data-cursor-label]");
      const nextLabel = target?.dataset.cursorLabel || (target?.classList.contains("project-item") ? "VIEW" : "");
      setCursorLabel(nextLabel);
      setIsPointerMode(Boolean(target));
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget) {
        setCursorLabel("");
        setIsPointerMode(false);
      }
    };

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    frameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`cursor-dot ${isPointerMode ? "cursor-dot-active" : ""}`} aria-hidden="true" />
      <div ref={labelRef} className={`cursor-label ${cursorLabel ? "cursor-label-visible" : ""}`} aria-hidden="true">
        {cursorLabel}
      </div>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
    </>
  );
}

export default InteractionLayer;
