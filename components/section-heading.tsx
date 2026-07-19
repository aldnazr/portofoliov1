type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "right";
};

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "right" ? "md:ml-auto md:text-right" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-5 flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-[0.18em] text-(--accent)">
        <span>{number}</span>
        <span className="h-px w-8 bg-current/50" aria-hidden="true" />
        {eyebrow}
      </p>
      <h3 className="leading-tight font-medium tracking-[-0.045em] text-(--foreground) sm:text-4xl md:text-5xl">
        {title}
      </h3>
      {description ?
        <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-(--muted-light) sm:text-base">
          {description}
        </p>
      : null}
    </div>
  );
}
