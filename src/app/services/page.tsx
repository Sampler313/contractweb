import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  Users,
  ShoppingCart,
  Package,
  Forklift,
  TruckIcon,
  ChevronRight,
  CheckCircle2,
  Warehouse,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import ServiceInquiryForm from "@/components/ui/ServiceInquiryForm";

export const metadata: Metadata = {
  title: "Industrial Services in Saudi Arabia",
  description:
    "GMGCE provides Equipment Rental, Manpower Supply, Trading and Material Supply, Portacabin & Container Services, and Industrial Support Services across Saudi Arabia.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    id: "equipment-rental",
    icon: Truck,
    title: "Equipment Rental",
    tagline: "The right machine, on-site, on time.",
    image: "/images/jcb-fleet.jpg",
    desc: "We provide industrial equipment and machinery rental solutions that support operational efficiency and project success across Saudi Arabia. Our maintained fleet is available for both short-term and long-term engagements, with rapid mobilization to your site.",
    points: [
      "Heavy Construction Equipment",
      "Industrial Machinery & Tools",
      "Lifting & Rigging Equipment",
      "Short-Term Project Rentals",
      "Long-Term Contract Rentals",
      "Operator Support Available",
      "Maintenance Included",
      "24/7 Breakdown Support",
    ],
    bg: "bg-white",
  },
  {
    id: "manpower-supply",
    icon: Users,
    title: "Manpower Supply",
    tagline: "Qualified people. Verified expertise. Ready to deploy.",
    image: "/images/ManpowerSupply.webp",
    desc: "We supply qualified, skilled, and experienced manpower to meet the project and operational requirements of Saudi Arabia's industrial sector. From certified engineers to general labor, our personnel are vetted, trained, and ready.",
    points: [
      "Mechanical & Electrical Engineers",
      "Instrumentation Technicians",
      "Equipment Operators",
      "Welders & Fabricators",
      "Scaffold Erectors",
      "General Skilled Workers",
      "Safety Officers (HSE)",
      "Site Supervisors",
    ],
    bg: "bg-brand-light",
  },
  {
    id: "trading-material-supply",
    icon: ShoppingCart,
    title: "Trading and Material Supply",
    tagline: "Sourcing and delivering high-quality materials and products with reliability.",
    image: "/images/materials.png",
    desc: "We provide complete sourcing, trading, and procurement solutions alongside the supply of construction, electrical, piping, structural, and civil materials. Our strong supplier network ensures you get the right products on schedule.",
    points: [
      "Industrial Products & Equipment",
      "Structural Steel & Piping",
      "Safety Products & PPE",
      "Electrical Cables & Equipment",
      "Bolts, Nuts & Fasteners",
      "Valves & Instrumentation",
      "Delivery Logistics",
      "Quality Inspection",
    ],
    bg: "bg-white",
  },
  {
    id: "portacabin-container",
    icon: Warehouse,
    title: "Portacabin & Container Services",
    tagline: "High-quality modular site offices, storage units, and cabins built to last.",
    image: "images/portacabin.jpeg",
    desc: "We provide premium design, fabrication, rental, and installation services for portacabins, modular units, and shipping containers. Perfect for temporary offices, accommodation units, security posts, and site storage needs.",
    points: [
      "Modular Office Cabins",
      "Site Accommodation Units",
      "Shipping Container Offices",
      "Storage Containers",
      "Custom Fabrication & Layouts",
      "Transport & Site Installation",
      "Maintenance & Support",
      "Long & Short Term Rental",
    ],
    bg: "bg-brand-light",
  },

  {
    id: "heavy-lifting",
    icon: Forklift,
    title: "Heavy Lifting Services",
    tagline: "Precision lifting for the toughest industrial challenges.",
    image: "/images/cranes-fleet.jpeg",
    desc: "Specialized heavy lifting and rigging operations for industrial, oil & gas, and construction projects. Our certified crews operate modern crane fleets and rigging systems to execute critical lifts safely, on schedule, and within tolerance — from routine picks to complex tandem lifts.",
    points: [
      "Mobile & Crawler Cranes",
      "Tandem & Critical Lifts",
      "Rigging & Sling Engineering",
      "Lift Planning & Engineering",
      "Certified Crane Operators",
      "Third-Party Lift Supervision",
      "Shutdown & Turnaround Lifting",
      "Heavy Module Installation",
    ],
    bg: "bg-brand-light",
  },
  {
    id: "transportation-logistics",
    icon: TruckIcon,
    title: "Transportation & Logistics",
    tagline: "Moving industry forward — safely, efficiently, everywhere.",
    image: "/images/transportation.jpeg",
    desc: "End-to-end transportation and logistics solutions for heavy equipment, bulk materials, and oversized cargo across Saudi Arabia and the GCC region. Our managed fleet and logistics coordinators ensure your assets arrive on time, every time — with full compliance and tracking.",
    points: [
      "Heavy Haulage & Oversized Loads",
      "Flatbed & Lowbed Trailers",
      "Equipment Mobilization & Demobilization",
      "Bulk Material Transport",
      "Route Planning & Permits",
      "Real-Time Fleet Tracking",
      "Nationwide Coverage (KSA & GCC)",
      "Warehousing & Staging Areas",
    ],
    bg: "bg-white",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mountainksa.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.mountainksa.com/services" }
    ]
  };

  const serviceSchemas = services.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.desc,
    "provider": {
      "@type": "LocalBusiness",
      "name": "GMGCE"
    },
    "areaServed": "Saudi Arabia"
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {serviceSchemas.map((schema, idx) => (
        <JsonLd key={idx} data={schema} />
      ))}
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
          <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase block mb-4">What We Offer</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-none tracking-tight mb-4">
            Our Services
          </h1>
          <div className="slash-divider mb-6" />
          <p className="text-white text-lg max-w-2xl">
            Comprehensive industrial solutions covering equipment, people, materials, and operational support across Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Service Nav */}
      <div className="bg-brand-black border-b border-white/10 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-x-6 overflow-x-auto py-4 justify-center scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-white hover:text-brand-orange text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-brand-orange flex-shrink-0"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section key={service.id} id={service.id} className={`section-pad ${service.bg}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Text & Points */}
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                <div>
                  <div className="w-14 h-14 bg-brand-orange flex items-center justify-center mb-6"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)" }}>
                    <service.icon size={24} className="text-white" />
                  </div>
                  <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase block mb-2">
                    Service 0{i + 1}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-brand-black leading-tight tracking-tight mb-2">
                    {service.title}
                  </h2>
                  <p className="text-brand-orange font-semibold text-sm mb-4 italic">{service.tagline}</p>
                  <div className="slash-divider mb-6" />
                  <p className="text-brand-gray leading-relaxed mb-6">{service.desc}</p>
                  
                  {/* Points grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.points.map((point, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3 bg-white border border-gray-100 p-3 hover:border-brand-orange/30 transition-colors duration-200"
                      >
                        <div
                          className="w-5 h-5 bg-brand-orange flex items-center justify-center flex-shrink-0"
                          style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 100%, 4px 100%)" }}
                        >
                          <CheckCircle2 size={10} className="text-white" />
                        </div>
                        <span className="text-brand-black text-xs font-medium">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="btn-primary text-xs">
                    Enquire About This Service
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Service Image Column */}
              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} delay={100}>
                <div className="relative group">
                  <div
                    className="w-full h-80 sm:h-[400px] bg-cover bg-center shadow-xl border border-gray-200"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                    }}
                  />
                  {/* Orange corner accent */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-orange -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-brand-orange -z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Inquiry Form */}
      <section id="inquiry" className="section-pad bg-brand-black industrial-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Service Inquiry"
              title="Tell Us What You Need"
              subtitle="Fill in the form below and our team will get back to you with a tailored proposal within 24 hours."
              light
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ServiceInquiryForm />
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}


