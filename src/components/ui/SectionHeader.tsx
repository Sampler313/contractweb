interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, align = "center", light = false }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-14`}>
      <span
        className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase mb-3"
      >
        {eyebrow}
      </span>
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.6rem] font-black leading-tight tracking-tight ${
          light ? "text-white" : "text-brand-black"
        }`}
      >
        {title}
      </h2>
      {align === "center" ? (
        <div className="slash-divider mt-4" />
      ) : (
        <div className="slash-divider mt-4" />
      )}
      {subtitle && (
        <p
          className={`mt-5 text-base lg:text-lg leading-relaxed max-w-2xl ${
            light ? "text-white" : "text-brand-gray"
          } ${align === "center" ? "text-center" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
