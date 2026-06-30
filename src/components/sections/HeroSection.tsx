"use client";

import Link from "next/link";
import { ChevronRight, ChevronLeft, ArrowDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')`,
    label: "Trading Materials",
    eyebrow: "Great Mountain General Contracting Est.",
    headline: (
      <>
        Industrial
        <br />
        <span className="text-brand-orange">Solutions</span>
        <br />
        You Can Trust
      </>
    ),
    description:
      "Great Mountain General Contracting Establishment delivers reliable equipment rental, manpower supply, trading, and material solutions that enable industries and drive progress across Saudi Arabia.",
    tagline: "Enabling Industries · Empowering Businesses · Driving Progress",
    primaryCta: { label: "Our Services", href: "/services" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
  {
    id: 2,
    backgroundImage: `url('/images/cranes-fleet.jpeg')`,
    label: "Heavy Lifting",
    eyebrow: "Heavy Equipment & Crane Rental",
    headline: (
      <>
        Powerful
        <br />
        <span className="text-brand-orange">Crane Fleet</span>
        <br />
        At Your Service
      </>
    ),
    description:
      "Our extensive fleet of heavy-duty cranes and lifting equipment is ready for your most demanding projects. From mobile cranes to tower cranes — we have the capacity to lift your ambitions.",
    tagline: "Lifting Excellence · Engineering Strength · Reaching Heights",
    primaryCta: { label: "View Fleet", href: "/services" },
    secondaryCta: { label: "Get a Quote", href: "/contact" },
  },
  {
    id: 3,
    backgroundImage: `url('/images/jcb-fleet.jpg')`,
    label: "Civil Equipment",
    eyebrow: "Multi-Equipment Rental Solutions",
    headline: (
      <>
        Complete
        <br />
        <span className="text-brand-orange">JCB Fleet</span>
        <br />
        Built to Perform
      </>
    ),
    description:
      "From excavators and skid steers to wheel loaders and backhoe loaders — our JCB fleet covers every ground-level operation. Versatile, reliable, and operator-ready for your site, any day.",
    tagline: "Excavate · Load · Grade · Deliver",
    primaryCta: { label: "Explore Equipment", href: "/services" },
    secondaryCta: { label: "Rent Now", href: "/contact" },
  },
  {
    id: 4,
    backgroundImage: `url('/images/ManpowerSupply.webp')`,
    label: "Manpower Supply",
    eyebrow: "Qualified & Skilled Workforce",
    headline: (
      <>
        Skilled
        <br />
        <span className="text-brand-orange">Manpower</span>
        <br />
        Ready to Deploy
      </>
    ),
    description:
      "GMGCE provides vetted, trained, and highly qualified technical, engineering, and support personnel to meet the exact project demands of Saudi Arabia's industrial sectors.",
    tagline: "Qualified People · Verified Expertise · Safe Operations",
    primaryCta: { label: "Workforce Services", href: "/services#manpower-supply" },
    secondaryCta: { label: "Request Support", href: "/contact" },
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 800);
    },
    [animating, current]
  );

  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo]
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo]
  );

  useEffect(() => {
    const timer = setTimeout(() => next(), 6000);
    return () => clearTimeout(timer);
  }, [current, next]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">

      {/* ── Each slide: background + content stacked, fades in/out ── */}
      {slides.map((slide, i) => {
        const isActive = i === current;
        return (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 2 : 1 }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: slide.backgroundImage }}
            />

            {/* Overlay — light enough to see the image clearly */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16">
              <div className="max-w-3xl">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="bg-brand-orange text-white text-sm font-black tracking-[0.25em] uppercase px-10 py-5"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)" }}
                  >
                    {slide.eyebrow}
                  </div>
                </div>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6">
                  {slide.headline}
                </h1>

                {/* Description */}
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link href={slide.primaryCta.href} className="btn-primary">
                    {slide.primaryCta.label}
                    <ChevronRight size={16} />
                  </Link>
                  <Link href={slide.secondaryCta.href} className="btn-outline-white">
                    {slide.secondaryCta.label}
                  </Link>
                </div>

                {/* Tagline */}
                <p className="mt-12 text-white/40 text-xs font-medium tracking-[0.2em] uppercase">
                  {slide.tagline}
                </p>

              </div>
            </div>
          </div>
        );
      })}

      {/* Orange left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-orange to-transparent z-[10]" />

      {/* ── Arrow navigation ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-[10] flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black/30 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-[10] flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black/30 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-[10] flex items-center gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}>
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2 bg-brand-orange"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-20 right-8 z-[10] text-white/40 text-xs font-medium tracking-[0.2em] uppercase">
        {slides[current].label} &nbsp;{current + 1} / {slides.length}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10] flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <ArrowDown size={20} />
      </div>

    </section>
  );
}
