import { useEffect, useRef, useState } from "react";

function InteractionLayer() {
  const labelRef = useRef(null);
  const progressRef = useRef(null);
  const frameRef = useRef(null);
  const pointerRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const projectHoveredRef = useRef(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);

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
      labelRef.current?.style.setProperty("--cursor-x", `${current.x + 14}px`);
      labelRef.current?.style.setProperty("--cursor-y", `${current.y + 14}px`);

      if (Math.abs(target.x - current.x) > 0.5 || Math.abs(target.y - current.y) > 0.5) {
        frameRef.current = requestAnimationFrame(render);
      } else {
        frameRef.current = null;
      }
    };

    const handlePointerMove = (event) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      document.documentElement.style.setProperty("--pointer-x", `${(event.clientX - window.innerWidth / 2) * 0.018}px`);
      document.documentElement.style.setProperty("--pointer-y", `${(event.clientY - window.innerHeight / 2) * 0.018}px`);

      if (projectHoveredRef.current && frameRef.current === null) {
        frameRef.current = requestAnimationFrame(render);
      }

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
      if (event.target.closest("[data-project-cursor]")) {
        projectHoveredRef.current = true;
        setIsProjectHovered(true);
        pointerRef.current = { x: event.clientX, y: event.clientY };
        if (frameRef.current === null) frameRef.current = requestAnimationFrame(render);
      }
    };

    const handlePointerOut = (event) => {
      const fromProject = event.target.closest("[data-project-cursor]");
      const toProject = event.relatedTarget?.closest?.("[data-project-cursor]");
      if (fromProject && !toProject) {
        projectHoveredRef.current = false;
        setIsProjectHovered(false);
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
      <div
        ref={labelRef}
        className={`cursor-label ${isProjectHovered ? "cursor-label-visible" : ""}`}
        aria-hidden="true"
      >
        VIEW PROJECT ↗
      </div>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
    </>
  );
}

export default InteractionLayer;
