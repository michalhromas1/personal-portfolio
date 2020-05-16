import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const FooterCallout = () => {
  const intl = useIntl()
  return (
    <div className="footer-callout">
      <div className="container">
        <h2 className="footer-callout__title">
          <span aria-hidden="true">
            {intl.formatMessage({ id: `footer.callout.heading` })}
          </span>
          <span className="sr-only">
            {intl.formatMessage({ id: `footer.callout.heading--sr-only` })}
          </span>
        </h2>
      </div>
    </div>
  )
}

export default FooterCallout
