import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Services } from '@/components/services'
import { WhyChoose } from '@/components/why-choose'
import { ResultsGallery } from '@/components/results-gallery'
import { Testimonials } from '@/components/testimonials'
import { Facilities } from '@/components/facilities'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChoose />
        <ResultsGallery />
        <Testimonials />
        <Facilities />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
