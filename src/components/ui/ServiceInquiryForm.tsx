"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function ServiceInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields (Full name, email, phone, message/requirements)
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Format message for WhatsApp
    const whatsappText = `*New Service Inquiry*
👤 *Name*: ${formData.name}
🏢 *Company*: ${formData.company || "N/A"}
📧 *Email*: ${formData.email}
📞 *Phone*: ${formData.phone}
🛠️ *Service Required*: ${formData.service || "Multiple/Not Specified"}
📝 *Message*: ${formData.message}`;

    // WhatsApp Link
    const baseUrl = "https://wa.me/message/7VLYRTTLKB37L1";
    const whatsappUrl = `${baseUrl}?text=${encodeURIComponent(whatsappText)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 lg:p-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company"
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+966 5X XXX XXXX"
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">
            Service Required
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200"
          >
            <option value="" className="bg-brand-black">Select a service</option>
            <option value="Equipment Rental" className="bg-brand-black">Equipment Rental</option>
            <option value="Manpower Supply" className="bg-brand-black">Manpower Supply</option>
            <option value="Trading and Material Supply" className="bg-brand-black">Trading and Material Supply</option>
            <option value="Portacabin & Container Services" className="bg-brand-black">Portacabin & Container Services</option>
            <option value="Heavy Lifting Services" className="bg-brand-black">Heavy Lifting Services</option>
            <option value="Transportation & Logistics" className="bg-brand-black">Transportation & Logistics</option>
            <option value="Multiple Services" className="bg-brand-black">Multiple Services</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">
            Message / Requirements *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your project requirements..."
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200 resize-none"
          />
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
          Submit Inquiry
          <ChevronRight size={16} />
        </button>
      </div>
    </form>
  );
}
