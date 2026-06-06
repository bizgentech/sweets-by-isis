import Link from 'next/link'

export const metadata = {
  title: 'Sobre Mí — Conoce a Isis | Sweets by Isis',
  description: 'Conoce la historia de Isis, la repostera artesanal detrás de Sweets by Isis en Miami.',
}

const press = [
  { name: 'Revista MIAMI', desc: '"La repostera que está transformando el dulce artesanal en Miami."' },
  { name: 'Pastry Arts', desc: '"Una técnica impecable con un sello profundamente personal."' },
  { name: 'Wedding Vibes', desc: '"Las tortas de boda más hermosas del sur de la Florida."' },
]

const values = [
  { icon: '✦', title: 'Artesanía', desc: 'Cada pieza es elaborada a mano con materiales de primera calidad, sin atajos.' },
  { icon: '✦', title: 'Personalización', desc: 'Tu historia, tus colores, tu sabor. Nada es genérico en nuestro estudio.' },
  { icon: '✦', title: 'Conexión', desc: 'Creo en el poder de los dulces para crear memorias que perduran toda la vida.' },
]

export default function SobreMiPage() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-surface border-b border-border-rose">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="chip mb-4 inline-block">Conoce a Isis</span>
              <h1 className="font-garamond text-5xl md:text-6xl text-plum leading-tight mb-6">
                Más de 5 años transformando{' '}
                <em className="italic text-primary-light">ingredientes simples</em>{' '}
                en obras de arte comestibles
              </h1>
              <p className="font-sans text-lg text-muted font-light leading-relaxed">
                Hola, soy Isis — repostera artesanal, educadora y apasionada por el arte de lo dulce.
                Mi amor por la pastelería nació en la cocina de mi abuela y se convirtió en una búsqueda
                dedicada de la excelencia en la repostería moderna.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-card overflow-hidden aspect-[3/4] shadow-bloom-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/seed/isis-portrait/600/800"
                  alt="Isis — Repostera artesanal"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating quote */}
              <div className="absolute -bottom-6 -left-6 bg-surface rounded-card p-5 shadow-bloom max-w-xs hidden md:block">
                <p className="font-garamond text-lg italic text-plum">
                  &ldquo;Cada pedido es único — como tú.&rdquo;
                </p>
                <p className="font-sans text-xs text-muted mt-2">— Isis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section-padding bg-surface-yellow border-b border-border-rose">
        <div className="container-main max-w-3xl mx-auto text-center">
          <h2 className="font-garamond text-4xl text-plum mb-6">
            Mi <em className="italic text-primary-light">historia</em>
          </h2>
          <div className="space-y-5 font-sans text-base text-muted font-light leading-relaxed text-left">
            <p>
              Todo comenzó en la cocina de mi abuela en Cuba, donde aprendí que la comida es el idioma universal del amor. Esos momentos — el aroma de la vainilla, la textura de la masa entre mis dedos — me enseñaron que hornear no es solo una técnica, es un acto de cuidado.
            </p>
            <p>
              Después de años perfeccionando mi oficio y obteniendo formación profesional en técnicas modernas de repostería, fundé <strong className="text-plum">Sweets by Isis</strong> en Miami con una misión clara: crear dulces que no solo se vean hermosos, sino que cuenten la historia de cada cliente.
            </p>
            <p>
              Hoy tengo el privilegio de ser parte de los momentos más especiales de mis clientes — bodas, cumpleaños, logros y celebraciones de todo tipo. Cada torta, cada galleta decorada, cada caja de regalo lleva mi firma artesanal y mi corazón.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-surface border-b border-border-rose">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-garamond text-4xl text-plum">
              Lo que me <em className="italic text-primary-light">guía</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="card p-8 text-center">
                <p className="text-3xl text-primary-light mb-4">{v.icon}</p>
                <h3 className="font-garamond text-2xl text-plum mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-surface-yellow border-b border-border-rose">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-garamond text-4xl text-plum">
              Lo que <em className="italic text-primary-light">ofrezco</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tortas de Boda', desc: 'Piezas únicas para tu día más especial.', img: 'https://picsum.photos/seed/serv1/400/400' },
              { title: 'Tortas de Cumpleaños', desc: 'Celebraciones memorables de todas las edades.', img: 'https://picsum.photos/seed/serv2/400/400' },
              { title: 'Eventos Corporativos', desc: 'Dulces elegantes para tu próximo evento de empresa.', img: 'https://picsum.photos/seed/serv3/400/400' },
              { title: 'Cursos de Repostería', desc: 'Aprende el arte en talleres presenciales íntimos.', img: 'https://picsum.photos/seed/serv4/400/400' },
            ].map((s) => (
              <div key={s.title} className="card overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-garamond text-lg italic text-plum mb-1">{s.title}</h3>
                  <p className="font-sans text-sm text-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="font-garamond text-4xl text-plum">
              En los <em className="italic text-primary-light">medios</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {press.map((p) => (
              <div key={p.name} className="border border-border-rose rounded-card p-6 text-center">
                <p className="font-sans font-semibold text-sm text-muted uppercase tracking-widest mb-3">{p.name}</p>
                <p className="font-garamond text-lg italic text-plum leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-main">
          <h2 className="font-garamond text-4xl md:text-5xl mb-4">
            ¿Lista para crear algo <em className="italic">hermoso</em> juntas?
          </h2>
          <p className="font-sans text-white/80 font-light mb-8 max-w-md mx-auto">
            Acepto pedidos de bodas 2025 y estoy disponible para cotizaciones de eventos y cursos.
          </p>
          <Link href="/contacto" className="bg-white text-primary font-sans font-semibold px-8 py-3 rounded-pill hover:bg-surface transition-colors inline-block">
            Contáctame Ahora
          </Link>
        </div>
      </section>
    </>
  )
}
