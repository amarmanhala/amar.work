import React from "react"
import FooterWrapper from "./designSystem/FooterWrapper"
import Caption from "./designSystem/Caption"
import Link from "./designSystem/Link"
import P from "./designSystem/P"

function getCurrentDay() {
  let day = new Date()
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  return dayNames[day.getDay()]
}

const Footer = () => {
  return (
    <FooterWrapper>
      <Caption size="16px">
        Designed in{" "}
        <Link
          textDecoration="underline"
          href="https://figma.com"
          target="_blank"
          size={16}
        >
          Figma
        </Link>
        , coded in{" "}
        <Link textDecoration="underline" href="https://reactjs.org/" size={16}>
          React
        </Link>{" "}
        by Amarpreet singh.
      </Caption>
      <P>Happy {getCurrentDay()}</P>
    </FooterWrapper>
  )
}
export default Footer
