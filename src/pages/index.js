import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Fade from "react-reveal/Fade"
import Notification from "./../components/notification"
import Header from "./../components/sections/header"
import Hero from "./../components/sections/hero"
import About from "./../components/sections/about"
import Usps from "./../components/sections/usps"
import Skills from "./../components/sections/skills"
import Portfolio from "./../components/sections/portfolio"
import Footer from "./../components/sections/footer"
import "../styles/styles.scss"
import SEO from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  const animationDelay = 200

  if (typeof window !== "undefined") {
    require("smooth-scroll")(".smooth-scroll", {
      updateURL: false,
    })
  }

  return (
    <div className="oh">
      <SEO title="Michal Hromas | Web Developer & Designer" />
      <Notification
        notification={{
          text: intl.formatMessage({
            id: `notifications.available`,
          }),
          type: "success",
          delay: true,
        }}
      />
      <div className="landing-wrapper">
        <Header />
        <Hero />
      </div>
      <Fade bottom duration={1800} delay={animationDelay}>
        <div className="animated">
          <About />
        </div>
      </Fade>
      <Usps />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default IndexPage
