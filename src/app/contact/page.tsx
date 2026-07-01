import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description:
    "Contact Great Mountain General Contracting Establishment for equipment rental, manpower supply, and industrial services across Saudi Arabia.",
  alternates: {
    canonical: "/contact",
  },
};

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "+966 541242777",
    secondary: "+966 549164777",
    action: "tel:+966500000000",
    actionLabel: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "sales@mountainksa.com",
    secondary: "admin@mountainksa.com",
    action: "mailto:sales@mountainksa.com",
    actionLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "1st Floor, Al Jabal Street near Saudi Airlines",
    secondary: "Jubail City Center, Al Jubail 31951 Kingdom of Saudi Arabia",
    action: "https://maps.app.goo.gl/jsuBeWdMq56SrMTw8",
    actionLabel: "View Map",
  },
];

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mountainksa.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.mountainksa.com/contact" }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
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
          <span className="text-brand-orange text-xs font-bold tracking-[0.25em] uppercase block mb-4">Reach Out</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-none tracking-tight mb-4">
            Contact Us
          </h1>
          <div className="slash-divider mb-6" />
          <p className="text-white text-lg max-w-2xl">
            Ready to discuss your project requirements? Our team is standing by to provide you with a tailored industrial services solution.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="bg-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/10 p-5">
                <div className="w-12 h-12 bg-white/20 flex items-center justify-center flex-shrink-0">
                  <card.icon size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-xs font-bold uppercase tracking-wider mb-0.5">{card.title}</div>
                  <div className="text-white font-bold text-sm truncate">{card.primary}</div>
                  <div className="text-white text-xs">{card.secondary}</div>
                </div>
                <a
                  href={card.action}
                  target={card.action.startsWith("http") ? "_blank" : undefined}
                  rel={card.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-white border border-white/30 px-3 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-brand-orange transition-colors duration-200 whitespace-nowrap"
                >
                  {card.actionLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-pad bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — takes 3 cols */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div>
                <SectionHeader
                  eyebrow="Send a Message"
                  title="Start the Conversation"
                  align="left"
                />

                <div className="bg-white border border-gray-100 p-8">
                  <div className="grid md:grid-cols-2 gap-5">
                    {[
                      { label: "Full Name *", type: "text", placeholder: "Your full name" },
                      { label: "Company Name", type: "text", placeholder: "Your company" },
                      { label: "Email Address *", type: "email", placeholder: "your@email.com" },
                      { label: "Phone Number *", type: "tel", placeholder: "+966 5X XXX XXXX" },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="block text-brand-black text-xs font-bold uppercase tracking-wider mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full border border-gray-200 text-brand-black placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200"
                        />
                      </div>
                    ))}

                    <div className="md:col-span-2">
                      <label className="block text-brand-black text-xs font-bold uppercase tracking-wider mb-2">
                        Service Required
                      </label>
                      <select className="w-full border border-gray-200 text-brand-black px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200">
                        <option value="">Select a service</option>
                        <option>Equipment Rental</option>
                        <option>Manpower Supply</option>
                        <option>Trading and Material Supply</option>
                        <option>Portacabin & Container Services</option>
                        <option>Industrial Support Services</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-brand-black text-xs font-bold uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Describe your project requirements, timelines, and any specific needs..."
                        className="w-full border border-gray-200 text-brand-black placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200 resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="btn-primary">
                      Send Message
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Info — takes 2 cols */}
            <ScrollReveal direction="right" delay={150} className="lg:col-span-2">
              <div>
                <SectionHeader
                  eyebrow="Company Information"
                  title="Find Us"
                  align="left"
                />

                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      title: "Office Address",
                      lines: ["1st Floor, Al Jabal Street near Saudi Airlines, Jubail City Center, Al Jubail 31951 Kingdom of Saudi Arabia"],
                    },
                    {
                      icon: Phone,
                      title: "Phone Numbers",
                      lines: ["+966 541242777", "+966 549164777"],
                    },
                    {
                      icon: Mail,
                      title: "Email Addresses",
                      lines: ["sales@mountainksa.com", "admin@mountainksa.com"],
                    },
                    {
                      icon: Clock,
                      title: "Working Hours",
                      lines: ["Saturday – Thursday", "8:00 AM – 6:00 PM (AST)"],
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-100 p-5 flex gap-4">
                      <div className="w-10 h-10 bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-brand-black font-bold text-sm mb-1">{item.title}</div>
                        {item.lines.map((line, j) => (
                          <p key={j} className="text-brand-gray text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Response time note */}
                <div className="mt-6 bg-brand-orange/10 border border-brand-orange/20 p-5">
                  <div className="text-brand-orange font-bold text-sm mb-1">⚡ Fast Response</div>
                  <p className="text-brand-gray text-xs leading-relaxed">
                    We aim to respond to all inquiries within 24 business hours. For urgent project requirements, please call us directly.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="h-96 bg-brand-mid relative">
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462567.4406965068!2d49.49549780485744!3d26.32296059826854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e3602b3e8b9aed3%3A0x77ff7ee29e3c0de4!2sDammam%2C%20Eastern%20Province%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GMGCE Location — Eastern Province, Saudi Arabia"
          />
        </div>
      </section>
    </>
  );
}
