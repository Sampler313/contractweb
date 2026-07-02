import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import PrintPdfButton from "@/components/ui/PrintPdfButton";

export const metadata: Metadata = {
  title: "Connect with GMGCE",
  description: "Digital business card for Great Mountain General Contracting Establishment",
  alternates: {
    canonical: "/connect",
  },
};

const CONTACT_INFO = {
  name: "Mountain Rentals",
  company: "Great Mountain General Contracting Est.",
  title: "Industrial Services & Solutions",
  phones: [
    { raw: "+966541242777", display: "+966 541 242 777", label: "Sales & Inquiries" },
    { raw: "+966549164777", display: "+966 549 164 777", label: "Procurement" }
  ],
  emails: [
    { raw: "sales@mountainksa.com", label: "Sales Email" },
    { raw: "procurement@mountainksa.com", label: "Procurement Email" },
    { raw: "admin@mountainksa.com", label: "Admin Email" }
  ],
  address: "1st Floor, Al Jabal Street, Jubail City Center, Al Jubail 31951, KSA",
  website: "https://www.mountainksa.com",
  mapQuery: "Al+Jabal+Street+Jubail+City+Center+Al+Jubail+31951",
};

export default function ConnectPage() {
  return (
    <main className="bg-brand-black pt-32 pb-2 px-4 sm:px-8 print:bg-white print:p-0 print:min-h-0">
      {/* ─── Screen UI ─── */}
      <div className="w-full max-w-md mx-auto bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden print:hidden">
        {/* Abstract Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 relative z-10">
          <h1 className="text-2xl font-black text-white mb-2">{CONTACT_INFO.name}</h1>
          <h2 className="text-brand-orange font-bold text-sm tracking-wider uppercase mb-1">
            {CONTACT_INFO.company}
          </h2>
          <p className="text-white text-sm">
            {CONTACT_INFO.title}
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col gap-3 relative z-10">
          {CONTACT_INFO.phones.map((phone, idx) => (
            <a
              key={`phone-${idx}`}
              href={`tel:${phone.raw}`}
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-4 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                <Phone className="w-5 h-5 text-brand-orange" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-0.5">{phone.label}</span>
                <span className="text-white font-medium text-sm truncate">{phone.display}</span>
              </div>
            </a>
          ))}

          {CONTACT_INFO.emails.map((email, idx) => (
            <a
              key={`email-${idx}`}
              href={`mailto:${email.raw}`}
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-4 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                <Mail className="w-5 h-5 text-brand-orange" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-0.5">{email.label}</span>
                <span className="text-white font-medium text-sm truncate">{email.raw}</span>
              </div>
            </a>
          ))}

          <a
            href="https://maps.app.goo.gl/jsuBeWdMq56SrMTw8?g_st=awb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-4 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
              <MapPin className="w-5 h-5 text-brand-orange" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-0.5">Directions</span>
              <span className="text-white font-medium text-sm truncate">Al Jubail 31951, KSA</span>
            </div>
          </a>

          <Link
            href="/"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-4 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
              <Globe className="w-5 h-5 text-brand-orange" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-0.5">Website</span>
              <span className="text-white font-medium text-sm truncate">mountainksa.com</span>
            </div>
          </Link>
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center relative z-10">
          <p className="text-white text-xs leading-relaxed mb-6">
            {CONTACT_INFO.address}
          </p>
          <PrintPdfButton />
        </div>
      </div>

      {/* ─── Print UI (PDF) ─── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { margin: 0; }
          body { padding: 0; }
        }
      `}} />
      <div className="hidden print:block text-black bg-white font-sans max-w-2xl mx-auto py-[2cm] px-[2cm]">
        <div className="border-b-2 border-black pb-6 mb-6">
          <h1 className="text-4xl font-black mb-2">{CONTACT_INFO.name}</h1>
          <h2 className="text-xl font-bold uppercase text-gray-800">{CONTACT_INFO.company}</h2>
          <p className="text-lg text-gray-600 mt-2">{CONTACT_INFO.title}</p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2 mb-3">Phone Numbers</h3>
            {CONTACT_INFO.phones.map((phone, i) => (
              <div key={i} className="mb-2">
                <span className="font-semibold block">{phone.label}:</span> 
                <span className="text-lg">{phone.display}</span>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2 mb-3">Email Addresses</h3>
            {CONTACT_INFO.emails.map((email, i) => (
              <div key={i} className="mb-2">
                <span className="font-semibold block">{email.label}:</span> 
                <span className="text-lg">{email.raw}</span>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2 mb-3">Office Address</h3>
            <p className="text-lg leading-relaxed">{CONTACT_INFO.address}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2 mb-3">Website</h3>
            <p className="text-lg">{CONTACT_INFO.website.replace('https://www.', '')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
