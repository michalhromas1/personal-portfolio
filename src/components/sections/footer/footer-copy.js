import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"

const FooterCopy = ({ disableAttribution }) => {
  const classList = !disableAttribution
    ? "footer-copy"
    : "footer-copy footer-copy--no-attribution"
  const intl = useIntl()
  const year = new Date().getFullYear()
  return (
    <div className={classList}>
      <div className="container">
        <div className="footer-copy__content">
          {!disableAttribution && (
            <small
              className="footer-copy__attributions"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: `footer.copy.attributions` }),
              }}
            ></small>
          )}
          <small className="footer-copy__text">
            Michal Hromas &copy; {year}
          </small>
        </div>
      </div>
    </div>
  )
}

FooterCopy.propTypes = {
  disableAttribution: PropTypes.bool,
}

export default FooterCopy
