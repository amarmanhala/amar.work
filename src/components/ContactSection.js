import * as React from "react"
import SectionWrapper from "./designSystem/SectionWrapper"
import P from "./designSystem/P"
import SectionHeader from "./SectionHeader"
import H3 from "./designSystem/H3"
import Link from "./designSystem/Link"

const ContactSection = () => {
    const InnerWrapper = {
        marginBottom: "22px",
    }
  return (
    <div id="contact">
      <SectionHeader title="Feel free to say Hi!" />
      <SectionWrapper>
   <div style={InnerWrapper}>
        <H3>Email</H3>
            <Link href="mailto: amar.manhala@gmail.com" textDecoration="underline">amar.manhala@gmail.com</Link>
   </div>
  <div style={InnerWrapper}>
        <H3>Github</H3>
            <Link href="https://github.com/amarmanhala" target="_blank" textDecoration="underline" rel="noopener">@amarmanhala</Link>
  </div>
   <div style={InnerWrapper}>
        <H3>Twitter</H3>
        <Link href="https://twitter.com/AmarManhala" target="_blank" textDecoration="underline" rel="noopener">@amarmanhala</Link>
   </div>
      </SectionWrapper>
    </div>
  )
}
export default ContactSection
