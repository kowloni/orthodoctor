import { Star, Quote } from 'lucide-react'
import { site } from '@/lib/site'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    name: 'Mariana S.',
    text: 'Fui muito bem atendida desde o primeiro contato. A equipe explicou tudo com calma e fiquei super tranquila durante o tratamento. Meu sorriso ficou exatamente como eu queria.',
  },
  {
    name: 'Rafael A.',
    text: 'Estava com receio de fazer implante, mas a clínica passou muita segurança. Ambiente limpo, organizado e profissionais atenciosos. Recomendo demais.',
  },
  {
    name: 'Patrícia L.',
    text: 'Agendei pelo WhatsApp e foi tudo muito prático. Fiz clareamento e limpeza, adorei o resultado e o cuidado em cada detalhe. Voltarei com certeza.',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem confia na Ortodoctor recomenda"
          description={`Nota ${site.rating} no Google com ${site.reviews} avaliações de pacientes que cuidaram do sorriso com a gente.`}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 90}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <Quote className="size-8 text-primary/30" aria-hidden="true" />
              <div className="mt-3 flex" aria-label="5 de 5 estrelas">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {item.text}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                  {item.name.charAt(0)}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {item.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
