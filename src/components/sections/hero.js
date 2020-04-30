import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Name from "./../../images/svg/name.svg"
import Person from "./../../images/svg/person.svg"
import Dot from "./../../images/svg/dot.svg"

const Hero = () => {
  const intl = useIntl()

  return (
    <section className="hero container" id="hero">
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
            <div
              className="main-title__jobs-divider"
              style={{ backgroundImage: `url('${Dot}')` }}
            >
              {/* <img
                  className="main-title__jobs-divider"
                  alt={intl.formatMessage({ id: "hero.job.divider--alt" })}
                  src={Dot}
                /> */}
            </div>
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
          {intl.formatMessage({ id: "hero.cta" })}
        </a>
      </div>
    </section>
  )
}

export default Hero
