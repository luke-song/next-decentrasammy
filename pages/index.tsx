import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Masthead from '../components/masthead'
import Aboutus from '../components/aboutus'
import Skills from '../components/skills'
import Works from '../components/works'
import Typing from '../components/typing'
import NoSsr from '../components/no-ssr'
import { Canvas } from '@react-three/fiber'
import styled from '@emotion/styled'
import { Suspense } from 'react'
import Form from '../components/form'

const CanvasContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 500px;
`;


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
      <NoSsr>
      <CanvasContainer>
      <Canvas fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense><Typing/></Suspense>
      </Canvas>
    </CanvasContainer>
      </NoSsr>
      <Form/>
    </div>
  )
}

export default Home
