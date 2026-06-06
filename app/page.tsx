import Link from 'next/link'

const featuredProducts = [
  { name: 'Vintage Floral Cake', desc: 'Vainilla con relleno de maracuyá', price: 'Desde $120', img: 'https://picsum.photos/seed/cake1/600/700' },
  { name: 'Fresas con Chocolate', desc: 'Fresas jumbo con chocolate belga premium', price: 'Desde $45', img: 'https://picsum.photos/seed/strawberry/600/700' },
  { name: 'Cakesicles Pastel', desc: 'Colección 6 piezas de brownie', price: 'Desde $35', img: 'https://picsum.photos/seed/cakesicle/600/700' },
]

const stats = [
  { value: '5+', label: 'Años de experiencia' },
  { value: '500+', label: 'Pedidos realizados' },
  { value: '100%', label: 'Hechos a mano' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-surface overflow-hidden">
        <div className="container-main section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="order-2 md:order-1">
              {/* Badge */}
              <span className="chip mb-6 inline-block">✦ Pedidos abiertos — Miami, FL</span>
              <h1 className="font-garamond text-5xl md:text-6xl lg:text-7xl text-plum leading-tight mb-6">
                Dulces hechos con{' '}
                <em className="text-primary-light not-italic italic">arte</em>,<br />
                regalados con amor
              </h1>
              <p className="font-sans text-lg text-muted font-light leading-relaxed mb-8 max-w-md">
                Repostería artesanal personalizada para tus momentos más especiales.
                Cada pedido es único — como tú.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/dulces" className="btn-primary">Ver Catálogo</Link>
                <Link href="/contacto" className="btn-outline">Solicitar Cotización</Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-card overflow-hidden aspect-[4/5] shadow-bloom-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/seed/hero-cake/800/1000"
                  alt="Custom artisanal cake by Sweets by Isis"
                  className="w-full h-full object-cover"
                />
                {/* Floating badge */}
                <div className="absolute top-6 -left-4 bg-lilac rounded-pill px-5 py-2 shadow-bloom text-sm font-sans font-semibold text-plum">
                  Bodas 2025 ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary-light/10 border-y border-border-rose py-10">
        <div className="container-main">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="font-garamond text-4xl text-primary">{s.value}</p>
                <p className="font-sans text-xs text-muted uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="chip mb-4 inline-block">Nuestras Creaciones</span>
            <h2 className="font-garamond text-4xl md:text-5xl text-plum">
              Elaborado con <em className="italic text-primary-light">pasión</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((p) => (
              <div key={p.name} className="card overflow-hidden group hover:shadow-bloom-md transition-shadow duration-300">
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
            <Link href="/dulces" className="btn-outline">Ver Catálogo Completo</Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-surface-yellow border-y border-border-rose">
        <div className="container-main">
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

      {/* COURSES CTA */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-card overflow-hidden aspect-video">
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
                Talleres presenciales en Miami con técnicas profesionales. Aprende a decorar galletas,
                trabajar con chocolate y crear postres que deleitan. Cupos limitados.
              </p>
              <Link href="/cursos" className="btn-primary">Ver Cursos Disponibles</Link>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM / GALLERY TEASER */}
      <section className="section-padding bg-surface-yellow border-y border-border-rose">
        <div className="container-main text-center">
          <span className="chip mb-4 inline-block">@sweetsbyisis</span>
          <h2 className="font-garamond text-4xl text-plum mb-10">
            Galería <em className="italic text-primary-light">artesanal</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square rounded-card-sm overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/gallery${i}/400/400`}
                  alt={`Gallery item ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="https://instagram.com/sweetsbyisis" target="_blank" rel="noopener noreferrer"
              className="btn-outline">Ver en Instagram</a>
          </div>
        </div>
      </section>
    </>
  )
}
