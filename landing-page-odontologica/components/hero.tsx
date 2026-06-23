import Image from 'next/image'
import { Star, MessageCircle, ShieldCheck, MapPin } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-secondary/60 to-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-accent-foreground shadow-sm">
            <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
            Odontologia completa em Uberlândia
          </span>

          <h1 className="mt-5 text-pretty text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Um sorriso mais bonito, saudável e com toda a confiança que você merece
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Na {site.name}, você encontra diversas especialidades odontológicas em
            um só lugar, com atendimento humanizado e estrutura moderna. Agende
            sua avaliação e dê o primeiro passo para cuidar do seu sorriso.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-base font-semibold text-whatsapp-foreground shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Ver tratamentos
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex" aria-hidden="true">
                {[0, 1, 2, 3].map((i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
                <Star className="size-4 fill-amber-400/40 text-amber-400" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                {site.rating}
              </span>
              <span className="text-sm text-muted-foreground">
                ({site.reviews} avaliações no Google)
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {site.city}
            </div>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <Image
                src="/images/hero-clinica.png"
                alt="Paciente sorrindo em clínica odontológica moderna da Ortodoctor em Uberlândia"
                width={720}
                height={820}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
              <p className="text-2xl font-semibold text-primary">+6</p>
              <p className="text-xs font-medium text-muted-foreground">
                especialidades em um só lugar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
