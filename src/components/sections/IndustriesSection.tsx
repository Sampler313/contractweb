import { Flame, FlaskConical, Building2, Factory, Zap, HardHat } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const industries = [
  { icon: Flame, label: "Oil & Gas", desc: "Supporting upstream, midstream & downstream operations" },
  { icon: FlaskConical, label: "Petrochemical", desc: "Specialized solutions for chemical processing plants" },
  { icon: Building2, label: "Construction", desc: "Equipment & manpower for large-scale builds" },
  { icon: Factory, label: "Manufacturing", desc: "Operational support for production facilities" },
  { icon: Zap, label: "Energy", desc: "Power generation and utilities infrastructure" },
  { icon: HardHat, label: "Infrastructure", desc: "Civil and industrial infrastructure development" },
];

export default function IndustriesSection() {
  return (
    <section className="section-pad bg-brand-off-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-none transform rotate-12 translate-x-20 -translate-y-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase block mb-3">
                Industries We Serve
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-black leading-tight tracking-tight mb-4">
                Powering Saudi Arabia&apos;s
                <br />
                <span className="text-brand-orange">Core Industries</span>
              </h2>
              <div className="slash-divider mb-6" />
              <p className="text-brand-gray leading-relaxed text-base mb-6">
                From oil fields to construction sites, our services are trusted by leading companies across Saudi Arabia's most critical industrial sectors. We understand the demands, the timelines, and the standards required.
              </p>
              <p className="text-brand-gray leading-relaxed text-sm">
                Whether you are operating in the Eastern Province, Jubail Industrial City, or anywhere across the Kingdom, Mountain Rentals is your reliable on-ground partner.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="group border border-gray-200 bg-white p-5 hover:border-brand-orange hover:bg-brand-orange transition-all duration-300 cursor-default">
                  <industry.icon
                    size={28}
                    className="text-brand-orange group-hover:text-white transition-colors duration-300 mb-3"
                  />
                  <h3 className="font-bold text-brand-black group-hover:text-white text-sm mb-1 transition-colors duration-300">
                    {industry.label}
                  </h3>
                  <p className="text-brand-gray group-hover:text-white text-xs leading-relaxed transition-colors duration-300">
                    {industry.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
