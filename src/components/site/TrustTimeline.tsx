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
  return (
    <section
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

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <li key={item.n} className="relative rounded-xl border border-border bg-card p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {item.n}
              </div>
              <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
