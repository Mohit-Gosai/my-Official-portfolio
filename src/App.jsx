import React from 'react'
import Navbar from './Components/Navbar'
import FloatingCanvas from './Components/FloatingCanvas'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import About from './Components/AboutSection'
import Skills from './Components/Skills'
import Projects from './Components/projects'
import Contact from './Components/Contact'
 
export default function App() {
  return (
    <>
      <Navbar />
      <FloatingCanvas />
      <div id='home'><Hero /></div>
      <div id='about'><About /></div>
      <div id='skills'><Skills /></div>
      <div id='projects'><Projects/></div>
      <div id='contact'><Contact/></div>
      <Footer />
    </>
  )
}
