"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function ContactForm() {
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

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields (*)");
      return;
    }

    // Format message for WhatsApp
    const whatsappText = `*New Web Inquiry*
👤 *Name*: ${formData.name}
🏢 *Company*: ${formData.company || "N/A"}
📧 *Email*: ${formData.email}
📞 *Phone*: ${formData.phone}
🛠️ *Service Required*: ${formData.service || "General Inquiry"}
📝 *Message*: ${formData.message}`;

    // WhatsApp Short link URL
    const baseUrl = "https://wa.me/message/7VLYRTTLKB37L1";
    
    // Construct final URL with pre-filled text
    const whatsappUrl = `${baseUrl}?text=${encodeURIComponent(whatsappText)}`;

    // Open in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-8">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-brand-black text-xs font-bold uppercase tracking-wider mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full border border-gray-200 text-brand-black placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-brand-black text-xs font-bold uppercase tracking-wider mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company"
            className="w-full border border-gray-200 text-brand-black placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-brand-black text-xs font-bold uppercase tracking-wider mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border border-gray-200 text-brand-black placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-brand-black text-xs font-bold uppercase tracking-wider mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+966 5X XXX XXXX"
            className="w-full border border-gray-200 text-brand-black placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-brand-black text-xs font-bold uppercase tracking-wider mb-2">
            Service Required
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-gray-200 text-brand-black px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200"
          >
            <option value="">Select a service</option>
            <option value="Equipment Rental">Equipment Rental</option>
            <option value="Manpower Supply">Manpower Supply</option>
            <option value="Trading and Material Supply">Trading and Material Supply</option>
            <option value="Portacabin & Container Services">Portacabin & Container Services</option>
            <option value="Industrial Support Services">Industrial Support Services</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-brand-black text-xs font-bold uppercase tracking-wider mb-2">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your project requirements, timelines, and any specific needs..."
            className="w-full border border-gray-200 text-brand-black placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-200 resize-none"
          />
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="btn-primary">
          Send Message
          <ChevronRight size={16} />
        </button>
      </div>
    </form>
  );
}
