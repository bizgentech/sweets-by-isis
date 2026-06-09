export const metadata = {
  title: 'Sobre Mí — Conoce a Isis | Sweets by Isis',
  description: 'Conoce a Isis, la artista detrás de Sweets by Isis. Repostería artesanal hecha con amor en Miami.',
}

const IMGS = {
  portrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCz4pZIMWCNbsnPYvG_xw-HSKzKopLbCuLiH-SbEh8MRuIik51Okc7egIEO7ck82gyiyDKGDdxPFpOUV8Q1jl0TxHlp4kk-UFJZs6M1UQIAF3fGYY2z9uqMxZHEI589m3TjFyNFAS1tKk0TDjcX9NQB-re5nlIiKXAEcv1J6gzRNRuHRsDq0YBeCfBB7nbNg9_ETmQEcmdILlyWN9xLDpC_2ouRNtnTypeGydBgcKSV4CzSAEwBCtfPMxO8S4trmhUieF93RkJ8c2tr',
  signature:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDe-0dWZFYYsNfmxdhs03z_DcG2YaNy-A1QBQIe4FbXvmXbC9uPRS3-DXSb_yqNMgwC7TP8gqp3MEDJgb7odP_TkGW1dpw9wgycGb1RZyFTT_n0B_4lhagGGRLdSZvXurO02Ztfc7Zsd29mvL1NU05MCHhjprX03P2ArlGxg1Yr3pZ6DUKVr3I8_SY0hSOdF6Ab3Cj01_2VtNz0gYQPQnZQiQDsWHRZZPNpjjzpz5E3eW-LAH_xKHFI9Z69YXQ3dLqBdlBKCWP0_x3Q',
  weddingCake:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCZA36LqGTALgyuXSdYcfTup6_CAQ30T0TyaHqwYb4dMUUEIwUXt01nqV9FiOPWyJjj5IvODia-eIpzqZPuOYzDx8yQa_o5YmYMR3JC5Dg6tW_n_B2TLxlFLKrodPmKQVvIKlX1cfl9kgp4_baQ9FqtFC4EOIajUxy2wAz9Pr8i5XD92zinGU41dqcE0cMlmsSEjs1CEPMYHHvNk_1S5ifw9NoHAnReVf_cFI4o5A942iPVeoM2pJtHvVW8pvZ-oj-iuk9kAQrFomlP',
  cupcakes:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCNDsxvk_r-q4_c0jiMoDrgLnSzOJ0GoN6u6H1G2AW5ec8HHFIB_QFrLCw0urR7zZNiPMVVZhfWWJ5bon_oAIFEPDbjmaueN9QtqBMzIkfiO5vmFpuvZNJrjL_LYZnkjAaRDg4vYN5k6R5qlTCNLWHfcHI8ZarDYjDdL3mw2mgbTMWBzjufaoeSjQwabFhY0MLOuxRwJL0XxPGuDmALQWJX2vyh5M6Pk9bkVAvNT92JoTrRdlAAOwLItIa9zCy5E7dqxu4RPZYZI_Dy',
  macarons:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBVLnW9d9j2KYWknfozJKsGXN04qeNpTG7u31mCDqd2md80-fZm_WuNwCDZIzEC_ofRvmN2lt4XUDiXuew-9WX1tZFHNcw844rOh6eXnR-kEZjf8Nxxe_J3wNFpDA1Osc_y_H363SOstAzqdHbRGGVY2a2HogiOsqfKeSShpM-jkHjQXu9l8H_Wt497bpF-2z-OyGkfB8DDG3OwVr0gRKL_NNdEJhb1kBcGeSxC8xc3faV1KIaVVPVV-F6AVfmjlbOm4n2yq5mTByw-',
  pastryClass:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCJbRaH-dSoBprSeuCCiGvfAtkBbtFZxEKtSkipscIucL08u5DMdo_-avpyCTUzfaF2Se0YRafbBT64y1RudsgYbf2FgU705OYEv1GqSJpg4oJzs76l576oos3kLI6sVf7FipjbpZHXTZCQyOUI3HEzQesGEEmFeQZrgI2YtpeiGEy-I9Za4NwSbO6VTNT5UxnZQDGnejbxZLDqBMpCNDh5Wer56XL-dUuQxiKod3hkHQJvlGYg2gE1B4U9DvxelJFx2kqtNrje1kDb',
}

const values = [
  {
    icon: '❤️',
    title: 'Hecho con amor',
    desc: 'Cada receta está elaborada cuidadosamente para evocar emociones y crear recuerdos inolvidables.',
  },
  {
    icon: '✏️',
    title: '100% personalizado',
    desc: 'Tu visión es mi inspiración. Trabajamos juntos para diseñar postres que cuenten tu historia única.',
  },
  {
    icon: '🎓',
    title: 'Enseñamos con pasión',
    desc: 'Compartimos nuestros secretos y técnicas a través de cursos para que descubras el artista que llevas dentro.',
  },
]

const portfolioItems = [
  { img: IMGS.weddingCake, alt: 'Wedding Cake', label: 'Bodas Elegantes' },
  { img: IMGS.cupcakes, alt: 'Cupcakes', label: 'Cumpleaños Mágicos' },
  { img: IMGS.macarons, alt: 'Macarons', label: 'Eventos Corporativos' },
  { img: IMGS.pastryClass, alt: 'Pastry Class', label: 'Cursos Prácticos' },
]

const filterChips = ['Bodas', 'Cumpleaños', 'Corporativo', 'Cursos']

export default function SobreMiPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="max-w-container mx-auto px-6 md:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: portrait */}
          <div className="relative w-full h-[600px] rounded-[20px] overflow-hidden shadow-bloom">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMGS.portrait}
              alt="Isis en su cocina"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 bg-tertiary-fixed text-plum px-4 py-1 rounded-full font-sans text-xs font-semibold tracking-widest shadow-sm">
              Pedidos abiertos ✦
            </div>
          </div>

          {/* Right: bio */}
          <div className="space-y-6">
            <span className="font-sans text-xs font-semibold text-primary tracking-widest uppercase block">
              La artista detrás de cada dulce
            </span>
            <h1 className="font-garamond text-5xl md:text-[48px] leading-[1.1] text-plum">
              Hola, soy Isis ✦
            </h1>
            <p className="font-sans text-lg font-light text-muted leading-relaxed">
              Con más de 10 años de experiencia, mi pasión es transformar ingredientes simples en
              obras de arte comestibles. En Sweets by Isis, creemos que cada celebración merece un
              toque de magia y dulzura, creado con precisión y amor desde el corazón de Miami.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Mi viaje comenzó en la cocina de mi abuela y se ha convertido en una búsqueda
              constante de la perfección en la pastelería moderna. Cada diseño refleja una
              dedicación profunda al arte y al sabor.
            </p>
            {/* Experience badge */}
            <div className="flex items-center gap-4 py-5 px-6 bg-gradient-to-r from-primary-fixed to-tertiary-fixed rounded-2xl border border-outline-rose/40 shadow-bloom">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-bloom flex flex-col items-center justify-center">
                <span className="font-garamond text-2xl font-bold leading-none text-primary">10+</span>
              </div>
              <div>
                <p className="font-garamond text-xl italic text-plum leading-tight">
                  Over 10 years of experience
                </p>
                <p className="font-sans text-xs text-muted tracking-wide mt-0.5">
                  en repostería artesanal · Miami, FL
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-outline-rose/30">
              <span className="font-garamond text-4xl italic text-primary opacity-80 select-none">
                Isis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-surface-container-low py-20 mb-20">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-surface p-8 rounded-[20px] shadow-bloom border border-outline-rose/30 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mb-6 text-3xl">
                  {v.icon}
                </div>
                <h3 className="font-garamond text-2xl text-plum mb-4">{v.title}</h3>
                <p className="font-sans text-base text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO MASONRY ── */}
      <section className="max-w-container mx-auto px-6 md:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="font-garamond text-5xl md:text-[48px] leading-[1.1] text-plum mb-6">
            Nuestro Arte
          </h2>
          <div className="flex justify-center gap-3 flex-wrap">
            {filterChips.map((chip) => (
              <span
                key={chip}
                className="px-4 py-2 bg-tertiary-fixed text-plum rounded-full font-sans text-xs font-semibold tracking-widest cursor-pointer hover:bg-[#cdc2d9] transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="masonry-grid">
          {portfolioItems.map((item) => (
            <div
              key={item.label}
              className="masonry-item relative group rounded-[20px] overflow-hidden shadow-bloom"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-surface/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-garamond text-2xl text-plum bg-surface/90 px-6 py-2 rounded-full shadow-sm">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRESS ── */}
      <section className="max-w-container mx-auto px-6 md:px-8 text-center mb-12 border-t border-outline-rose/30 pt-12">
        <span className="font-sans text-xs font-semibold text-primary tracking-widest uppercase mb-8 block">
          Como aparecimos en…
        </span>
        <div className="flex justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-wrap">
          <span className="font-garamond text-4xl italic">Revista MIAMI</span>
          <span className="font-garamond text-4xl italic">Pastry Arts</span>
          <span className="font-garamond text-4xl italic">Wedding Vibes</span>
        </div>
      </section>
    </>
  )
}
