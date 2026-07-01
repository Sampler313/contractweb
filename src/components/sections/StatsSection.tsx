import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 5, suffix: "+", label: "Years of Experience", desc: "Serving Saudi industry" },
  { value: 250, suffix: "+", label: "Projects Supported", desc: "Across the Kingdom" },
  { value: 200, suffix: "+", label: "Skilled Workforce", desc: "Qualified professionals" },
  { value: 96, suffix: "%", label: "Client Satisfaction", desc: "Repeat partnerships" },
];

export default function StatsSection() {
  return (
    <section className="bg-brand-orange relative">
      {/* Top slash */}
      <div
        className="absolute top-0 left-0 right-0 h-6 bg-brand-black"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:px-8">
              <div className="text-4xl lg:text-5xl font-black text-white mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
              </div>
              <div className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-white text-xs">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom slash */}
      <div
        className="absolute bottom-0 left-0 right-0 h-6 bg-brand-light"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
