import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Banner from './components/Banner'
import Service from './components/Service'
// import { Roboto } from '@next/font/google'

// const roboto = Roboto({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <About />
      <Footer />
    </>
  )
}
