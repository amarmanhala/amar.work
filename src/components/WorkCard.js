import React from "react"
import H3 from "./designSystem/H3"
import P from "./designSystem/P"
import Link from "./designSystem/Link"

const WorkCard = props => {
  return (
    <>
      <H3>
        <Link
          fontWeight={600}
          href="https://amarmanhala.github.io/JustExcel/"
          target="_blank"
          textDecoration="underline"
        >
          {props.projectTitle}
        </Link>
      </H3>
      <P>{props.projectDescription}</P>
    </>
  )
}
export default WorkCard
