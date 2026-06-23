import { MapPin, Phone } from 'lucide-react'
import { navLinks, site, whatsappLink } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
                O
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold text-foreground">
                  Ortodoctor
                </span>
                <span className="text-[11px] font-medium text-muted-foreground">
                  Martins Uberlândia
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Clínica odontológica com múltiplas especialidades, cuidando do seu
              sorriso com confiança e qualidade em {site.city}.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">Navegação</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">Contato</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {site.city}
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.fullName}. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
