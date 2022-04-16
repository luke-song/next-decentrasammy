import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Masthead from '../components/masthead'
import Aboutus from '../components/aboutus'
import Skills from '../components/skills'
import Works from '../components/works'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DecentraSammy</title>
        <meta name="description" content="Prototype of Decentra Sammy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead/>
      <Aboutus/>
      <Skills/>
      <Works/>
      <Aboutus/>
    </div>
  )
}

export default Home
