import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

/* ─── Font ──────────────────────────────────────────────────────────────────
   Self-hosted via next/font — eliminates the render-blocking Google Fonts
   network request. Visual output is identical to the previous @import.
   ─────────────────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://www.mountainksa.com";

/* ─── Viewport ───────────────────────────────────────────────────────────── */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

/* ─── Root Metadata ──────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Great Mountain General Contracting Establishment | Industrial Services Saudi Arabia",
    template: "%s | GMGCE",
  },
  description:
    "Great Mountain General Contracting Establishment (GMGCE) provides reliable industrial solutions across Saudi Arabia — Equipment Rental, Manpower Supply, Trading, and Material Supply for Oil & Gas, Petrochemical, and Construction sectors.",
  keywords: [
    "industrial services Saudi Arabia",
    "equipment rental KSA",
    "manpower supply Saudi Arabia",
    "general contracting",
    "Mountain Rentals",
    "Mountain Rentals KSA",
    "oil gas support",
    "industrial contractor",
    "Great Mountain",
    "Construction Equipment",
    "Cranes Jubail",
    "heavy lifting Saudi Arabia",
    "crane rental KSA",
    "Al Jubail industrial services",
  ],
  openGraph: {
    title: "Great Mountain General Contracting Establishment",
    description:
      "Enabling Industries, Empowering Businesses, Driving Progress — Industrial solutions you can trust across Saudi Arabia.",
    type: "website",
    locale: "en_SA",
    url: BASE_URL,
    siteName: "GMGCE — Mountain Rentals",
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

/* ─── Site-wide Structured Data ─────────────────────────────────────────── */
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${BASE_URL}/#organization`,
      name: "Great Mountain General Contracting Establishment",
      alternateName: [
        "GMGCE",
        "Mountain Rentals",
        "Mountain Rentals KSA",
        "Great Mountain",
      ],
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
        width: 465,
        height: 480,
      },
      description:
        "Great Mountain General Contracting Establishment (GMGCE) provides reliable industrial solutions across Saudi Arabia — Equipment Rental, Manpower Supply, Trading and Material Supply, Heavy Lifting, Transportation, and Portacabin Services for Oil & Gas, Petrochemical, and Construction sectors.",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "1st Floor, Al Jabal Street near Saudi Airlines, Jubail City Center",
        addressLocality: "Al Jubail",
        postalCode: "31951",
        addressCountry: "SA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.32296,
        longitude: 49.49549,
      },
      telephone: ["+966541242777", "+966549164777"],
      email: "sales@mountainksa.com",
      areaServed: [
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "AdministrativeArea", name: "GCC Region" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "GMGCE — Mountain Rentals",
      url: BASE_URL,
      description:
        "Industrial services company in Saudi Arabia — Equipment Rental, Manpower Supply, Trading, Heavy Lifting, Transportation and Portacabin Services.",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      inLanguage: "en-SA",
    },
  ],
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <JsonLd data={siteSchema} />
        <div className="print:hidden">
          <Navbar />
        </div>
        <main>{children}</main>
        <div className="print:hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}
