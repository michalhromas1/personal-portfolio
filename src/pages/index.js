import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import "../styles/styles.scss"
//import SEO from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <div>
      {/* <SEO title="Home" /> */}
      {intl.formatMessage({ id: "nav.contact" })}
      <div
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "about.desc" }),
        }}
      ></div>
    </div>
  )
}

export default IndexPage
