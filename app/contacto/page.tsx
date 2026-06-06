export const metadata = {
  title: 'Contacto — Solicitar Cotización | Sweets by Isis',
  description: 'Solicita tu cotización personalizada. Respuesta garantizada en menos de 24 horas.',
}

const MAP_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBg2v-5L1U38YSMNhVyWPMy3r8WbkLGyXlWoPjoTgCSmjndieXEEPovXKv29bMnYIfkzQ6-XUF0BI3esiEchdrfu6hHZq9O8pQOHJ-Jj4NW5bQGeH7tzW-5q_LJU08L8Rz1cWEovO2tIzDMCbzHTPJONg8URkepVHFimDLRcwqyoLhxPBzP7LydNH54fMTfL-N5B3E9-ra-71XA6TKBfQgK9L7rT9VIif-yUNhpoXRJyCF1xfZEgF5DnSrhgyriJdA2NXGqciymHUlJ'

const contactItems = [
  { icon: '✉️', label: 'Email', value: 'hello@sweetsbyisis.com', href: 'mailto:hello@sweetsbyisis.com' },
  { icon: '📍', label: 'Location', value: 'Miami, Florida', href: null },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat  9:00 AM – 7:00 PM', href: null },
  { icon: '📷', label: 'Instagram', value: '@sweetsbyisis', href: 'https://instagram.com/sweetsbyisis' },
]

export default function ContactoPage() {
  return (
    <>
      {/* ── HERO ── */}
      <header className="max-w-container mx-auto px-6 md:px-8 text-center mb-16">
        <h1 className="font-garamond text-5xl md:text-[48px] leading-[1.1] text-primary mb-4">
          Hablemos de tu próxima ocasión especial
        </h1>
        <p className="font-sans text-lg font-light text-muted">
          Respuesta garantizada en menos de 24 horas
        </p>
      </header>

      {/* ── 2-COL LAYOUT ── */}
      <section className="max-w-container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">

        {/* Left: Info Panel */}
        <div className="lg:col-span-4 relative">
          {/* Floating badge */}
          <div className="absolute -top-4 -left-4 z-10 bg-tertiary-fixed text-plum px-4 py-1.5 rounded-full font-sans text-xs font-semibold tracking-widest shadow-sm">
            ✦ Respondemos en &lt; 24h
          </div>

          <div className="bg-white border border-outline-rose/50 rounded-xl p-8 shadow-bloom h-full flex flex-col justify-between">
            <div>
              <p className="font-sans text-lg font-light text-plum mb-8 leading-relaxed">
                Estamos listos para hacer de tu evento un momento dulce e inolvidable.
              </p>

              <div className="space-y-6 mb-10">
                {contactItems.map((item) => {
                  const inner = (
                    <>
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary-fixed transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-sans text-[10px] font-semibold text-muted tracking-widest uppercase">
                          {item.label}
                        </p>
                        <p className="font-sans text-base text-plum">{item.value}</p>
                      </div>
                    </>
                  )
                  return item.href ? (
                    <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label} className="flex items-center gap-4">
                      {inner}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/13059999999?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotización"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-4 rounded-full font-sans text-base font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-white"
              style={{ backgroundColor: '#25D366' }}
            >
              <span>💬</span>
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Quote Request Form */}
        <div className="lg:col-span-8 bg-white border border-outline-rose/30 rounded-xl p-8 lg:p-12 shadow-bloom">
          <h2 className="font-garamond text-2xl text-primary mb-8 border-b border-outline-rose/30 pb-4">
            Solicitar Cotización
          </h2>

          <form className="space-y-8">
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                id="name"
                placeholder="Tu Nombre Completo"
                className="input-field"
              />
              <input
                type="email"
                id="email"
                placeholder="Correo Electrónico"
                className="input-field"
              />
            </div>

            {/* Row 2: WhatsApp + Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="tel"
                id="whatsapp"
                placeholder="Número de WhatsApp"
                className="input-field"
              />
              <select
                id="type"
                defaultValue=""
                className="input-field appearance-none bg-transparent text-muted"
              >
                <option value="" disabled>Tipo de Pedido</option>
                <option value="boda">Pastel de Boda</option>
                <option value="cumpleanos">Cumpleaños / Evento</option>
                <option value="mesa">Mesa de Dulces</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            {/* Row 3: Date + Portions + Budget */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <input
                type="date"
                id="date"
                className="input-field text-muted"
              />
              <input
                type="number"
                id="portions"
                placeholder="Cant. de Porciones"
                className="input-field"
              />
              <select
                id="budget"
                defaultValue=""
                className="input-field appearance-none bg-transparent text-muted"
              >
                <option value="" disabled>Presupuesto Estimado</option>
                <option value="100-300">$100 – $300</option>
                <option value="300-600">$300 – $600</option>
                <option value="600+">$600+</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              id="message"
              rows={4}
              placeholder="Cuéntanos más sobre el diseño, colores o temática que tienes en mente..."
              className="input-field resize-none pt-2"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary-light text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-primary transition-colors mt-4 shadow-sm"
            >
              Enviar cotización
            </button>
          </form>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="max-w-container mx-auto px-6 md:px-8 text-center mb-8">
        <h3 className="font-garamond text-3xl text-primary mb-8">
          Servimos toda el área de South Florida
        </h3>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-bloom bg-surface-container-low relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={MAP_IMG}
            alt="Área de servicio — South Florida"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-multiply" />
        </div>
      </section>
    </>
  )
}
