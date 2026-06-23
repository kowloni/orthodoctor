'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const faqs = [
  {
    q: 'Como faço para agendar uma avaliação?',
    a: 'É bem simples: basta clicar em qualquer botão de WhatsApp aqui no site. Você fala diretamente com a nossa equipe, tira suas dúvidas e marca o melhor horário para a sua avaliação.',
  },
  {
    q: 'Quais tratamentos a clínica realiza?',
    a: 'Oferecemos diversas especialidades em um só lugar: clareamento dental, implantes, ortodontia, limpeza, prótese dentária e estética dental. Na avaliação, indicamos o tratamento ideal para o seu caso.',
  },
  {
    q: 'A clínica faz avaliação antes de iniciar o tratamento?',
    a: 'Sim. Antes de qualquer procedimento, fazemos uma avaliação para entender a sua necessidade e orientar o melhor caminho, sempre com transparência e cuidado.',
  },
  {
    q: 'Quais são as formas de pagamento?',
    a: 'Conversamos sobre opções de pagamento facilitadas durante a sua avaliação, buscando uma condição que caiba no seu planejamento. Fale com a nossa equipe pelo WhatsApp para mais detalhes.',
  },
  {
    q: 'Quanto tempo dura um tratamento?',
    a: 'Depende do tipo de tratamento e de cada caso. Tratamentos como limpeza e clareamento são mais rápidos, enquanto ortodontia e implantes seguem um acompanhamento. Tudo é explicado na avaliação.',
  },
  {
    q: 'Onde a clínica fica localizada?',
    a: 'Estamos em Uberlândia - MG, na Unidade Martins, com atendimento próximo e prático para você. Fale com a gente pelo WhatsApp para receber as informações de localização.',
  },
  {
    q: 'O implante e o clareamento são seguros?',
    a: 'Sim. São procedimentos consolidados na odontologia, realizados com cuidado e acompanhamento profissional. Na avaliação, explicamos cada etapa para você decidir com segurança.',
  },
  {
    q: 'Posso tirar dúvidas pelo WhatsApp antes de agendar?',
    a: 'Com certeza! Você pode nos chamar no WhatsApp para esclarecer qualquer dúvida sobre tratamentos e atendimento antes mesmo de marcar a sua avaliação.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-border bg-card px-5 shadow-sm sm:px-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-foreground">{q}</span>
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
      )}
    </div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas que pacientes costumam fazer"
          description="Reunimos as principais dúvidas para te ajudar a decidir com tranquilidade."
        />
        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((item) => (
            <FaqItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
