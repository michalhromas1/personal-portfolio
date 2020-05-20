import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const FooterForm = () => {
  const intl = useIntl()
  return (
    <form
      className="footer-form"
      data-netlify="true"
      name="contact"
      method="POST"
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
        />
      </div>
      <div className="footer-form__control-wrapper footer-form__control-wrapper--message footer-form__control-wrapper--required">
        <label htmlFor="message" className="sr-only">
          {intl.formatMessage({ id: "footer.main.form.message" })}
        </label>
        <textarea
          className="footer-form__control"
          name="message"
          id="message"
          placeholder={intl.formatMessage({ id: "footer.main.form.message" })}
        ></textarea>
      </div>
      <div className="footer-form__control-wrapper footer-form__control-wrapper--submit">
        <button
          className="footer-form__control--submit btn"
          type="submit"
          title={intl.formatMessage({ id: "footer.main.form.submit.title" })}
        >
          {intl.formatMessage({ id: "footer.main.form.submit.text" })}
        </button>
      </div>
      <p className="footer-form__required-desc">
        <span className="footer-form__required-symbol">* </span>
        {intl.formatMessage({ id: "footer.main.form.required" })}
      </p>
    </form>
  )
}

export default FooterForm
