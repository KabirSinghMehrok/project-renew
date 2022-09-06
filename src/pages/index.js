import * as React from "react"
import HeroSection from '../components/hero-section'
import AboutSection from '../components/about-section'
import LogoSection from '../components/logo-section.js'
import ProjectSection from '../components/project-section.js'
import FooterSection from '../components/footer-section.js'
import FormSection from "../components/form-section.js"

const IndexPage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <LogoSection />
      <ProjectSection />
      <FormSection />
      <FooterSection />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>ProjectRenew</title>
