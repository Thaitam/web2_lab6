import ContactForm from '@/components/homepage/ContactForm'
import Contents from '@/components/homepage/Contents'
import Hero from '@/components/homepage/Hero'

export default function Home() {
  return (
    <div className='relative overflow-hidden flex flex-col items-center'>
      <Hero/>
      <Contents/>
      <ContactForm/>
    </div>
  )
}
