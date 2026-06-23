export const site = {
  name: 'Ortodoctor',
  unit: 'Unidade Martins Uberlândia',
  fullName: 'Ortodoctor - Unidade Martins Uberlândia',
  city: 'Uberlândia - MG',
  phoneDisplay: '+55 34 3458-9919',
  rating: '4.3',
  reviews: '82',
}

const whatsappNumber = '553434589919'

export function whatsappLink(
  message = 'Olá! Vim pelo site e gostaria de agendar uma avaliação na Ortodoctor.',
) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]
