import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-plum text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Sweets by Isis" className="h-10 w-auto mb-4 invert brightness-200" />
            <p className="text-sm text-white/70 font-sans leading-relaxed max-w-xs">
              Dulces hechos con arte, regalados con amor. Repostería artesanal en Miami, FL.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/sweets_by_isis/" target="_blank" rel="noopener noreferrer"
                className="text-white/60 hover:text-primary-light transition-colors text-sm font-sans">
                Instagram
              </a>
              <a href="https://wa.me/13058792205" target="_blank" rel="noopener noreferrer"
                className="text-white/60 hover:text-primary-light transition-colors text-sm font-sans">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-garamond text-lg mb-4 text-white">Explorar</h4>
            <ul className="space-y-3">
              {[
                { href: '/dulces', label: 'Catálogo de Dulces' },
                { href: '/cursos', label: 'Academia de Repostería' },
                { href: '/sobre-mi', label: 'Sobre Isis' },
                { href: '/contacto', label: 'Solicitar Cotización' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-sans text-white/60 hover:text-primary-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-garamond text-lg mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-sm font-sans text-white/60">
              <li>📍 Miami, Florida</li>
              <li>
                <a href="mailto:Sweetsbyisis@yahoo.com" className="hover:text-primary-light transition-colors">
                  Sweetsbyisis@yahoo.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/13058792205" className="hover:text-primary-light transition-colors">
                  WhatsApp disponible
                </a>
              </li>
              <li className="text-white/40 pt-2">Lun–Sáb · 9am–7pm EST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 font-sans">
            © {new Date().getFullYear()} Sweets by Isis. Todos los derechos reservados.
          </p>
        </div>

        <div className="border-t border-white/10 mt-4 pt-4 flex justify-center">
          <a
            href="https://www.bgtecnologies.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary-light transition-colors duration-200"
          >
            <span>Powered by</span>
            <span className="font-semibold text-primary-light group-hover:underline">
              BizGen Technologies
            </span>
            <span className="text-[10px] opacity-50">↗</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
