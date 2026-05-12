import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    n: "01",
    title: "Established office",
    body: "Backed by a real legal practice with a physical office and long-term professional presence.",
  },
  {
    n: "02",
    title: "Reconciliation first",
    body: "In family matters, we prioritize resolution and stability before litigation whenever possible.",
  },
  {
    n: "03",
    title: "Multilingual communication",
    body: "Direct legal guidance in English, Arabic, Farsi, and Urdu without communication barriers.",
  },
  {
    n: "04",
    title: "Straightforward counsel",
    body: "Clear legal advice based on reality, risk, and practical outcomes — not false reassurance.",
  },
];

export function TrustTimeline() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeMobile, setActiveMobile] = useState<number>(0);
  const [visibleDesktop, setVisibleDesktop] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  // Desktop: trigger entrance animation when section enters viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisibleDesktop(true),
      { threshold: 0.25 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Mobile: scroll-active step
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
    <section
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#F4F1EA" }}
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="max-w-2xl">
          <div
            className="text-[11px] font-medium uppercase tracking-[0.22em]"
            style={{ color: "#6B6358" }}
          >
            02 — Trust
          </div>
          <h2
            id="trust-heading"
            className="mt-5 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight md:text-[2.75rem]"
            style={{ color: "#111111" }}
          >
            Why clients trust this practice
          </h2>
          <p
            className="mt-5 max-w-xl text-base leading-relaxed md:text-[17px]"
            style={{ color: "#5C564E" }}
          >
            Established legal counsel focused on clarity, accessibility, and practical outcomes.
          </p>
        </div>

        {/* DESKTOP — horizontal alternating timeline */}
        <div className="relative mt-24 hidden md:block">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
            style={{ backgroundColor: "rgba(17,17,17,0.14)" }}
          />
          <ul className="relative grid grid-cols-4">
            {ITEMS.map((item, i) => {
              const above = i % 2 === 0;
              const isActive = hovered === i;
              return (
                <li
                  key={item.n}
                  className="relative flex h-[360px] flex-col items-center justify-center"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Connector */}
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

                  {/* Circle */}
                  <button
                    type="button"
                    aria-label={`${item.n} ${item.title}`}
                    className={cn(
                      "relative z-10 grid h-12 w-12 place-items-center rounded-full border text-[12px] font-medium tracking-wider transition-all duration-300 ease-out"
                    )}
                    style={{
                      backgroundColor: isActive ? "var(--primary)" : "#F4F1EA",
                      color: isActive ? "var(--primary-foreground)" : "#111111",
                      borderColor: isActive
                        ? "var(--primary)"
                        : "rgba(17,17,17,0.22)",
                      transform: isActive ? "scale(1.08)" : "scale(1)",
                    }}
                  >
                    {item.n}
                  </button>

                  {/* Text block */}
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
                    <h3
                      className="font-display text-[17px] font-semibold leading-snug"
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
          {ITEMS.map((item, i) => {
            const isActive = activeMobile === i;
            return (
              <li
                key={item.n}
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
                      backgroundColor: isActive ? "var(--primary)" : "#F4F1EA",
                      color: isActive ? "var(--primary-foreground)" : "#111111",
                      borderColor: isActive
                        ? "var(--primary)"
                        : "rgba(17,17,17,0.22)",
                    }}
                  >
                    {item.n}
                  </div>
                </div>
                <div
                  className="flex-1 pt-2 transition-all duration-500 ease-out"
                  style={{
                    opacity: isActive ? 1 : 0.55,
                    transform: isActive ? "translateX(0)" : "translateX(-6px)",
                  }}
                >
                  <h3
                    className="font-display text-[17px] font-semibold leading-snug"
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
    </section>
  );
}
