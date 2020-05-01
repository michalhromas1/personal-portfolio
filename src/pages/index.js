import React from "react"
import Header from "./../components/sections/header"
import Hero from "./../components/sections/hero"
import About from "./../components/sections/about"
import Usps from "./../components/sections/usps"
import Skills from "./../components/sections/skills"
import "../styles/styles.scss"
//import SEO from "../components/seo"

const IndexPage = () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")(".smooth-scroll")
  }

  return (
    <div>
      {/* <SEO title="Home" /> */}
      <Header />
      <Hero />
      <About />
      <Usps />
      <Skills />
    </div>
  )
}

export default IndexPage
