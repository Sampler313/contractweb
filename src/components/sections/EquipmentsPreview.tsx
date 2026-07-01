"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/app/equipments/data";

export default function EquipmentsPreview() {
  return (
    <section className="section-pad bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            Our Premium Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Featured Equipment
          </h2>
          <div className="slash-divider mx-auto mb-4" />
          <p className="text-white max-w-2xl mx-auto">
            Explore our vast fleet of reliable machinery, vehicles, and specialized attachments tailored for any industrial requirement.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-2 sm:gap-4">
          {categories.map((cat, i) => (
            <Link 
              href={`/equipments`} 
              key={cat.id} 
              className={`block group relative overflow-hidden rounded-2xl bg-brand-black border border-white/5 shadow-lg min-h-[160px] sm:min-h-[200px] lg:min-h-[240px] ${i === 0 ? 'col-span-2 row-span-2 min-h-[328px] sm:min-h-[416px] lg:min-h-[496px]' : ''}`}
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center p-4">
                 <Image 
                   src={(cat as any).previewImage || cat.items[0].image} 
                   alt={cat.title} 
                   className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110" 
                 />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/80" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end z-10">
                <h3 className={`text-white font-bold leading-tight mb-1 sm:mb-2 ${i === 0 ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-base sm:text-xl'}`}>
                  {cat.title}
                </h3>
                <p className={`text-white mb-2 sm:mb-4 line-clamp-2 ${i === 0 ? 'text-sm sm:text-base max-w-md' : 'text-xs sm:text-sm'}`}>
                  {cat.description}
                </p>
                
                {/* Animated Button */}
                <div className="overflow-hidden hidden sm:block">
                  <div className="flex items-center gap-2 text-brand-orange text-sm font-bold uppercase tracking-wider transform translate-y-[120%] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore Category <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              
              {/* Glowing Border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-orange/40 transition-colors duration-500 rounded-2xl pointer-events-none" />
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/equipments" className="btn-primary">
            View All Equipments
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
