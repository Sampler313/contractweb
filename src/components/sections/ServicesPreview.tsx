"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Truck, Users, ShoppingCart, Forklift, TruckIcon, ArrowRight, Warehouse, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Truck,
    id: "equipment-rental",
    title: "Equipment Rental",
    image: "/images/jcb-fleet.jpg",
    desc: "Industrial equipment and machinery rental solutions — from heavy lifting gear to construction equipment, available for short and long-term projects.",
    tags: ["Heavy Equipment", "Industrial Machinery", "Short & Long Term"],
  },
  {
    icon: Users,
    id: "manpower-supply",
    title: "Manpower Supply",
    image: "/images/ManpowerSupply.webp",
    desc: "Supply of qualified, skilled, and experienced personnel — engineers, technicians, operators, and laborers — tailored to your project requirements.",
    tags: ["Engineers", "Technicians", "Skilled Workers"],
  },
  {
    icon: ShoppingCart,
    id: "trading-material-supply",
    title: "Trading & Material Supply",
    image: "/images/materials.png",
    desc: "Reliable sourcing, procurement, and supply of construction, electrical, piping, structural, and civil materials for industrial projects.",
    tags: ["Trading Services", "Industrial Supply", "Sourcing"],
  },
  {
    icon: Warehouse,
    id: "portacabin-container",
    title: "Portacabin & Container",
    image: "images/portacabin.jpeg",
    desc: "Premium fabrication, rental, and installation of site offices, modular cabins, security rooms, and shipping containers.",
    tags: ["Modular Cabins", "Site Offices", "Container Rentals"],
  },
  {
    icon: Forklift,
    id: "heavy-lifting",
    title: "Heavy Lifting Services",
    image: "/images/cranes-fleet.jpeg",
    desc: "Specialized heavy lifting and rigging operations for industrial, oil & gas, and construction projects — executed safely with certified equipment and skilled crews.",
    tags: ["Crane Operations", "Rigging", "Certified Crews"],
  },
  {
    icon: TruckIcon,
    id: "transportation-logistics",
    title: "Transportation & Logistics",
    image: "/images/transportation.jpeg",
    desc: "End-to-end transportation and logistics solutions for heavy equipment, bulk materials, and oversized cargo across Saudi Arabia and the GCC region.",
    tags: ["Heavy Haulage", "Fleet Management", "Nationwide Coverage"],
  },
];

export default function ServicesPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else if (window.innerWidth < 1280) setItemsPerView(3);
      else setItemsPerView(4);
    };
    
    // Set initial
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, services.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="section-pad bg-brand-black industrial-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
          <div>
            <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              What We Deliver
            </h2>
            <div className="slash-divider mb-4" />
            <p className="text-white max-w-xl">
              Comprehensive industrial solutions designed to support every stage of your project lifecycle.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 hover:bg-brand-orange hover:border-brand-orange disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:border-white/10 transition-colors text-white"
              aria-label="Previous services"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 flex items-center justify-center border border-white/10 bg-white/5 hover:bg-brand-orange hover:border-brand-orange disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:border-white/10 transition-colors text-white"
              aria-label="Next services"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(calc(-${(currentIndex * 100) / itemsPerView}% - ${currentIndex * (24 / itemsPerView)}px))`,
              gap: '24px'
            }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                style={{ flex: `0 0 calc(${100 / itemsPerView}% - ${24 * (itemsPerView - 1) / itemsPerView}px)` }}
                className="group relative border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Smaller Card Image */}
                  <div className="relative h-32 w-full overflow-hidden mb-4 border border-white/10 bg-brand-black">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Icon & Number Row */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-10 h-10 bg-brand-orange/15 flex items-center justify-center group-hover:bg-brand-orange transition-all duration-300">
                      <service.icon size={18} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-white/10 text-3xl font-black leading-none select-none group-hover:text-brand-orange/20 transition-colors duration-300">
                      0{i + 1}
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">{service.title}</h3>
                  <p className="text-white text-xs leading-relaxed mb-4 min-h-[50px] line-clamp-3">{service.desc}</p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold tracking-wider uppercase px-2 py-1 border border-white/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-brand-orange text-xs font-semibold uppercase tracking-wider group/link hover:gap-3 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
