import * as React from "react"
import HeroSection from '../components/hero-section'
import AboutSection from '../components/about-section'
import LogoSection from '../components/logo-section.js'
import ProjectSection from '../components/project-section.js'
import MessageSection from '../components/message-section.js'
import FooterSection from '../components/footer-section.js'

const IndexPage = () => {
  return (
    <main>
      {/* <HeaderSection /> */}
      <HeroSection />
      <AboutSection />
      <LogoSection />
      <ProjectSection />
      <MessageSection />
      <FooterSection />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Project Renew</title>
