import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import Header from "../components/Header";
import SideNav from "../components/SideNav"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <Layout pageTitle="Smile Signature.">
      <Header />
      <SideNav />
      <Hero />
    </Layout>
  )
}
