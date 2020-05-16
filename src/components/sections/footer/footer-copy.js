import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const FooterCopy = () => {
  const intl = useIntl()
  const year = new Date().getFullYear()
  return (
    <div className="footer-copy">
      <div className="container">
        <div className="footer-copy__content">
          <small
            className="footer-copy__attributions"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: `footer.copy.attributions` }),
            }}
          ></small>
          <small className="footer-copy__text">
            Michal Hromas &copy; {year}
          </small>
        </div>
      </div>
    </div>
  )
}

export default FooterCopy
