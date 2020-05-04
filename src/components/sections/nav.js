import React, { useState } from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

const Nav = () => {
  const [active, toggleMenu] = useState(false)
  const intl = useIntl()

  const urls = ["/#skills", "/#", "/#"]
  const links = []

  urls.forEach((url, idx) => {
    const transPath = `nav.${idx + 1}`
    const link = {
      url,
      text: intl.formatMessage({ id: `${transPath}` }),
    }
    links.push(link)
  })

  return (
    <nav className="main-nav" role="navigation">
      <ul className={`nav-content ${active ? "nav-content--active" : ""}`}>
        {links.map((link, idx) => (
          <li className="nav-content__item" key={idx}>
            <Link
              title={link.text}
              className="nav-content__link smooth-scroll"
              to={link.url}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <button
        role="button"
        className={`main-nav__burger nav-burger ${
          active ? "nav-burger--active" : ""
        }`}
        onClick={() => toggleMenu(!active)}
      >
        <div className="nav-burger__line"></div>
        <div className="nav-burger__line"></div>
        <div className="nav-burger__line"></div>
      </button>
    </nav>
  )
}

export default Nav