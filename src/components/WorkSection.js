import * as React from "react"
import AboutSectionWrapper from "./designSystem/SectionWrapper"
import AboutSectionInnerWrapper from "./designSystem/AboutSectionInnerWrapper"
import SectionHeader from "./SectionHeader"
import WorkCard from "./WorkCard"
import Content from "../content/work.json"

const AboutSection = () => {
  return (
    <div id="work">
      <SectionHeader title="Projects" />
      <AboutSectionWrapper>
        <AboutSectionInnerWrapper>
          {Content.projects.map(data => {
            return (
              <WorkCard
                projectTitle={data.projectTitle}
                projectDescription={data.projectDescription}
              />
            )
          })}
        </AboutSectionInnerWrapper>
      </AboutSectionWrapper>
    </div>
  )
}
export default AboutSection
