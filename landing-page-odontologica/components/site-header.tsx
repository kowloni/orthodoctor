'use client'

import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { navLinks, site, whatsappLink } from '@/lib/site'

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label={site.fullName}>
      <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
        O
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-tight text-foreground">
          Ortodoctor
        </span>
        <span className="text-[11px] font-medium text-muted-foreground">
          Martins Uberlândia
        </span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Agendar avaliação
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
