import {
  Sparkles,
  Bolt,
  AlignCenterHorizontal,
  Droplets,
  Layers,
  Smile,
  ArrowRight,
} from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Sparkles,
    name: 'Clareamento dental',
    desc: 'Deixe seu sorriso mais branco e uniforme com um procedimento seguro e acompanhamento profissional.',
  },
  {
    icon: Bolt,
    name: 'Implantes',
    desc: 'Reponha dentes perdidos com naturalidade, recuperando a mastigação, a estética e a autoestima.',
  },
  {
    icon: AlignCenterHorizontal,
    name: 'Ortodontia',
    desc: 'Alinhe seus dentes e corrija a mordida com opções modernas de aparelhos para cada perfil.',
  },
  {
    icon: Droplets,
    name: 'Limpeza',
    desc: 'Remova placa e tártaro com a limpeza profissional, prevenindo cáries e doenças na gengiva.',
  },
  {
    icon: Layers,
    name: 'Prótese dentária',
    desc: 'Recupere dentes danificados ou ausentes com próteses confortáveis e de aparência natural.',
  },
  {
    icon: Smile,
    name: 'Estética dental',
    desc: 'Harmonize o seu sorriso com tratamentos estéticos pensados para realçar a sua beleza natural.',
  },
]

export function Services() {
  return (
    <section id="tratamentos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tratamentos"
          title="Cuidado completo para o seu sorriso"
          description="Diversas especialidades odontológicas em um só lugar, com tecnologia e atenção em cada detalhe do seu tratamento."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.name}
              delay={(i % 3) * 90}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {service.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
              <a
                href={whatsappLink(
                  `Olá! Gostaria de saber mais sobre ${service.name} na Ortodoctor.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-foreground"
              >
                Saiba mais
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
