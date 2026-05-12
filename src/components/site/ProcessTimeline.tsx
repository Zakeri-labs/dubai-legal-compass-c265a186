import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ProcessStep = { title: string; body: string };

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeMobile, setActiveMobile] = useState<number>(0);
  const [visibleDesktop, setVisibleDesktop] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisibleDesktop(true),
      { threshold: 0.25 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActiveMobile(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* DESKTOP — horizontal alternating timeline */}
      <div className="relative mt-24 hidden md:block">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
          style={{ backgroundColor: "rgba(17,17,17,0.14)" }}
        />
        <ul className="relative grid grid-cols-4">
          {steps.map((item, i) => {
            const above = i % 2 === 0;
            const isActive = hovered === i;
            const n = String(i + 1).padStart(2, "0");
            return (
              <li
                key={i}
                className="relative flex h-[360px] flex-col items-center justify-center"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  aria-hidden
                  className={cn(
                    "absolute left-1/2 w-px origin-top transition-transform duration-500 ease-out",
                    above ? "bottom-1/2 origin-bottom" : "top-1/2 origin-top"
                  )}
                  style={{
                    height: "70px",
                    backgroundColor: isActive
                      ? "var(--primary)"
                      : "rgba(17,17,17,0.18)",
                    transform: visibleDesktop ? "scaleY(1)" : "scaleY(0)",
                    transitionDelay: `${200 + i * 120}ms`,
                  }}
                />

                <button
                  type="button"
                  aria-label={`Step ${i + 1} ${item.title}`}
                  className={cn(
                    "relative z-10 grid h-12 w-12 place-items-center rounded-full border text-[12px] font-medium tracking-wider transition-all duration-300 ease-out"
                  )}
                  style={{
                    backgroundColor: isActive ? "var(--primary)" : "var(--background)",
                    color: isActive ? "var(--primary-foreground)" : "#111111",
                    borderColor: isActive
                      ? "var(--primary)"
                      : "rgba(17,17,17,0.22)",
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  {n}
                </button>

                <div
                  className={cn(
                    "absolute left-1/2 w-[260px] -translate-x-1/2 px-2 text-center transition-all duration-500 ease-out",
                    above ? "bottom-[calc(50%+70px+16px)]" : "top-[calc(50%+70px+16px)]"
                  )}
                  style={{
                    opacity: visibleDesktop ? (hovered === null || isActive ? 1 : 0.45) : 0,
                    transform: visibleDesktop
                      ? "translate(-50%, 0)"
                      : `translate(-50%, ${above ? "-8px" : "8px"})`,
                    transitionDelay: `${450 + i * 120}ms`,
                  }}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Step {i + 1}
                  </div>
                  <h3
                    className="mt-3 font-display text-[17px] font-semibold leading-snug"
                    style={{ color: isActive ? "var(--primary)" : "#1A1A1A" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-[13.5px] leading-relaxed"
                    style={{ color: "#5C564E" }}
                  >
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* MOBILE — vertical scroll-active timeline */}
      <ol className="relative mt-16 md:hidden">
        <div
          aria-hidden
          className="absolute bottom-2 left-[23px] top-2 w-px"
          style={{ backgroundColor: "rgba(17,17,17,0.14)" }}
        />
        {steps.map((item, i) => {
          const isActive = activeMobile === i;
          const n = String(i + 1).padStart(2, "0");
          return (
            <li
              key={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              data-idx={i}
              className="relative flex gap-5 pb-12 last:pb-0"
            >
              <div className="relative z-10 flex-shrink-0">
                <div
                  className="grid h-12 w-12 place-items-center rounded-full border text-[12px] font-medium tracking-wider transition-all duration-500"
                  style={{
                    backgroundColor: isActive ? "var(--primary)" : "var(--background)",
                    color: isActive ? "var(--primary-foreground)" : "#111111",
                    borderColor: isActive
                      ? "var(--primary)"
                      : "rgba(17,17,17,0.22)",
                  }}
                >
                  {n}
                </div>
              </div>
              <div
                className="flex-1 pt-2 transition-all duration-500 ease-out"
                style={{
                  opacity: isActive ? 1 : 0.55,
                  transform: isActive ? "translateX(0)" : "translateX(-6px)",
                }}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Step {i + 1}
                </div>
                <h3
                  className="mt-3 font-display text-[17px] font-semibold leading-snug"
                  style={{ color: isActive ? "var(--primary)" : "#1A1A1A" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-2 text-[14px] leading-relaxed"
                  style={{ color: "#5C564E" }}
                >
                  {item.body}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
