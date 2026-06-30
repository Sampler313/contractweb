import type { Metadata } from "next";
import { Target, Eye, Award, ShieldCheck, Star, Handshake, CheckCircle2, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "About Us — Who We Are",
  description:
    "Learn about Great Mountain General Contracting Establishment — our mission, vision, values, and commitment to Saudi industrial excellence.",
};

const values = [
  { icon: Award, label: "Quality", desc: "Uncompromising standards in every service, material, and workforce engagement." },
  { icon: ShieldCheck, label: "Safety", desc: "HSE compliance is built into our DNA — zero-incident operations are our baseline." },
  { icon: Handshake, label: "Integrity", desc: "We build partnerships based on transparency, honesty, and mutual respect." },
  { icon: Star, label: "Excellence", desc: "Continuous improvement and innovation drive everything we do." },
  { icon: CheckCircle2, label: "Reliability", desc: "Clients count on us to show up, deliver, and follow through — every time." },
  { icon: TrendingUp, label: "Commitment", desc: "Dedicated to client success, long-term partnerships, and sustainable growth." },
];

const strengths = [
  "Established industrial services presence in Saudi Arabia",
  "Extensive equipment fleet maintained to OEM standards",
  "Multi-discipline workforce including certified engineers",
  "Deep understanding of ARAMCO and SABIC requirements",
  "Local supply chain relationships for rapid procurement",
  "Committed to Vision 2030 industrial development",
  "Flexible contract structures for all project scales",
  "24/7 operational support capability",
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-20 bg-brand-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(232,68,10,1) 40px, rgba(232,68,10,1) 41px)`,
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-orange to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase block mb-4">About US</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-none tracking-tight mb-4">
            Who We Are
          </h1>
          <div className="slash-divider mb-6" />
          <p className="text-white/50 text-lg max-w-2xl">
            A Saudi Arabian industrial services company dedicated to supporting industrial projects with reliable, efficient, and professional solutions.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase block mb-3">Our Story</span>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-black leading-tight tracking-tight mb-4">
                  Trusted Partner to Saudi Arabia&apos;s
                  <span className="text-brand-orange"> Industrial Sector</span>
                </h2>
                <div className="slash-divider mb-6" />
                <p className="text-brand-gray leading-relaxed mb-5">
                  Great Mountain General Contracting Establishment (GMGCE) was founded with a clear purpose: to provide Saudi Arabia&apos;s growing industrial sector with the equipment, manpower, materials, and trading solutions they need to operate efficiently and grow confidently.
                </p>
                <p className="text-brand-gray leading-relaxed mb-5">
                  Operating under the brand name Mountain Rentals, we serve clients across the oil & gas, petrochemical, construction, and manufacturing industries — delivering services that are reliable, scalable, and aligned with the Kingdom&apos;s Vision 2030 development objectives.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  Our commitment is simple: when you partner with mountain rentals, you gain more than a vendor. You gain a dedicated team that treats your project objectives as our own.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 5, suffix: "+", label: "Years Serving KSA" },
                  { value: 250, suffix: "+", label: "Projects Completed" },
                  { value: 200, suffix: "+", label: "Qualified Personnel" },
                  { value: 50, suffix: "+", label: "Equipment Units" },
                ].map((s, i) => (
                  <div key={i} className="bg-brand-light p-6 border-l-4 border-brand-orange">
                    <div className="text-3xl font-black text-brand-black mb-1">
                      <AnimatedCounter end={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-brand-gray text-sm font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-brand-black industrial-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <div className="relative border border-brand-orange/30 bg-white/5 p-10 h-full">
                <div className="w-14 h-14 bg-brand-orange flex items-center justify-center mb-6"
                  style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)" }}>
                  <Target size={24} className="text-white" />
                </div>
                <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase block mb-3">Our Mission</span>
                <h3 className="text-white text-2xl font-black mb-4">What Drives Us</h3>
                <p className="text-white/60 leading-relaxed">
                  To provide reliable industrial services and solutions that empower businesses, support industrial growth, and contribute to the Kingdom of Saudi Arabia&apos;s sustainable development — delivering quality, value, and professionalism on every engagement.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="relative border border-white/10 bg-white/5 p-10 h-full">
                <div className="w-14 h-14 bg-white/10 flex items-center justify-center mb-6"
                  style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)" }}>
                  <Eye size={24} className="text-brand-orange" />
                </div>
                <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase block mb-3">Our Vision</span>
                <h3 className="text-white text-2xl font-black mb-4">Where We&apos;re Headed</h3>
                <p className="text-white/60 leading-relaxed">
                  To become a trusted leader in industrial support services across Saudi Arabia and the GCC region — recognized for our reliability, our people, and our ability to deliver complex industrial solutions with consistent excellence.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Our Core Values"
              title="The Principles We Operate By"
              subtitle="Every decision, every service, and every relationship is guided by these foundational values."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="service-card group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                      <v.icon size={20} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black mb-2">{v.label}</h3>
                      <p className="text-brand-gray text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Great Mountain */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionHeader
                eyebrow="Why Great Mountain"
                title="Our Competitive Advantage"
                subtitle="What separates Mountain Rentals from the rest is our combination of local knowledge, professional capacity, and client-first approach."
                align="left"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {strengths.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 100%, 4px 100%)" }}>
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    <span className="text-brand-gray text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div
                  className="w-full h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80')`,
                  }}
                />
                {/* Orange corner accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-orange" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-brand-orange" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
