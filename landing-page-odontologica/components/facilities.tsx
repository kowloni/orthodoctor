import { ClipboardList, CreditCard, MessageCircle, Search } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { Reveal } from '@/components/reveal'

const facilities = [
  {
    step: '01',
    icon: Search,
    title: 'Avaliação e orientação',
    desc: 'Entendemos o seu caso e orientamos o melhor caminho para o seu sorriso.',
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'Plano individual',
    desc: 'Um tratamento pensado especialmente para a sua necessidade e o seu objetivo.',
  },
  {
    step: '03',
    icon: CreditCard,
    title: 'Pagamento facilitado',
    desc: 'Conversamos sobre opções de pagamento que cabem no seu planejamento.',
  },
  {
    step: '04',
    icon: MessageCircle,
    title: 'Tudo pelo WhatsApp',
    desc: 'Tire dúvidas e agende sua avaliação de forma simples e sem burocracia.',
  },
]

export function Facilities() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Como funciona
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Começar a cuidar do seu sorriso é mais simples do que parece
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Sem complicação: você agenda uma avaliação, entende o tratamento
            ideal e recebe orientação sobre as melhores condições para começar.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 4) * 80}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-sm"
            >
              <span className="absolute right-6 top-6 text-sm font-semibold tabular-nums text-border">
                {item.step}
              </span>
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-base font-semibold text-whatsapp-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Falar com a clínica agora
          </a>
        </Reveal>
      </div>
    </section>
  )
}
