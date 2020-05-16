import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import SkillsBg from "./../../images/svg/skills/skills-bg.svg"
import ReactLogo from "./../../images/svg/skills/react.svg"
import GatsbyLogo from "./../../images/svg/skills/gatsby.svg"
import TypescriptLogo from "./../../images/svg/skills/typescript.svg"
import HtmlLogo from "./../../images/svg/skills/html.svg"
import GitLogo from "./../../images/svg/skills/git.svg"
import AngularLogo from "./../../images/svg/skills/angular.svg"
import SassLogo from "./../../images/svg/skills/sass.svg"
import XdLogo from "./../../images/svg/skills/xd.svg"
import NetlifyLogo from "./../../images/svg/skills/netlify.svg"

const Skills = () => {
  const intl = useIntl()

  return (
    <section className="skills" id="skills">
      <h2 className="sr-only">
        {intl.formatMessage({ id: "skills.heading" })}
      </h2>
      <div
        className="skills__content-wrapper"
        style={{ backgroundImage: `url("${SkillsBg}")` }}
      >
        <div className="skills__content">
          <div className="skills__col skills__col--1">
            <div className="skills__item skills__item--react">
              <img
                alt={intl.formatMessage({ id: "skills.react--alt" })}
                className="skills__item-image"
                src={ReactLogo}
              />
            </div>

            <div className="skills__item skills__item--gatsby">
              <img
                alt={intl.formatMessage({ id: "skills.gatsby--alt" })}
                className="skills__item-image"
                src={GatsbyLogo}
              />
            </div>

            <div className="skills__item skills__item--typescript">
              <img
                alt={intl.formatMessage({ id: "skills.typescript--alt" })}
                className="skills__item-image"
                src={TypescriptLogo}
              />
            </div>
          </div>

          <div className="skills__col skills__col--2">
            <div className="skills__item skills__item--html">
              <img
                alt={intl.formatMessage({ id: "skills.html--alt" })}
                className="skills__item-image"
                src={HtmlLogo}
              />
            </div>

            <div className="skills__item skills__item--git">
              <img
                alt={intl.formatMessage({ id: "skills.git--alt" })}
                className="skills__item-image"
                src={GitLogo}
              />
            </div>
          </div>

          <div className="skills__col skills__col--3">
            <div className="skills__item skills__item--angular">
              <img
                alt={intl.formatMessage({ id: "skills.angular--alt" })}
                className="skills__item-image"
                src={AngularLogo}
              />
            </div>

            <div className="skills__items-row">
              <div className="skills__item skills__item--sass">
                <img
                  alt={intl.formatMessage({ id: "skills.sass--alt" })}
                  className="skills__item-image"
                  src={SassLogo}
                />
              </div>

              <div className="skills__item skills__item--xd">
                <img
                  alt={intl.formatMessage({ id: "skills.xd--alt" })}
                  className="skills__item-image"
                  src={XdLogo}
                />
              </div>
            </div>

            <div className="skills__item skills__item--netlify">
              <img
                alt={intl.formatMessage({ id: "skills.netlify--alt" })}
                className="skills__item-image"
                src={NetlifyLogo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
