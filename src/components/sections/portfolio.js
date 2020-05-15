import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import RedCross from "./../../images/svg/portfolio/red-cross.svg"
import Biotika from "./../../images/svg/portfolio/biotika.svg"
import CVB from "./../../images/svg/portfolio/cvb.svg"
import Fidoo from "./../../images/svg/portfolio/fidoo.svg"
import Luxatia from "./../../images/svg/portfolio/luxatia.svg"
import Inspishop from "./../../images/svg/portfolio/inspishop.svg"

const Portfolio = () => {
  const intl = useIntl()

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="portfolio__title">
          {intl.formatMessage({ id: "portfolio.heading" })}
        </h2>
        <div className="grid portfolio__grid">
          <div className="portfolio__col">
            <div className="portfolio__logo-link-wrapper">
              <a
                href="https://daruj.cervenykriz.eu"
                className="portfolio__logo-link portfolio__logo-link--red-cross"
                target="_blank"
                rel="noopener noreferrer"
                title={intl.formatMessage({ id: `portfolio.red-cross.title` })}
              >
                <img
                  alt={intl.formatMessage({ id: `portfolio.red-cross.alt` })}
                  className="portfolio__logo"
                  src={RedCross}
                />
              </a>
            </div>
            <div className="portfolio__logo-link-wrapper">
              <a
                href="https://www.biotika.net"
                className="portfolio__logo-link portfolio__logo-link--biotika"
                target="_blank"
                rel="noopener noreferrer"
                title={intl.formatMessage({ id: `portfolio.biotika.title` })}
              >
                <img
                  alt={intl.formatMessage({ id: `portfolio.biotika.alt` })}
                  className="portfolio__logo"
                  src={Biotika}
                />
              </a>
            </div>
          </div>
          <div className="portfolio__col">
            <div className="portfolio__logo-link-wrapper">
              <a
                href="https://www.ventilatory-shop.cz/"
                className="portfolio__logo-link portfolio__logo-link--cvb"
                target="_blank"
                rel="noopener noreferrer"
                title={intl.formatMessage({ id: `portfolio.cvb.title` })}
              >
                <img
                  alt={intl.formatMessage({ id: `portfolio.cvb.alt` })}
                  className="portfolio__logo"
                  src={CVB}
                />
              </a>
            </div>
            <div className="portfolio__logo-link-wrapper">
              <a
                href="https://www.fidoo.com"
                className="portfolio__logo-link portfolio__logo-link--fidoo"
                target="_blank"
                rel="noopener noreferrer"
                title={intl.formatMessage({ id: `portfolio.fidoo.title` })}
              >
                <img
                  alt={intl.formatMessage({ id: `portfolio.fidoo.alt` })}
                  className="portfolio__logo"
                  src={Fidoo}
                />
              </a>
            </div>
          </div>
          <div className="portfolio__col">
            <div className="portfolio__logo-link-wrapper">
              <a
                href="https://www.luxatiainternational.com"
                className="portfolio__logo-link portfolio__logo-link--luxatia"
                target="_blank"
                rel="noopener noreferrer"
                title={intl.formatMessage({ id: `portfolio.luxatia.title` })}
              >
                <img
                  alt={intl.formatMessage({ id: `portfolio.luxatia.alt` })}
                  className="portfolio__logo"
                  src={Luxatia}
                />
              </a>
            </div>
            <div className="portfolio__logo-link-wrapper">
              <a
                href="https://www.inspishop.cz"
                className="portfolio__logo-link portfolio__logo-link--inspishop"
                target="_blank"
                rel="noopener noreferrer"
                title={intl.formatMessage({ id: `portfolio.inspishop.title` })}
              >
                <img
                  alt={intl.formatMessage({ id: `portfolio.inspishop.alt` })}
                  className="portfolio__logo"
                  src={Inspishop}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
