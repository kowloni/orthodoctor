import Image from 'next/image'
import { Sparkles, Smile, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const highlights = [
  {
    icon: Smile,
    title: 'Mais autoestima',
    desc: 'Um sorriso alinhado e saudável transforma a forma como você se sente todos os dias.',
  },
  {
    icon: Sparkles,
    title: 'Estética natural',
    desc: 'Resultados pensados para valorizar a beleza do seu sorriso de forma harmônica.',
  },
  {
    icon: ShieldCheck,
    title: 'Saúde em primeiro lugar',
    desc: 'Cuidado completo que une função e estética para um sorriso que dura.',
  },
]

export function ResultsGallery() {
  return (
    <section id="resultados" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resultados"
          title="O cuidado que reflete no seu sorriso"
          description="Cada tratamento é planejado para unir saúde, conforto e estética. Veja o tipo de cuidado que você pode esperar na Ortodoctor."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:col-span-2 lg:row-span-2">
            <Image
              src="/images/sorriso-resultado.png"
              alt="Sorriso saudável e bem cuidado, resultado de tratamento odontológico"
              width={820}
              height={620}
              className="h-full w-full object-cover"
            />
          </Reveal>

          {highlights.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="flex flex-col justify-center rounded-3xl border border-border bg-secondary/50 p-7"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Imagens ilustrativas. Os resultados podem variar de acordo com cada caso e avaliação profissional.
        </p>
      </div>
    </section>
  )
}
