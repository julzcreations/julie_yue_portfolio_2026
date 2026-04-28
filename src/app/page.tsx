import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import BrandWork from '@/components/BrandWork'
import AlsoShipped from '@/components/AlsoShipped'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import EarlierWork from '@/components/EarlierWork'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <BrandWork />
      <AlsoShipped />
      <About />
      <Experience />
      <Skills />
      <EarlierWork />
      <Contact />
    </main>
  )
}
