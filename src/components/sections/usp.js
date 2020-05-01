import React from "react"
import PropTypes from "prop-types"

const Usp = ({ usp }) => {
  const { icon, heading, desc, iconAlt } = usp
  return (
    <div className="usp">
      <div className="usp__icon-wrapper">
        <img alt={iconAlt} className="usp__icon" src={icon} />
      </div>
      <h3 className="usp__heading">{heading}</h3>
      <p className="usp__desc">{desc}</p>
    </div>
  )
}

Usp.propTypes = {
  usp: PropTypes.exact({
    icon: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
  }).isRequired,
}

export default Usp
