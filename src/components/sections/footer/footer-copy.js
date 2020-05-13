import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const FooterCopy = () => {
  const intl = useIntl()
  return (
    <div className="footer-copy">
      <div className="container">
        <small
          className="footer-copy__text"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "footer.copy.desc" }),
          }}
        ></small>
      </div>
    </div>
  )
}

export default FooterCopy
