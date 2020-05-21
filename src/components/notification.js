import React, { Component } from "react"
import PropTypes from "prop-types"
import { injectIntl } from "gatsby-plugin-intl"

class Notification extends Component {
  state = {
    hide: false,
  }

  hide = () => {
    this.setState({ hide: true })
  }

  render() {
    const { hide } = this.state
    const { text, type, delay } = this.props.notification
    const { intl } = this.props
    let classList = "notification"
    classList += type ? ` notification--${type}` : ""
    classList += delay ? ` notification--delay` : ""
    classList += hide ? " notification--hide" : ""
    return (
      <div className={classList}>
        <p
          className="notification__text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></p>
        <button
          className="notification__close"
          onClick={this.hide}
          title={intl.formatMessage({ id: "notifications.close--title" })}
        >
          <div className="notification__close-line"></div>
          <div className="notification__close-line"></div>
        </button>
      </div>
    )
  }
}

Notification.propTypes = {
  notification: PropTypes.exact({
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    delay: PropTypes.bool,
  }).isRequired,
}

export default injectIntl(Notification)
