import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Name from "./../../images/svg/name.svg"
import Person from "./../../images/svg/person.svg"

const Hero = () => {
  const intl = useIntl()

  return (
    <section className="hero" id="hero">
      <div className="container">
        {/* <nav className="nav">
          <div className="nav-burger">
            <span className="nav-burger__line"></span>
            <span className="nav-burger__line"></span>
            <span className="nav-burger__line"></span>
          </div>
        </nav> */}

        <div className="hero__content">
          <h1 className="main-title">
            <div className="main-title__greeting">
              {intl.formatMessage({ id: "hero.greeting" })}
            </div>
            <div className="main-title__name-wrapper">
              <img
                alt={intl.formatMessage({ id: "hero.name--alt" })}
                className="main-title__name"
                src={Name}
              />
            </div>
            <div className="main-title__jobs">
              <div className="main-title__job main-title__job--left">
                {intl.formatMessage({ id: "hero.job.developer" })}
              </div>
              <div className="main-title__jobs-divider"></div>
              <div className="main-title__job main-title__job--right">
                {intl.formatMessage({ id: "hero.job.designer" })}
              </div>
            </div>
          </h1>

          <div className="hero__person-wrapper">
            <img
              alt={intl.formatMessage({ id: "hero.person--alt" })}
              className="hero__person"
              src={Person}
            />
          </div>

          <a href="#" className="hero__button btn btn--hero">
            <span className="btn__text">
              {intl.formatMessage({ id: "hero.cta" })}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero