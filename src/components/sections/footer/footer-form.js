import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const FooterForm = () => {
  const intl = useIntl()
  return (
    <form className="footer-form">
      <div className="footer-form__control-wrapper footer-form__control-wrapper--name">
        <input
          className="footer-form__control"
          type="text"
          placeholder={intl.formatMessage({ id: "footer.main.form.name" })}
          name="name"
        />
      </div>
      <div className="footer-form__control-wrapper footer-form__control-wrapper--email">
        <input
          className="footer-form__control"
          type="text"
          placeholder={intl.formatMessage({ id: "footer.main.form.email" })}
          name="email"
        />
      </div>
      <div className="footer-form__control-wrapper footer-form__control-wrapper--phone">
        <input
          className="footer-form__control"
          type="text"
          placeholder={intl.formatMessage({ id: "footer.main.form.phone" })}
          name="phone"
        />
      </div>
      <div className="footer-form__control-wrapper footer-form__control-wrapper--message">
        <textarea
          className="footer-form__control"
          name="message"
          placeholder={intl.formatMessage({ id: "footer.main.form.message" })}
        ></textarea>
      </div>
      <div className="footer-form__control-wrapper footer-form__control-wrapper--submit">
        <button className="footer-form__control--submit btn" type="submit">
          {intl.formatMessage({ id: "footer.main.form.submit" })}
        </button>
      </div>
    </form>
  )
}

export default FooterForm
