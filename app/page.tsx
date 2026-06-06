import Link from 'next/link'

// Real AIDA-generated images from Stitch export
const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAsfkifliFaYTFu50wtZnZC1xVlj1SPg_y8PI1Ru97Yc87zgl5S59YRKCxSv3FoJjcO2DUgG4K4rBpt5NhtyWihg7GgDQbfx9tMCQBvrqvUyjyxktol2gXRoUFCB0QUbnOVif51AeHKIBqgsB3-zYubzpfgndAprVYY5EZH2WsCLcv0PV1i4-xCTjJM2q6NM98Y4Z-Zl0acwKiP6IwPti7DsHABK5Gqvqs0F7Tozm3Mw4lhPScmAvHdK6SBotnsxnP67WGxl_yHEGHD'

const featuredProducts = [
  {
    name: 'Vintage Floral Cake',
    desc: 'Vainilla con relleno de maracuyá',
    price: 'Desde $120',
    img: 'https://picsum.photos/seed/cake1/600/700',
  },
  {
    name: 'Fresas con Chocolate',
    desc: 'Fresas jumbo con chocolate belga premium',
    price: 'Desde $45',
    img: 'https://picsum.photos/seed/strawberry/600/700',
  },
  {
    name: 'Cakesicles Pastel',
    desc: 'Colección 6 piezas de brownie',
    price: 'Desde $35',
    img: 'https://picsum.photos/seed/cakesicle/600/700',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="max-w-container mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-6 lg:items-stretch">

          {/* Left: content — 5 cols */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 order-2 lg:order-1 relative z-10 justify-center">

            {/* "Pedidos abiertos" badge — above eyebrow */}
            <div className="inline-flex items-center gap-2 bg-lilac text-plum rounded-full px-4 py-1.5 font-sans text-xs font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse flex-shrink-0" />
              Pedidos abiertos ✦
            </div>

            <span className="inline-block px-4 py-2 bg-lilac text-plum rounded-full font-sans text-xs font-semibold uppercase tracking-wider">
              ✦ Repostería artesanal · Miami, FL
            </span>

            <h1 className="font-garamond text-4xl md:text-5xl lg:text-[48px] leading-[1.1] text-plum">
              Dulces hechos con{' '}
              <span className="italic text-primary-light">arte</span>,
              regalados con amor
            </h1>

            <p className="font-sans text-lg font-light text-muted leading-relaxed max-w-md">
              Creaciones personalizadas para tus momentos más especiales.
              Y talleres para quienes quieren aprender el oficio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-light text-white rounded-full font-sans text-base font-medium hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-bloom hover:-translate-y-0.5"
              >
                Hacer un pedido
              </Link>
              <Link
                href="/cursos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-outline-rose text-primary rounded-full font-sans text-base font-medium hover:bg-surface-yellow transition-all duration-300"
              >
                Ver la academia →
              </Link>
            </div>
          </div>

          {/* Right: image — 7 cols */}
          <div className="lg:col-span-7 order-1 lg:order-2 lg:translate-x-8">
            <div className="w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[520px] shadow-bloom-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMG}
                alt="Torta de boda artesanal — Sweets by Isis"
                className="w-full h-full object-cover rounded-[24px] opacity-90 hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── matches Stitch: border-l-2 cards on surface-container-low */}
      <section className="max-w-container mx-auto px-4 md:px-8 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            '5+ años de experiencia artesanal',
            '100% personalizado para ti',
            'Cada pedido es único — como tú.',
          ].map((text) => (
            <div
              key={text}
              className="flex items-center justify-center p-6 border-l-2 border-primary-light bg-surface-yellow rounded-r-lg"
            >
              <span className="font-sans text-base text-plum font-medium">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="bg-surface border-t border-border-rose py-20">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="chip mb-4 inline-block">Nuestras Creaciones</span>
            <h2 className="font-garamond text-4xl md:text-5xl text-plum">
              Elaborado con <em className="italic text-primary-light">pasión</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((p) => (
              <div
                key={p.name}
                className="card overflow-hidden group hover:shadow-bloom-md transition-shadow duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-garamond text-xl italic text-plum mb-1">{p.name}</h3>
                  <p className="font-sans text-sm text-muted mb-3">{p.desc}</p>
                  <p className="font-sans text-sm font-semibold text-primary">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/dulces" className="btn-outline">
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-surface-yellow border-y border-border-rose">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-garamond text-4xl md:text-5xl text-plum">
              ¿Cómo <em className="italic text-primary-light">funciona</em>?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Cuéntame tu idea', desc: 'Escríbeme por WhatsApp o llena el formulario con todos los detalles.' },
              { step: '02', title: 'Recibe tu cotización', desc: 'Te respondo con presupuesto personalizado en menos de 24 horas.' },
              { step: '03', title: 'Confirma con depósito', desc: 'Reserva tu fecha con un 50% de depósito para asegurar tu pedido.' },
              { step: '04', title: 'Recoge o recibe', desc: 'Pickup en Miami o entrega a domicilio en el área de South Florida.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-garamond text-lg text-primary">{item.step}</span>
                </div>
                <h3 className="font-garamond text-xl text-plum mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES CTA ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-card overflow-hidden aspect-video shadow-bloom">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/baking-class/800/500"
                alt="Academia de Repostería Sweets by Isis"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="chip mb-4 inline-block">Academia Sweets by Isis</span>
              <h2 className="font-garamond text-4xl md:text-5xl text-plum mb-4">
                Aprende el arte de la{' '}
                <em className="italic text-primary-light">repostería creativa</em>
              </h2>
              <p className="font-sans text-base text-muted font-light leading-relaxed mb-6">
                Talleres presenciales en Miami con técnicas profesionales. Cupos limitados.
              </p>
              <Link href="/cursos" className="btn-primary">
                Ver Cursos Disponibles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="py-20 bg-surface-yellow border-t border-border-rose">
        <div className="max-w-container mx-auto px-4 md:px-8 text-center">
          <span className="chip mb-4 inline-block">@sweets_by_isis</span>
          <h2 className="font-garamond text-4xl text-plum mb-10">
            Galería <em className="italic text-primary-light">artesanal</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square rounded-card-sm overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/gallery${i}/400/400`}
                  alt={`Galería ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://www.instagram.com/sweets_by_isis/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Ver en Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
