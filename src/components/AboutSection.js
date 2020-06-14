import * as React from "react"
import SectionWrapper from "./designSystem/SectionWrapper"
import AboutSectionInnerWrapper from "./designSystem/AboutSectionInnerWrapper"
import P from "./designSystem/P"
import SectionHeader from "./SectionHeader"
import Link from "./designSystem/Link"

const AboutSection = () => {
  return (
    <div id="about">
      <SectionHeader title="About me" />
      <SectionWrapper>
        <AboutSectionInnerWrapper>
          <P>
            I born and raised in India. After studies (Masters of computer
            applications), i moved to Canada for higher studies.
          </P>
          <P>
            Involved in the lifecycle of a product - from visual design, design
            systems to build maintainable, fast and accessible interfaces.
          </P>

          <P>I spend my time writing code, design, and tweeting.</P>

          <P>
            Outside of work, I like to read books and i’m a milk tea enthusiast
            ☕.️️
          </P>
          <P>
            You can take a look at my <Link href="https://www.dropbox.com/s/pj0k5jycisyn25w/amarpreet_resume.pdf?dl=0" target="_blank" textDecoration="underline">resume</Link>, if you’re interested in the
            details.
          </P>
        </AboutSectionInnerWrapper>
      </SectionWrapper>
    </div>
  )
}
export default AboutSection
