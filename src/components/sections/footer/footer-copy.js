import React from "react"

const FooterCopy = () => {
  const year = new Date().getFullYear()
  return (
    <div className="footer-copy">
      <div className="container">
        <small className="footer-copy__text">Michal Hromas &copy; {year}</small>
      </div>
    </div>
  )
}

export default FooterCopy
