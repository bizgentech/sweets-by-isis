import Link from 'next/link'

export const metadata = {
  title: 'Cursos — Academia de Repostería | Sweets by Isis',
  description: 'Aprende repostería creativa con talleres presenciales en Miami. Cupos limitados.',
}

// Stitch AIDA-generated images
const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAqtWFhEqarTam0D8H1dDezPRRt74QJZ9MFFMcmtzI4DzxCCe7sqvO69qYI-FCG0SgYW1KT6TAVApeimTWfNO0nc1C2QgFYqWJx0oZqPNcalFvC7AbVQ1rGWmL00U1BIfylNQ-SwPMSmmx_rQsZlvvKnjXWs9b-P8rcpdT69VoqRUr9ye3bXf6jkSvLuujbK_--ABjhrbG9G8n6XI21QhbSCEED8K98PiqJcr1p_z98vRFKSrTBcWZrt2AfgNrsEtOisIU4pzQjlkgR'

const courses = [
  {
    title: 'Decoración de Galletas',
    level: 'Principiante',
    duration: '4 horas',
    spots: 6,
    desc: 'Aprende las técnicas fundamentales de decoración con royal icing, colores y diseños únicos.',
    price: '$85',
    img: HERO_IMG,
  },
  {
    title: 'Trabajo con Chocolate',
    level: 'Intermedio',
    duration: '5 horas',
    spots: 4,
    desc: 'Domina el temple del chocolate, crea bombones, trufas y decoraciones artísticas avanzadas.',
    price: '$110',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNDsxvk_r-q4_c0jiMoDrgLnSzOJ0GoN6u6H1G2AW5ec8HHFIB_QFrLCw0urR7zZNiPMVVZhfWWJ5bon_oAIFEPDbjmaueN9QtqBMzIkfiO5vmFpuvZNJrjL_LYZnkjAaRDg4vYN5k6R5qlTCNLWHfcHI8ZarDYjDdL3mw2mgbTMWBzjufaoeSjQwabFhY0MLOuxRwJL0XxPGuDmALQWJX2vyh5M6Pk9bkVAvNT92JoTrRdlAAOwLItIa9zCy5E7dqxu4RPZYZI_Dy',
  },
  {
    title: 'Tortas de Diseño',
    level: 'Intermedio–Avanzado',
    duration: '6 horas',
    spots: 5,
    desc: 'Técnicas profesionales de relleno, cobertura y decoración floral para tortas de ocasión.',
    price: '$140',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh_DTDa7zDaNkRDowvDWvvoB2pduFMypHq1ZPJqjrAA1j-PEuvFK4mmpVvs7s2tqCnZxVmTthjtc1bw-bfPvWXEHArSu_ZZ4fsDy_RKw_k6wAO1QvsHNAIlPNdlnIiJlc-ph1Hxat0Uh0Xpb7TgmFcp3DjhPGrANRdtLBGgDbWdo6wP5T9atWU6P7YVkgkaHZroNROTZjWCff4i0pXFecRrTNo54a7CcV1XTUo8KwJvvtuGycpnkUWaYivxQAklBK6thA0jor-OfVT',
  },
  {
    title: 'Cakesicles & Mini Postres',
    level: 'Principiante',
    duration: '3 horas',
    spots: 8,
    desc: 'Crea cakesicles, cake pops y mini postres decorados perfectos para eventos y regalos.',
    price: '$70',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIA55cJ5saH2S9Nbj4mlLmfPNTvC1BRXcQYArVSLTNKf5OeaeGomd1eOUg13SR77IFiAUmkv3EIGdantUDVNlIIyrxqUPH7hx8RLlq5An_X9NpxbZ33lux4lyAK9vslEOdyo6djyGHk0KHNFpYDqFdcHE9hh4ppweqo259qvIRkyc8EI4I6WWr3vTwsrRH1k6-Z0gP6alofg_HGn0eR7XTa1FVfIoF_4IDC8n2qt8KlBI0EZdXoi_p9lpWiue1mOiLVOSFltLTiItc',
  },
]

const perks = [
  { icon: '🎨', title: 'Técnica Profesional', desc: 'Más de 5 años de experiencia en repostería artística y decoración avanzada.' },
  { icon: '👥', title: 'Grupos Pequeños', desc: 'Máximo 8 personas por taller para garantizar atención personalizada.' },
  { icon: '📜', title: 'Certificado Incluido', desc: 'Recibe tu certificado de participación al completar cada taller.' },
  { icon: '🧁', title: 'Materiales Incluidos', desc: 'Todo lo que necesitas para practicar está incluido en el precio del taller.' },
]

export default function CursosPage() {
  return (
    <>
      {/* ── HERO — exact Stitch structure ── */}
      <section className="relative pt-10 pb-16 md:pb-20 px-4 overflow-hidden">
        {/* Decorative blurred circle — bottom left of image */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-light rounded-full blur-[100px] opacity-20 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div className="z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary-fixed rounded-full mb-6">
              <span className="text-tertiary font-sans text-xs font-semibold tracking-widest">
                ✦ Academia Sweets by Isis
              </span>
            </div>

            <h1 className="font-garamond text-5xl md:text-[48px] leading-[1.1] text-plum mb-6 max-w-2xl">
              Aprende el{' '}
              <span className="italic text-primary">arte</span>{' '}
              de la repostería creativa
            </h1>

            <p className="font-sans text-lg font-light text-muted mb-8 max-w-xl leading-relaxed">
              Únete a nuestros talleres presenciales en Miami y descubre las técnicas
              profesionales para decorar galletas, modelar chocolate y crear postres que cautivan.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#cursos"
                className="px-8 py-4 bg-primary-light text-white rounded-full font-sans text-sm font-semibold tracking-wide hover:bg-primary transition-colors"
              >
                Ver cursos disponibles
              </a>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative z-0 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-bloom-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMG}
              alt="Taller de repostería — Academia Sweets by Isis"
              className="w-full h-full object-cover"
            />
            {/* Decorative pink glow bottom-left */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light rounded-full blur-3xl opacity-50 pointer-events-none" />
            {/* "Cupos limitados" floating badge — top right */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-border-rose shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-sans text-xs font-semibold text-plum tracking-widest uppercase">
                Cupos limitados
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSE CARDS ── */}
      <section id="cursos" className="bg-surface-container-low border-y border-border-rose py-20">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <h2 className="font-garamond text-4xl md:text-5xl text-plum mb-4">
              Talleres <em className="italic text-primary">disponibles</em>
            </h2>
            <p className="font-sans text-base text-muted max-w-xl mx-auto">
              Cada taller es una experiencia práctica e íntima. Todos los materiales están incluidos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-[20px] overflow-hidden shadow-bloom border border-outline-rose/30 group hover:shadow-bloom-md transition-all duration-300 flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-tertiary-fixed text-on-tertiary-container font-sans text-[10px] font-semibold px-3 py-1.5 rounded-full tracking-wider">
                      {c.level}
                    </span>
                    <span className="bg-surface-container-high text-muted font-sans text-[10px] font-semibold px-3 py-1.5 rounded-full tracking-wider">
                      ⏱ {c.duration}
                    </span>
                    <span className="bg-surface-container-high text-muted font-sans text-[10px] font-semibold px-3 py-1.5 rounded-full tracking-wider">
                      👥 {c.spots} cupos
                    </span>
                  </div>
                  <h3 className="font-garamond text-2xl italic text-plum mb-2">{c.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-5 flex-grow">{c.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-garamond text-2xl text-primary">{c.price}</span>
                    <Link
                      href="/contacto"
                      className="bg-primary-light text-white font-sans text-sm font-medium px-6 py-2.5 rounded-full hover:bg-primary transition-colors"
                    >
                      Reservar Cupo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LEARN WITH ISIS ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <h2 className="font-garamond text-4xl md:text-5xl text-plum">
              ¿Por qué aprender con{' '}
              <em className="italic text-primary">Isis</em>?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div
                key={p.title}
                className="bg-surface-container-low rounded-[20px] p-6 text-center border border-outline-rose/30 shadow-bloom"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-garamond text-xl text-plum mb-2">{p.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK CTA — same pattern as Dulces ── */}
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
              ¿Lista para aprender?
            </h2>
            <p className="font-sans text-lg font-light text-surface/80 mb-10 max-w-2xl mx-auto">
              Los cupos son limitados. Reserva tu lugar hoy y empieza tu camino
              en la repostería artesanal con Isis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/13058792205?text=Hola%2C%20me%20interesa%20reservar%20un%20cupo%20en%20un%20taller"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-light text-white font-sans font-medium px-8 py-4 rounded-full hover:bg-primary transition-colors w-full sm:w-auto justify-center flex items-center gap-2"
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
