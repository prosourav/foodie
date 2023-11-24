import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Banner from './components/Banner'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Footer />
    </>
  )
}
