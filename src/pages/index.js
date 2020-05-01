import React from "react"
import Hero from "./../components/sections/hero"
import About from "./../components/sections/about"
import Usps from "./../components/sections/usps"
import Skills from "./../components/sections/skills"
import "../styles/styles.scss"
//import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <div>
      {/* <SEO title="Home" /> */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "about.desc" }),
        }}
      ></div> */}
      <Hero />
      <About />
      <Usps />
      <Skills />
    </div>
  )
}

export default IndexPage
