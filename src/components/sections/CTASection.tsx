import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-orange">
      {/* Diagonal background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -60deg,
            transparent,
            transparent 30px,
            rgba(255,255,255,1) 30px,
            rgba(255,255,255,1) 31px
          )`,
        }}
      />

      {/* Left dark wedge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/3 bg-brand-black/20"
        style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block bg-white/20 text-white text-[10px] font-black tracking-[0.3em] uppercase px-4 py-2 mb-6"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)" }}>
            Start Today
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight mb-6">
            Ready to Support
            <br />
            Your Next Project?
          </h2>
          <p className="text-white text-lg max-w-xl mx-auto mb-10">
            Tell us about your requirements and our team will respond with a tailored solution within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-secondary bg-white border-white text-brand-orange hover:bg-transparent hover:text-white px-8 py-4">
              Request a Consultation
              <ChevronRight size={16} />
            </Link>
            <a href="tel:+966500000000" className="inline-flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-wider hover:gap-4 transition-all duration-200">
              <Phone size={16} />
              +966 50 000 0000
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
