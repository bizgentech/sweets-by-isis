'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/dulces', label: 'Dulces' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/sobre-mi', label: 'Sobre Mí' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-10 left-0 right-0 w-full z-50 bg-surface/70 backdrop-blur-[15px] border-b border-outline-rose/30 shadow-bloom transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 w-full max-w-container mx-auto">

        {/* Brand — italic EB Garamond text, matching Stitch */}
        <Link
          href="/"
          className="font-garamond text-3xl italic text-primary-light hover:opacity-80 transition-opacity"
        >
          Sweets by Isis
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-base transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-primary font-bold border-b-2 border-primary pb-0.5'
                  : 'text-muted hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-light text-white rounded-full font-sans text-sm font-medium hover:bg-primary transition-colors shadow-sm"
          >
            Hacer pedido
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-plum transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-plum transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-plum transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-surface/95 backdrop-blur-[15px] border-t border-border-rose px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-garamond text-lg text-plum hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="bg-primary-light text-white font-sans text-sm font-medium px-6 py-3 rounded-full text-center hover:bg-primary transition-colors mt-2"
            onClick={() => setOpen(false)}
          >
            Hacer pedido
          </Link>
        </div>
      )}
    </nav>
  )
}
