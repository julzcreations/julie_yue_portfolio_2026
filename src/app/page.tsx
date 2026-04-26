import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import AlsoShipped from '@/components/AlsoShipped'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <AlsoShipped />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}
