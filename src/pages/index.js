import React from "react"
import SEO from "../components/seo"
import Header from "../components/Header"
import Cover from "../components/Cover"
import AboutSection from "../components/AboutSection"
import WorkSection from "../components/WorkSection"
import Footer from "../components/Footer"
import ContactSection from "../components/ContactSection"

const IndexPage = () => (
  <>
    <SEO />
    <Header />
    <Cover />
    <WorkSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </>
)

export default IndexPage
