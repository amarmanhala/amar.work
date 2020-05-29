import React from "react"
import SEO from "../components/seo"
import Header from '../components/Header'
import P from "../components/designSystem/P"
import Image404 from "../images/404-image.png"
import { Link } from "gatsby"

const NotFoundPage = (data) => (
  <>
    <SEO title="404: Not found" />
    <Header />
    <img src={Image404} width="500" height="500" />
   <P>The page you tried to access cannot be found. Maybe try going <Link to="/">home</Link>.</P>
  </>
)
export default NotFoundPage
