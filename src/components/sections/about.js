import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const About = () => {
  const intl = useIntl()

  return (
    <section className="about container" id="about">
      <p
        className="about__text"
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "about.desc" }),
        }}
      ></p>
    </section>
  )
}

export default About
