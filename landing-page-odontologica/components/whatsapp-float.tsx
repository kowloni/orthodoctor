import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 font-semibold text-whatsapp-foreground shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl sm:px-5"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="hidden text-sm sm:inline">Fale conosco</span>
    </a>
  )
}
