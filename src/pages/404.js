import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import "../styles/styles.scss"
import SEO from "../components/seo"
import FooterCopy from "../components/sections/footer/footer-copy"

const NotFoundPage = () => {
  const intl = useIntl()

  if (typeof window !== "undefined") {
    require("smooth-scroll")(".smooth-scroll")
  }

  return (
    <div className="page-404">
      <div className="container page-404__main-content">
        <SEO title="404 | Michal Hromas | Web Developer & Designer" />
        <h1
          className="page-404__title"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "error.code.404" }),
          }}
        ></h1>

        <Link
          title={intl.formatMessage({ id: "error.btn--go-home.title" })}
          className="page-404__button btn"
          to="/"
        >
          {intl.formatMessage({ id: "error.btn--go-home.text" })}
        </Link>
      </div>

      <footer className="main-footer" id="main-footer">
        <FooterCopy disableAttribution={true} />
      </footer>
    </div>
  )
}

export default NotFoundPage
