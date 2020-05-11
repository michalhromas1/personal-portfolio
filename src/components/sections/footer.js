import React from "react"
import FooterCallout from "./footer/footer-callout"
import FooterMain from "./footer/footer-main"
import FooterCopy from "./footer/footer-copy"

const Footer = () => {
  return (
    <footer className="main-footer" id="main-footer">
      <FooterCallout />
      <FooterMain />
      <FooterCopy />
    </footer>
  )
}

export default Footer
