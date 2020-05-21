import React, { Component } from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Notification from "./../../notification"

class FooterForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    submitted: false,
    notification: {
      success: false,
      error: false,
    },
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => this.notify())
      .catch(() => this.notify(true))
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  notify = (isError = false) => {
    const notification = {
      success: !isError,
      error: isError,
    }
    this.setState({ submitted: true, notification })
  }

  render() {
    const { intl } = this.props
    const { name, email, phone, message, notification } = this.state
    const { success, error } = notification
    return (
      <div>
        {success && (
          <Notification
            notification={{
              text: intl.formatMessage({
                id: `notifications.form.success`,
              }),
              type: "success",
            }}
          />
        )}
        {error && (
          <Notification
            notification={{
              text: intl.formatMessage({
                id: `notifications.form.error`,
              }),
              type: "error",
            }}
          />
        )}
        <form
          data-netlify="true"
          className="footer-form"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="footer-form__control-wrapper footer-form__control-wrapper--name">
            <label htmlFor="name" className="sr-only">
              {intl.formatMessage({ id: "footer.main.form.name" })}
            </label>
            <input
              className="footer-form__control footer-form__required"
              type="text"
              placeholder={intl.formatMessage({ id: "footer.main.form.name" })}
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="footer-form__control-wrapper footer-form__control-wrapper--email footer-form__control-wrapper--required">
            <label htmlFor="email" className="sr-only">
              {intl.formatMessage({ id: "footer.main.form.email" })}
            </label>
            <input
              className="footer-form__control"
              type="email"
              placeholder={intl.formatMessage({ id: "footer.main.form.email" })}
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="footer-form__control-wrapper footer-form__control-wrapper--phone">
            <label htmlFor="phone" className="sr-only">
              {intl.formatMessage({ id: "footer.main.form.phone" })}
            </label>
            <input
              className="footer-form__control"
              type="text"
              placeholder={intl.formatMessage({ id: "footer.main.form.phone" })}
              name="phone"
              id="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="footer-form__control-wrapper footer-form__control-wrapper--message footer-form__control-wrapper--required">
            <label htmlFor="message" className="sr-only">
              {intl.formatMessage({ id: "footer.main.form.message" })}
            </label>
            <textarea
              className="footer-form__control"
              placeholder={intl.formatMessage({
                id: "footer.main.form.message",
              })}
              name="message"
              id="message"
              value={message}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="footer-form__control-wrapper footer-form__control-wrapper--submit">
            <button
              className="footer-form__control--submit btn"
              type="submit"
              title={intl.formatMessage({
                id: "footer.main.form.submit.title",
              })}
            >
              {intl.formatMessage({ id: "footer.main.form.submit.text" })}
            </button>
          </div>
          <p className="footer-form__required-desc">
            <span className="footer-form__required-symbol">* </span>
            {intl.formatMessage({ id: "footer.main.form.required" })}
          </p>
        </form>
      </div>
    )
  }
}

export default injectIntl(FooterForm)
