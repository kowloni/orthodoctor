import { Star, MapPin, Stethoscope, MessageCircle } from 'lucide-react'
import { site } from '@/lib/site'
import { Reveal } from '@/components/reveal'

const items = [
  {
    icon: Star,
    title: `${site.rating} estrelas`,
    desc: `${site.reviews} avaliações no Google`,
  },
  {
    icon: MapPin,
    title: 'Uberlândia - MG',
    desc: 'Atendimento próximo de você',
  },
  {
    icon: Stethoscope,
    title: 'Múltiplas especialidades',
    desc: 'Tratamentos em um só lugar',
  },
  {
    icon: MessageCircle,
    title: 'Agende fácil',
    desc: 'Avaliação pelo WhatsApp',
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 80}
            className="flex items-center gap-3 py-6 lg:justify-center"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
