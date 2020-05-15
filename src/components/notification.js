import React, { Component } from "react"
import PropTypes from "prop-types"

class Notification extends Component {
  state = {
    hide: false,
  }

  hide = () => {
    this.setState({ hide: true })
  }

  render() {
    const { hide } = this.state
    const { text, type } = this.props.notification
    let classList = "notification"
    classList += type ? ` notification--${type}` : ""
    classList += hide ? " notification--hide" : ""
    return (
      <div className={classList}>
        <p
          className="notification__text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></p>
        <div className="notification__close" onClick={this.hide}>
          <div className="notification__close-line"></div>
          <div className="notification__close-line"></div>
        </div>
      </div>
    )
  }
}

Notification.propTypes = {
  notification: PropTypes.exact({
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
  }).isRequired,
}

export default Notification
