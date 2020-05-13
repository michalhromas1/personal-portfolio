import React from "react"
import Header from "./../components/sections/header"
import Hero from "./../components/sections/hero"
import About from "./../components/sections/about"
import Usps from "./../components/sections/usps"
import Skills from "./../components/sections/skills"
import Portfolio from "./../components/sections/portfolio"
import Footer from "./../components/sections/footer"
import "../styles/styles.scss"
//import SEO from "../components/seo"

const IndexPage = () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")(".smooth-scroll")
  }

  return (
    <div>
      {/* <SEO title="Home" /> */}
      <div className="landing-wrapper">
        <Header />
        <Hero />
      </div>
      <About />
      <Usps />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default IndexPage
