import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Specialities from '@/components/Specialities'
import WhatWeDo from '@/components/WhatWeDo'
import WhyUs from '@/components/WhyUs'
import Sectors from '@/components/Sectors'
import Partners from '@/components/Partners'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-lightGray">
      <Header />
      <Hero />
      <About />
      <Specialities />
      <WhatWeDo />
      <WhyUs />
      <Sectors />
      <Partners />
      <Contact />
      <Footer />
    </main>
  )
}





