import React from "react"
import SectionHeaderWrapper from "./designSystem/SectionHeaderWrapper"
import H2 from "./designSystem/H2"

const SectionHeader = props => {
  return (
    <SectionHeaderWrapper>
      <H2>{props.title}</H2>
    </SectionHeaderWrapper>
  )
}
export default SectionHeader
