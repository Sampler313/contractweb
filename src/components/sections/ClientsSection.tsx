import Image from "next/image";

const clients = [
  { name: "Nesma United Industries", logo: "/images/clients/nesma-united.png" },
  { name: "Nesma & Partners",        logo: "/images/clients/nesma-partners.png" },
  { name: "Rawabi",                  logo: "/images/clients/rawabi.png" },
  { name: "SABIC",                   logo: "/images/clients/sabic.png" },
  { name: "Satorp",                  logo: "/images/clients/satorp.png" },
  { name: "alfanar",                 logo: "/images/clients/alfanar.png" },
  { name: "landt",                   logo: "/images/clients/landt.png" },
  { name: "samsung",                 logo: "/images/clients/samsung.png" },
  { name: "sinopec",                 logo: "/images/clients/sinopec.png" },
  { name: "tamimi",                  logo: "/images/clients/tamimi.png" },
  { name: "Hyundai",                 logo: "/images/clients/Hyundai.png" },
  { name: "reda",                    logo: "/images/clients/reda.jpg" },
  { name: "tcc",                     logo: "/images/clients/tcc.png" }, 
  
];

export default function ClientsSection() {
  const tickerLeft = [...clients, ...clients];
  const tickerRight = [...clients].reverse();
  const tickerRightRepeated = [...tickerRight, ...tickerRight];

  return (
    <section className="bg-brand-black border-y border-white/5 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        {/* Label */}
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange mb-3">
          Trusted By
        </p>
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          Our Valued <span className="text-brand-orange">Clients</span>
        </h2>
        <p className="mt-3 text-white text-sm max-w-md mx-auto">
          Proud to serve industry leaders across Saudi Arabia
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1: Moving Right */}
        <div className="clients-marquee-wrapper">
          <div className="clients-marquee-reverse">
            {tickerRightRepeated.map((client, i) => (
              <div
                key={`${client.name}-right-${i}`}
                className="clients-marquee-item group"
                title={client.name}
              >
                {/* Logo card — always white so logos are clear */}
                <div className="flex items-center justify-center h-20 px-8 bg-white rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-brand-orange group-hover:shadow-lg group-hover:shadow-orange-500/20 group-hover:-translate-y-1">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={56}
                    className="object-contain max-h-12 w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moving Left */}
        <div className="clients-marquee-wrapper">
          <div className="clients-marquee">
            {tickerLeft.map((client, i) => (
              <div
                key={`${client.name}-left-${i}`}
                className="clients-marquee-item group"
                title={client.name}
              >
                {/* Logo card — always white so logos are clear */}
                <div className="flex items-center justify-center h-20 px-8 bg-white rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-brand-orange group-hover:shadow-lg group-hover:shadow-orange-500/20 group-hover:-translate-y-1">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={56}
                    className="object-contain max-h-12 w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
