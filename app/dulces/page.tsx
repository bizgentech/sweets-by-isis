import Link from 'next/link'

export const metadata = {
  title: 'Dulces — Catálogo | Sweets by Isis',
  description: 'Creaciones artesanales diseñadas a la medida. Pasteles, fresas, cakesicles y más en Miami.',
}

const IMGS = {
  vintageFloral:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDh_DTDa7zDaNkRDowvDWvvoB2pduFMypHq1ZPJqjrAA1j-PEuvFK4mmpVvs7s2tqCnZxVmTthjtc1bw-bfPvWXEHArSu_ZZ4fsDy_RKw_k6wAO1QvsHNAIlPNdlnIiJlc-ph1Hxat0Uh0Xpb7TgmFcp3DjhPGrANRdtLBGgDbWdo6wP5T9atWU6P7YVkgkaHZroNROTZjWCff4i0pXFecRrTNo54a7CcV1XTUo8KwJvvtuGycpnkUWaYivxQAklBK6thA0jor-OfVT',
  cajaSignature:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCLKL0chm-ASRCDE2zRV5Tb-Ksb6paiueaGsnwQ8q9IMMdqMW5tvgxNqb98jjqKgBUALFFHDWDD9FnWqmH7R1kJwrMjae4WZnOwMVfAh2mPnLYhFOg_qhOtPTEzhwwG7xtzb4ugpubSfy8ffWp6ojgYAdXJ2hRgop_x4NRWwAJiFBgc-Suli7l8ekdc8BY-TehpEposQ35ytW9D7o8SS3jOxEB3hf7OsWYvlsbxRuVl1R5FJ5-MRCuEotffu6iPuR5VBgq4Zgum7OOw',
  coleccionPastel:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBIA55cJ5saH2S9Nbj4mlLmfPNTvC1BRXcQYArVSLTNKf5OeaeGomd1eOUg13SR77IFiAUmkv3EIGdantUDVNlIIyrxqUPH7hx8RLlq5An_X9NpxbZ33lux4lyAK9vslEOdyo6djyGHk0KHNFpYDqFdcHE9hh4ppweqo259qvIRkyc8EI4I6WWr3vTwsrRH1k6-Z0gP6alofg_HGn0eR7XTa1FVfIoF_4IDC8n2qt8KlBI0EZdXoi_p9lpWiue1mOiLVOSFltLTiItc',
  weddingCake:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDf1F5QmIXCKN1nH-1gdWhhC9EVC_KPql07NfJxJb68rjnqOsxhlz3KnGv5TAzalISTj23oq4rbkmoTYLXWJaUFQFhCCMMfKmbH9dkYAUmbLcu6z07rBYM34vh4OowTAjzir57mmxYDMhKoK2ea6ty-bviwBmFVPl_W7Z3Cy4HsL8yWjN3hGRLmJqjbyH1OQ9jt0PHgcfId5CkDMDoKCPA7Ta42cyq-PK8IBXnFjGCJO4_0MtMdynR8DyaJI6boN3XohsMaQGqHXx0l',
}

const filters = ['Todos', 'Cakes', 'Fresas Decoradas', 'Cakesicles', 'Galletas', 'Cajas de Regalo']

const products = [
  {
    img: IMGS.vintageFloral,
    imgH: 'h-80',
    category: 'CAKES',
    name: 'Vintage Floral',
    desc: 'Bizcocho de vainilla con relleno de maracuyá y diseño botánico.',
    price: 'Desde $120',
  },
  {
    img: IMGS.cajaSignature,
    imgH: 'h-[400px]',
    category: 'FRESAS DECORADAS',
    name: 'Caja Signature',
    desc: 'Fresas jumbo con chocolate belga y detalles en pan de oro.',
    price: 'Desde $45',
  },
  {
    img: IMGS.coleccionPastel,
    imgH: 'h-64',
    category: 'CAKESICLES',
    name: 'Colección Pastel',
    desc: 'Set de 6 cakesicles de brownie con cobertura de chocolate blanco.',
    price: 'Desde $35',
  },
]

const processSteps = [
  { icon: '💬', title: '1. Cuéntanos', desc: 'Comparte tu idea, fecha y número de invitados.' },
  { icon: '🧾', title: '2. Cotización 24h', desc: 'Recibirás opciones de diseño y presupuesto.' },
  { icon: '✅', title: '3. Confirmamos', desc: 'Aseguramos tu fecha con un depósito del 50%.' },
  { icon: '🎁', title: '4. Disfruta', desc: 'Recoge tu pedido o recibe delivery en Miami.' },
]

export default function DulcesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="max-w-container mx-auto px-6 md:px-8 text-center mb-16 relative">
        <div className="inline-block relative mb-6">
          <h1 className="font-garamond text-5xl md:text-[64px] leading-none text-primary mb-4">
            Dulces que enamoran
          </h1>
          <span className="absolute -top-6 -right-12 bg-tertiary-fixed text-on-tertiary-container font-sans text-xs font-semibold px-4 py-2 rounded-full rotate-3 shadow-sm border border-[#cdc2d9]">
            Pedidos abiertos ✦
          </span>
        </div>
        <p className="font-sans text-lg font-light text-muted max-w-2xl mx-auto leading-relaxed">
          Creaciones artesanales diseñadas a la medida de tus momentos más especiales.
          Desde elaborados pasteles de boda hasta delicadas cajas de regalo, cada dulce
          es una obra de arte en Miami.
        </p>
      </section>

      {/* ── FILTER CHIPS ── */}
      <section className="max-w-container mx-auto px-6 md:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`px-5 py-2 rounded-full font-sans text-sm transition-transform hover:scale-105 ${
                i === 0
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container-high text-muted border border-outline-rose/50 hover:border-primary-light'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ── MASONRY PRODUCT GRID ── */}
      <section className="max-w-container mx-auto px-6 md:px-8 mb-20">
        <div className="masonry-grid">
          {products.map((p) => (
            <div
              key={p.name}
              className="masonry-item bg-surface-container-low rounded-[20px] overflow-hidden shadow-bloom border border-outline-rose/30 flex flex-col group cursor-pointer hover:shadow-bloom-md transition-shadow duration-300"
            >
              <div className={`w-full ${p.imgH} relative overflow-hidden`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-tertiary-fixed/90 backdrop-blur-sm text-on-tertiary-container font-sans text-[10px] font-semibold px-3 py-1.5 rounded-full tracking-wider">
                  {p.category}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-garamond text-2xl italic text-plum mb-2">{p.name}</h3>
                  <p className="font-sans text-sm text-muted mb-4 leading-relaxed">{p.desc}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-sans text-base text-primary font-medium">{p.price}</span>
                  <Link
                    href="/contacto"
                    className="border border-primary text-primary px-4 py-1.5 rounded-full text-sm hover:bg-primary-light hover:text-white hover:border-primary-light transition-colors"
                  >
                    Cotizar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WEDDING & EVENTS SPOTLIGHT ── */}
      <section className="max-w-container mx-auto px-6 md:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-7 relative">
            <div className="absolute -inset-4 bg-primary-fixed rounded-[30px] -z-10 opacity-30 -rotate-1" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMGS.weddingCake}
              alt="Wedding Cake Especial"
              className="w-full h-auto rounded-[24px] shadow-[0px_20px_40px_rgba(138,96,112,0.15)] object-cover"
            />
          </div>
          <div className="md:col-span-5 flex flex-col justify-center">
            <span className="font-sans text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">
              BODAS Y EVENTOS
            </span>
            <h2 className="font-garamond text-3xl md:text-4xl text-plum mb-6 leading-tight">
              El centro de atención de tu celebración
            </h2>
            <p className="font-sans text-lg font-light text-muted mb-8 leading-relaxed">
              Diseñamos pasteles esculturales que no solo son visualmente impresionantes,
              sino que ofrecen una experiencia de sabor inolvidable para ti y tus invitados.
            </p>
            <div className="bg-surface-container-high rounded-[16px] p-6 mb-8 border border-outline-rose/30">
              <h4 className="font-sans font-medium text-plum mb-4">Guía de Tamaños Base</h4>
              <ul className="space-y-3 font-sans text-sm text-muted">
                {[
                  { label: 'Small (10-15 porciones)', price: 'Desde $85' },
                  { label: 'Medium (20-25 porciones)', price: 'Desde $145' },
                  { label: 'Large (30-40 porciones)', price: 'Desde $225' },
                ].map((row, i, arr) => (
                  <li
                    key={row.label}
                    className={`flex justify-between ${i < arr.length - 1 ? 'border-b border-outline-rose/20 pb-2' : ''}`}
                  >
                    <span>{row.label}</span>
                    <span className="font-medium text-plum">{row.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contacto"
              className="inline-flex justify-center bg-primary-light text-white font-sans font-medium px-8 py-4 rounded-full hover:bg-primary transition-colors duration-300 shadow-sm w-fit"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-surface-container-low border-y border-border-rose py-20">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-garamond text-4xl text-plum mb-4">¿Cómo funciona?</h2>
            <p className="font-sans text-base text-muted max-w-xl mx-auto">
              Un proceso sencillo y personalizado para asegurar que tu pedido sea perfecto.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {processSteps.map((s) => (
              <div key={s.title} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-6 shadow-sm text-2xl">
                  {s.icon}
                </div>
                <h4 className="font-garamond text-xl text-plum mb-2">{s.title}</h4>
                <p className="font-sans text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK CTA ── */}
      <section className="max-w-container mx-auto px-6 md:px-8 py-20">
        <div className="bg-plum text-surface rounded-[24px] p-12 md:p-16 text-center shadow-[0px_20px_40px_rgba(34,25,27,0.1)] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=\")",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-garamond text-4xl md:text-5xl mb-6 text-surface">
              ¿Lista para hacer tu pedido?
            </h2>
            <p className="font-sans text-lg font-light text-surface/80 mb-10 max-w-2xl mx-auto">
              Mi agenda se llena rápido. Te recomiendo contactarme con al menos 2 semanas
              de anticipación para pasteles personalizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/13059999999?text=Hola%2C%20me%20interesa%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-light text-white font-sans font-medium px-8 py-4 rounded-full flex items-center gap-2 hover:bg-primary transition-colors w-full sm:w-auto justify-center"
              >
                WhatsApp Directo
              </a>
              <Link
                href="/contacto"
                className="border border-surface/40 text-surface font-sans px-8 py-4 rounded-full hover:bg-surface/10 transition-colors w-full sm:w-auto text-center"
              >
                Formulario de Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
