import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import BrandWork from '@/components/BrandWork'
import About from '@/components/About'
import EarlierWork from '@/components/EarlierWork'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <BrandWork />
      <About />
      <EarlierWork />
      <Contact />
    </main>
  )
}
