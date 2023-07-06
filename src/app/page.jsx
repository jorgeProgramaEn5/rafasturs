import Image from 'next/image'
import {NavBar} from '@/components/NavBar';
import { Banner } from '@/components/Banner';
import { About } from '@/components/About';
import { Tours  } from '@/components/Tours';
// import { ContactEmailjs } from '@/components/ContactEmailjs';
// import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <NavBar/>
      <Banner/>
      <About/>
      <Tours/>
    </main>
  )
}
