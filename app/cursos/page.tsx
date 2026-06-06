import Link from 'next/link'

export const metadata = {
  title: 'Cursos — Academia de Repostería | Sweets by Isis',
  description: 'Aprende repostería creativa con talleres presenciales en Miami. Cupos limitados.',
}

const courses = [
  {
    title: 'Decoración de Galletas',
    level: 'Principiante',
    duration: '4 horas',
    desc: 'Aprende las técnicas fundamentales de decoración con royal icing, colores y diseños únicos.',
    price: '$85',
    img: 'https://picsum.photos/seed/course1/600/400',
    spots: 6,
  },
  {
    title: 'Trabajo con Chocolate',
    level: 'Intermedio',
    duration: '5 horas',
    desc: 'Domina el temple del chocolate, crea bombones, trufas y decoraciones artísticas avanzadas.',
    price: '$110',
    img: 'https://picsum.photos/seed/course2/600/400',
    spots: 4,
  },
  {
    title: 'Tortas de Diseño',
    level: 'Intermedio–Avanzado',
    duration: '6 horas',
    desc: 'Técnicas profesionales de relleno, cobertura con fondant y decoración floral para tortas de ocasión.',
    price: '$140',
    img: 'https://picsum.photos/seed/course3/600/400',
    spots: 5,
  },
  {
    title: 'Cakesicles & Mini Postres',
    level: 'Principiante',
    duration: '3 horas',
    desc: 'Crea cakesicles, cake pops y mini postres decorados perfectos para eventos y regalos.',
    price: '$70',
    img: 'https://picsum.photos/seed/course4/600/400',
    spots: 8,
  },
]

export default function CursosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-surface overflow-hidden">
        <div className="container-main section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="chip mb-4 inline-block">Academia Sweets by Isis</span>
              <h1 className="font-garamond text-5xl md:text-6xl text-plum leading-tight mb-6">
                Aprende el arte de la{' '}
                <em className="italic text-primary-light">repostería creativa</em>
              </h1>
              <p className="font-sans text-lg text-muted font-light leading-relaxed mb-6">
                Talleres presenciales en Miami con técnicas profesionales.
                Cupos limitados para una experiencia personalizada e íntima.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="chip">✓ Materiales incluidos</span>
                <span className="chip">✓ Certificado al finalizar</span>
                <span className="chip">✓ Grupos pequeños</span>
              </div>
              <Link href="#cursos" className="btn-primary">Ver Cursos Disponibles</Link>
            </div>
            <div className="rounded-card overflow-hidden aspect-[4/3] shadow-bloom-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/academy-hero/800/600"
                alt="Academia de Repostería Sweets by Isis"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COURSE CARDS */}
      <section id="cursos" className="section-padding bg-surface-yellow border-y border-border-rose">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-garamond text-4xl text-plum">
              Talleres <em className="italic text-primary-light">disponibles</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((c) => (
              <div key={c.title} className="card overflow-hidden group hover:shadow-bloom-md transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="chip text-xs">{c.level}</span>
                    <span className="chip text-xs">⏱ {c.duration}</span>
                    <span className="chip text-xs">👥 {c.spots} cupos</span>
                  </div>
                  <h3 className="font-garamond text-2xl italic text-plum mb-2">{c.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-4">{c.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xl font-semibold text-primary">{c.price}</span>
                    <Link href="/contacto" className="btn-primary text-sm py-2 px-6">
                      Reservar Cupo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LEARN WITH ISIS */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-garamond text-4xl text-plum">
              ¿Por qué aprender con <em className="italic text-primary-light">Isis</em>?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: '🎨', title: 'Técnica Profesional', desc: 'Más de 5 años de experiencia en repostería artística y decoración avanzada.' },
              { icon: '👥', title: 'Grupos Pequeños', desc: 'Máximo 8 personas por taller para garantizar atención personalizada.' },
              { icon: '📜', title: 'Certificado Incluido', desc: 'Recibe tu certificado de participación al completar cada taller.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-card border border-border-rose">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-garamond text-xl text-plum mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contacto" className="btn-primary">Inscríbete Ahora</Link>
          </div>
        </div>
      </section>
    </>
  )
}
