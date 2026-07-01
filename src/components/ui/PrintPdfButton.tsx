"use client";

import { Download } from "lucide-react";

export default function PrintPdfButton() {
  return (
    <button
      onClick={() => window.print()}
      className="w-full flex items-center justify-center gap-2 bg-transparent border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm"
    >
      <Download className="w-4 h-4" />
      Save as PDF
    </button>
  );
}
