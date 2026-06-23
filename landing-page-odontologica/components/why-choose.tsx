import Image from 'next/image'
import { HeartHandshake, Building2, Layers3, ShieldCheck, CalendarCheck, Users, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { Reveal } from '@/components/reveal'

const reasons = [
  {
    icon: HeartHandshake,
    title: 'Atendimento humanizado',
    desc: 'Você é ouvido com atenção e cuidado, do primeiro contato ao fim do tratamento.',
  },
  {
    icon: Building2,
    title: 'Estrutura moderna',
    desc: 'Ambiente limpo, organizado e preparado para o seu conforto e segurança.',
  },
  {
    icon: Layers3,
    title: 'Tudo em um só lugar',
    desc: 'Diversas especialidades reunidas, sem precisar procurar outras clínicas.',
  },
  {
    icon: Users,
    title: 'Equipe preparada',
    desc: 'Profissionais dedicados a oferecer um tratamento de qualidade e confiança.',
  },
  {
    icon: CalendarCheck,
    title: 'Agendamento simples',
    desc: 'Marque sua avaliação de forma rápida e prática direto pelo WhatsApp.',
  },
  {
    icon: ShieldCheck,
    title: 'Foco em segurança',
    desc: 'Cuidado, conforto e seriedade em cada etapa do seu tratamento.',
  },
]

export function WhyChoose() {
  return (
    <section id="diferenciais" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Por que a Ortodoctor
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Uma escolha segura para cuidar do seu sorriso em Uberlândia
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Mais do que tratar dentes, nós cuidamos de pessoas. Conheça os
            motivos que fazem da Ortodoctor uma referência em confiança e
            qualidade na cidade.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-md">
            <Image
              src="/images/ambiente-clinica.png"
              alt="Ambiente moderno e limpo da clínica Ortodoctor em Uberlândia"
              width={640}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-base font-semibold text-whatsapp-foreground shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Quero agendar minha avaliação
          </a>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={(i % 2) * 90}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <reason.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
