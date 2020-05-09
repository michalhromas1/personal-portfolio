import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import Name from "./../../images/svg/name.svg"
import Person from "./../../images/svg/person.svg"
import Dot from "./../../images/svg/dot.svg"

const Hero = () => {
  const intl = useIntl()

  return (
    <section className="hero container" id="hero">
      <div className="hero__content">
        <h1 className="main-title hero__title">
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
            ></div>
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

        <div className="hero__button-wrapper">
          <a href="#" className="hero__button btn btn--hero smooth-scroll">
            {intl.formatMessage({ id: "hero.cta" })}
          </a>
        </div>
      </div>

      <Link
        title={intl.formatMessage({ id: "hero.learn-more--title" })}
        className="hero__learn-more learn-more smooth-scroll"
        to="/#about"
      >
        <div className="learn-more__line-wrapper">
          <div className="learn-more__line"></div>
        </div>
        <div className="learn-more__line-wrapper">
          <div className="learn-more__line"></div>
        </div>
      </Link>
    </section>
  )
}

export default Hero
