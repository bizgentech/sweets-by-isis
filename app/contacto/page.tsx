export const metadata = {
  title: 'Contacto — Solicitar Cotización | Sweets by Isis',
  description: 'Solicita tu cotización personalizada. Respuesta garantizada en menos de 24 horas.',
}

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'hello@sweetsbyisis.com', href: 'mailto:hello@sweetsbyisis.com' },
  { icon: '💬', label: 'WhatsApp', value: 'Disponible Lun–Sáb', href: 'https://wa.me/13059999999' },
  { icon: '📍', label: 'Ubicación', value: 'Miami, Florida · South Florida', href: null },
  { icon: '🕐', label: 'Respuesta', value: 'Garantizada en < 24 horas', href: null },
]

export default function ContactoPage() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding bg-surface border-b border-border-rose">
        <div className="container-main text-center">
          <span className="chip mb-4 inline-block">Solicitar Cotización</span>
          <h1 className="font-garamond text-5xl md:text-6xl text-plum mb-4">
            Hablemos de tu{' '}
            <em className="italic text-primary-light">pedido especial</em>
          </h1>
          <p className="font-sans text-lg text-muted font-light max-w-xl mx-auto leading-relaxed">
            Cuéntame sobre tu evento y te enviaré una cotización personalizada en menos de 24 horas.
            Cada pedido se confecciona a medida — no hay nada genérico aquí.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-16">

            {/* FORM */}
            <div>
              <h2 className="font-garamond text-3xl text-plum mb-8">
                Cuéntame tu <em className="italic text-primary-light">idea</em>
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-semibold text-muted uppercase tracking-widest mb-2">
                      Nombre
                    </label>
                    <input type="text" placeholder="Tu nombre" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-semibold text-muted uppercase tracking-widest mb-2">
                      Apellido
                    </label>
                    <input type="text" placeholder="Tu apellido" className="input-field" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-muted uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input type="email" placeholder="tu@email.com" className="input-field" />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-muted uppercase tracking-widest mb-2">
                    WhatsApp (opcional)
                  </label>
                  <input type="tel" placeholder="+1 (305) 000-0000" className="input-field" />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-muted uppercase tracking-widest mb-2">
                    Tipo de evento
                  </label>
                  <select className="input-field">
                    <option value="">Selecciona una opción</option>
                    <option>Boda</option>
                    <option>Cumpleaños</option>
                    <option>Baby Shower</option>
                    <option>Evento corporativo</option>
                    <option>Quinceañera</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-muted uppercase tracking-widest mb-2">
                    Fecha del evento
                  </label>
                  <input type="date" className="input-field" />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-muted uppercase tracking-widest mb-2">
                    Número de porciones
                  </label>
                  <input type="number" placeholder="Ej: 25" className="input-field" min="1" />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-muted uppercase tracking-widest mb-2">
                    Cuéntame más sobre tu pedido
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe tu visión: colores, sabores, estilo, referencias de fotos..."
                    className="input-field resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-center py-4">
                  Enviar Solicitud ✦
                </button>
                <p className="text-xs font-sans text-muted text-center">
                  Te respondo en menos de 24 horas · Tu información es privada y segura
                </p>
              </form>
            </div>

            {/* CONTACT INFO + FAQ */}
            <div>
              <h2 className="font-garamond text-3xl text-plum mb-8">
                Información de <em className="italic text-primary-light">contacto</em>
              </h2>

              <div className="space-y-5 mb-10">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4 p-4 rounded-card-sm border border-border-rose">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <p className="text-xs font-sans font-semibold text-muted uppercase tracking-widest">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-sans text-plum hover:text-primary transition-colors font-medium">
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-sans text-plum font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div>
                <h3 className="font-garamond text-2xl text-plum mb-5">Preguntas frecuentes</h3>
                <div className="space-y-4">
                  {[
                    { q: '¿Con cuánta anticipación debo ordenar?', a: 'Mínimo 2 semanas para pedidos regulares. Para bodas, recomiendo reservar con 2–3 meses de anticipación.' },
                    { q: '¿Hacen entregas a domicilio?', a: 'Sí, hacemos entregas en Miami y el área de South Florida. El costo varía según la distancia.' },
                    { q: '¿Qué incluye el precio cotizado?', a: 'El precio incluye el producto terminado y el empaque. El delivery se cotiza por separado.' },
                    { q: '¿Cómo pago?', a: 'Aceptamos Zelle, CashApp y efectivo. Se requiere un 50% de depósito para confirmar el pedido.' },
                  ].map((item) => (
                    <div key={item.q} className="border-b border-border-rose pb-4">
                      <p className="font-sans font-semibold text-plum text-sm mb-1">{item.q}</p>
                      <p className="font-sans text-sm text-muted leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="section-padding bg-primary-light/10 border-t border-border-rose text-center">
        <div className="container-main">
          <h2 className="font-garamond text-3xl text-plum mb-3">
            ¿Prefieres chatear directamente?
          </h2>
          <p className="font-sans text-muted mb-6">Escríbeme por WhatsApp y te respondo de inmediato.</p>
          <a href="https://wa.me/13059999999?text=Hola%20Isis%2C%20me%20interesa%20hacer%20un%20pedido"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chatear por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
