import { MapPin, Phone, Star, MessageCircle, Clock } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'
import { Reveal } from '@/components/reveal'

export function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contato
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Agora só falta dar o primeiro passo
            </h2>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Agende sua avaliação na {site.fullName} e descubra o melhor
              caminho para o seu sorriso. Atendimento prático, próximo e com toda
              a confiança que você merece.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">Localização</p>
                  <p className="text-sm text-muted-foreground">{site.city}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">WhatsApp</p>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Star className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {site.rating} estrelas no Google
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {site.reviews} avaliações de pacientes
                  </p>
                </div>
              </li>
            </ul>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-whatsapp-foreground shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Agendar avaliação pelo WhatsApp
            </a>
          </Reveal>

          <Reveal
            delay={120}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-md"
          >
            <iframe
              title="Localização da Ortodoctor em Uberlândia - MG"
              src="https://www.google.com/maps?q=Uberl%C3%A2ndia%20MG%20Bairro%20Martins&output=embed"
              className="h-72 w-full border-0 lg:h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center gap-2 px-5 py-4 text-sm text-muted-foreground">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              Confirme horários de atendimento pelo WhatsApp.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
