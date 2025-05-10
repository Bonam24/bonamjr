"use client"

import { Box } from "@mui/material"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Leadership from "@/components/Leadership"
import Awards from "@/components/Awards"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Leadership />
      <Awards />
      <Contact />
      <Footer />
    </Box>
  )
}
