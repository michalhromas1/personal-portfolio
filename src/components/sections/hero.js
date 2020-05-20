import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import Name from "./../../images/svg/name.svg"
import Person from "./../../images/svg/person.svg"
import Dot from "./../../images/svg/dot.svg"
import Fade from "react-reveal/Fade"

const Hero = () => {
  const intl = useIntl()
  const animationDelay = 200

  return (
    <section className="hero container" id="hero">
      <div className="hero__content">
        <Fade right cascade duration={1000} delay={animationDelay}>
          <h1 className="main-title hero__title animated">
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
        </Fade>

        <Fade left duration={2000} delay={animationDelay}>
          <div className="hero__person-wrapper animated">
            <img
              alt={intl.formatMessage({ id: "hero.person--alt" })}
              className="hero__person"
              src={Person}
            />
          </div>
        </Fade>

        <Fade right duration={2000} delay={animationDelay}>
          <div className="hero__button-wrapper animated">
            <Link
              title={intl.formatMessage({ id: "hero.cta.title" })}
              className="hero__button btn smooth-scroll"
              to="/#main-footer"
            >
              {intl.formatMessage({ id: "hero.cta.text" })}
            </Link>
          </div>
        </Fade>
      </div>

      <Link
        title={intl.formatMessage({ id: "hero.learn-more--title" })}
        className="hero__learn-more learn-more smooth-scroll"
        to="/#about"
      >
        <Fade top duration={1800} delay={animationDelay}>
          <div className="learn-more__line-wrapper animated">
            <div className="learn-more__line"></div>
          </div>
          <div className="learn-more__line-wrapper animated">
            <div className="learn-more__line"></div>
          </div>
        </Fade>
      </Link>
    </section>
  )
}

export default Hero
