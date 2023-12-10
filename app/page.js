import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Service from './components/Service'
import About from './components/About'
import Footer from './components/Footer'

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
