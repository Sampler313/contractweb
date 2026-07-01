import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const services = [
  { label: "Equipment Rental", href: "/services#equipment-rental" },
  { label: "Manpower Supply", href: "/services#manpower-supply" },
  { label: "Trading & Material Supply", href: "/services#trading-material-supply" },
  { label: "Portacabin & Container", href: "/services#portacabin-container" },
  { label: "Heavy Lifting", href: "/services#heavy-lifting" },
  { label: "Transportation & Logistics", href: "/services#transportation-logistics" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Quote", href: "/contact#quote" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="GMGCE Logo"
                width={465}
                height={480}
                className="h-48 w-auto object-contain"
              />
            </Link>
            <p className="text-white text-sm leading-relaxed mb-6">
              Great Mountain General Contracting Establishment — delivering reliable industrial solutions across Saudi Arabia.
            </p>
            <p className="text-brand-orange text-xs font-semibold tracking-widest uppercase italic">
              "Enabling Industries, Empowering Businesses, Driving Progress."
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white hover:border-brand-orange hover:text-brand-orange transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-brand-orange inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white text-sm hover:text-brand-orange transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-orange transition-all duration-200 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-brand-orange inline-block" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white text-sm hover:text-brand-orange transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-orange transition-all duration-200 inline-block" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-brand-orange inline-block" />
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white text-sm">
                <MapPin size={16} className="text-brand-orange mt-0.5 flex-shrink-0" />
                <span>1st Floor, Al Jabal Street near Saudi Airlines, Jubail City Center, Al Jubail 31951, Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <Phone size={16} className="text-brand-orange flex-shrink-0" />
                <a href="tel:+966500000000" className="hover:text-brand-orange transition-colors">
                  +966 541242777
                </a>
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <Mail size={16} className="text-brand-orange flex-shrink-0" />
                <a href="mailto:info@gmgce.com" className="hover:text-brand-orange transition-colors">
                  sales@mountainksa.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white text-sm">
                <Clock size={16} className="text-brand-orange mt-0.5 flex-shrink-0" />
                <span>Sat – Thu: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white text-xs">
            © {new Date().getFullYear()} Great Mountain General Contracting Establishment. All Rights Reserved.
          </p>
          <p className="text-white text-xs">
            CR No. · VAT No. · Kingdom of Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  );
}
