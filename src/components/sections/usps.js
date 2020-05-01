import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Rocket from "./../../images/svg/rocket.svg"
import Bulb from "./../../images/svg/bulb.svg"
import Smartphone from "./../../images/svg/smartphone.svg"
import Usp from "./usp"

const Usps = () => {
  const intl = useIntl()
  const icons = [Rocket, Bulb, Smartphone]
  const usps = []

  icons.forEach((icon, idx) => {
    const transPath = `usps.${idx + 1}`
    const usp = {
      icon,
      heading: intl.formatMessage({ id: `${transPath}.heading` }),
      desc: intl.formatMessage({ id: `${transPath}.desc` }),
      iconAlt: intl.formatMessage({ id: `${transPath}.icon--alt` }),
    }
    usps.push(usp)
  })

  return (
    <section className="usps" id="usps">
      <div className="container container--narrow">
        <h2 className="usps__title">
          {intl.formatMessage({ id: "usps.heading" })}
        </h2>
        <div className="grid usps__grid">
          {usps.map((usp, idx) => (
            <Usp usp={usp} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Usps
