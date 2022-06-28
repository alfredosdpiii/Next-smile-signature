import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import Header from "../components/Header";
import SideNav from "../components/SideNav"
import Hero from "../components/Hero"
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <Layout pageTitle="Smile Signature.">
      <Header />
      <SideNav />
      <Hero />
      <div className="wrapper">
        <About className="under" />
      </div>
      <Services className="over"/>
      <Contact />
    </Layout>
  )
}
