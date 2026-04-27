import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}
