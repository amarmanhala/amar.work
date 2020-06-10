import React from "react"
import HeroCover from "./designSystem/HeroCover"
import H1 from "./designSystem/H1"
import H2 from "./designSystem/H2"
import HeroCoverInner from "./designSystem/HeroCoverInner"

const Cover = () => {
  return (
    <HeroCover>
      <HeroCoverInner>
        <H1>Hey, I’m Amar.</H1>
        <H2>
          I’m a javascript developer based in Toronto, passionate about bridging the gap between design and code.
        </H2>
      </HeroCoverInner>
    </HeroCover>
  )
}
export default Cover
