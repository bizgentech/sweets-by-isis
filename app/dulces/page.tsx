import Link from 'next/link'

const categories = ['Todos', 'Tortas', 'Fresas', 'Cakesicles', 'Cajas de Regalo', 'Bodas']

const products = [
  {
    name: 'Vintage Floral Cake',
    category: 'Tortas',
    desc: 'Vainilla con relleno de maracuyá. Diseño floral pintado a mano.',
    price: 'Desde $120',
    tags: ['Personalizado', 'Popular'],
    img: 'https://picsum.photos/seed/prod1/600/700',
  },
  {
    name: 'Fresas Belga Premium',
    category: 'Fresas',
    desc: 'Caja de fresas jumbo cubiertas con chocolate belga de alta calidad.',
    price: 'Desde $45',
    tags: ['Sin Gluten'],
    img: 'https://picsum.photos/seed/prod2/600/700',
  },
  {
    name: 'Pastel Collection Cakesicles',
    category: 'Cakesicles',
    desc: 'Set de 6 cakesicles de brownie en colores pastel con decoración artesanal.',
    price: 'Desde $35',
    tags: ['Set de 6'],
    img: 'https://picsum.photos/seed/prod3/600/700',
  },
  {
    name: 'Torta de Boda — Pequeña',
    category: 'Bodas',
    desc: '10–15 porciones. Diseño elegante personalizado para tu gran día.',
    price: 'Desde $85',
    tags: ['Bodas', '10-15 porciones'],
    img: 'https://picsum.photos/seed/prod4/600/700',
  },
  {
    name: 'Torta de Boda — Mediana',
    category: 'Bodas',
    desc: '20–25 porciones. Múltiples niveles con decoración floral premium.',
    price: 'Desde $145',
    tags: ['Bodas', '20-25 porciones'],
    img: 'https://picsum.photos/seed/prod5/600/700',
  },
  {
    name: 'Torta de Boda — Grande',
    category: 'Bodas',
    desc: '30–40 porciones. La pieza central perfecta para tu celebración.',
    price: 'Desde $225',
    tags: ['Bodas', '30-40 porciones'],
    img: 'https://picsum.photos/seed/prod6/600/700',
  },
  {
    name: 'Caja de Regalo Gourmet',
    category: 'Cajas de Regalo',
    desc: 'Caja curada con selección de dulces artesanales. Perfecta para regalar.',
    price: 'Desde $60',
    tags: ['Personalizable'],
    img: 'https://picsum.photos/seed/prod7/600/700',
  },
  {
    name: 'Torta de Cumpleaños',
    category: 'Tortas',
    desc: 'Diseño totalmente personalizado con el tema de tu elección.',
    price: 'Desde $95',
    tags: ['Personalizado'],
    img: 'https://picsum.photos/seed/prod8/600/700',
  },
]

export const metadata = {
  title: 'Dulces — Catálogo | Sweets by Isis',
  description: 'Explora nuestro catálogo de tortas personalizadas, fresas, cakesicles y más.',
}

export default function DulcesPage() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-surface border-b border-border-rose">
        <div className="container-main text-center">
          <span className="chip mb-4 inline-block">Catálogo Personalizado</span>
          <h1 className="font-garamond text-5xl md:text-6xl text-plum mb-4">
            Nuestros <em className="italic text-primary-light">Dulces</em>
          </h1>
          <p className="font-sans text-lg text-muted font-light max-w-xl mx-auto leading-relaxed">
            Cada creación es elaborada a mano con ingredientes de primera calidad.
            Personaliza tu pedido para cualquier ocasión especial.
          </p>
        </div>
      </section>

      {/* FILTER CHIPS */}
      <section className="bg-surface-yellow border-b border-border-rose py-5">
        <div className="container-main">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className="chip hover:bg-primary-light hover:text-white transition-colors cursor-pointer"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((p) => (
              <div key={p.name} className="card overflow-hidden group hover:shadow-bloom-md transition-all duration-300">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {p.tags.map((tag) => (
                      <span key={tag} className="chip text-xs py-0.5 px-2">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-sans text-muted uppercase tracking-widest mb-1">{p.category}</p>
                  <h3 className="font-garamond text-xl italic text-plum mb-2">{p.name}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-semibold text-primary">{p.price}</span>
                    <Link href="/contacto" className="text-xs font-sans text-primary-light hover:text-primary transition-colors font-medium">
                      Cotizar →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER PROCESS */}
      <section className="section-padding bg-surface-yellow border-t border-border-rose">
        <div className="container-main text-center">
          <h2 className="font-garamond text-4xl text-plum mb-4">
            ¿Cómo hacer tu <em className="italic text-primary-light">pedido</em>?
          </h2>
          <p className="font-sans text-muted mb-4 max-w-lg mx-auto leading-relaxed">
            Reserva tu fecha con al menos 2 semanas de anticipación. Los pedidos de boda requieren reserva con mayor tiempo.
          </p>
          <Link href="/contacto" className="btn-primary">Solicitar Cotización Ahora</Link>
        </div>
      </section>
    </>
  )
}
