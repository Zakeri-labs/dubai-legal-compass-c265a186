type TrustItem = { n: string; title: string; body: string };

export function TrustTimeline({
  label,
  heading,
  sub,
  items,
}: {
  label: string;
  heading: string;
  sub: string;
  items: TrustItem[];
}) {
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
            {label}
          </div>
          <h2
            id="trust-heading"
            className="mt-5 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight md:text-[2.75rem]"
            style={{ color: "#111111" }}
          >
            {heading}
          </h2>
          <p
            className="mt-5 max-w-xl text-base leading-relaxed md:text-[17px]"
            style={{ color: "#5C564E" }}
          >
            {sub}
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
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
