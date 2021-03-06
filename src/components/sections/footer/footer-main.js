import React from "react"
import FooterForm from "./footer-form"
import { useIntl } from "gatsby-plugin-intl"
import Call from "./../../../images/svg/call.svg"
import Envelope from "./../../../images/svg/envelope.svg"
import Money from "./../../../images/svg/money.svg"
import LinkedIn from "./../../../images/svg/linkedin.svg"
import GitHub from "./../../../images/svg/github.svg"

const FooterMain = () => {
  const intl = useIntl()
  return (
    <div className="footer-main">
      <div className="container">
        <h3 className="footer-main__title">
          <span aria-hidden="true">
            {intl.formatMessage({ id: `footer.main.heading` })}
          </span>
          <span className="sr-only">
            {intl.formatMessage({ id: `footer.main.heading--sr-only` })}
          </span>
        </h3>
        <div className="grid footer-main__grid">
          <div className="footer-main__contacts-wrapper">
            <div className="footer-main__contacts">
              <ul className="footer-main__contacts-items">
                <li className="footer-main__contacts-item footer-main__contacts-item--phone">
                  <div className="footer-main__contacts-icon-wrapper">
                    <img
                      className="footer-main__contacts-icon"
                      src={Call}
                      alt={intl.formatMessage({
                        id: "footer.main.contacts.phone.icon--alt",
                      })}
                    />
                  </div>
                  <p
                    className="footer-main__contacts-text"
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: "footer.main.contacts.phone.text",
                      }),
                    }}
                  ></p>
                </li>
                <li className="footer-main__contacts-item footer-main__contacts-item--email">
                  <div className="footer-main__contacts-icon-wrapper">
                    <img
                      className="footer-main__contacts-icon"
                      src={Envelope}
                      alt={intl.formatMessage({
                        id: "footer.main.contacts.email.icon--alt",
                      })}
                    />
                  </div>
                  <p
                    className="footer-main__contacts-text"
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: "footer.main.contacts.email.text",
                      }),
                    }}
                  ></p>
                </li>
                <li className="footer-main__contacts-item footer-main__contacts-item--rate">
                  <div className="footer-main__contacts-icon-wrapper">
                    <img
                      className="footer-main__contacts-icon"
                      src={Money}
                      alt={intl.formatMessage({
                        id: "footer.main.contacts.rate.icon--alt",
                      })}
                    />
                  </div>
                  <p
                    className="footer-main__contacts-text"
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: "footer.main.contacts.rate.text",
                      }),
                    }}
                  ></p>
                </li>
                <li className="footer-main__contacts-item footer-main__contacts-item--github">
                  <div className="footer-main__contacts-icon-wrapper">
                    <img
                      className="footer-main__contacts-icon"
                      src={GitHub}
                      alt={intl.formatMessage({
                        id: "footer.main.contacts.github.icon--alt",
                      })}
                    />
                  </div>
                  <p
                    className="footer-main__contacts-text"
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: "footer.main.contacts.github.text",
                      }),
                    }}
                  ></p>
                </li>
                <li className="footer-main__contacts-item footer-main__contacts-item--linkedin">
                  <div className="footer-main__contacts-icon-wrapper">
                    <img
                      className="footer-main__contacts-icon"
                      src={LinkedIn}
                      alt={intl.formatMessage({
                        id: "footer.main.contacts.linkedin.icon--alt",
                      })}
                    />
                  </div>
                  <p
                    className="footer-main__contacts-text"
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: "footer.main.contacts.linkedin.text",
                      }),
                    }}
                  ></p>
                </li>
              </ul>
              <div className="footer-main__contacts-button-wrapper">
                <a
                  href={intl.formatMessage({
                    id: "footer.main.contacts.cta.href",
                  })}
                  title={intl.formatMessage({
                    id: "footer.main.contacts.cta.title",
                  })}
                  className="footer-main__contacts-button btn"
                >
                  {intl.formatMessage({ id: "footer.main.contacts.cta.text" })}
                </a>
              </div>
            </div>
          </div>
          <div className="footer-main__form-wrapper">
            <h3 className="footer-main__title footer-main__title--form">
              <span aria-hidden="true">
                {intl.formatMessage({ id: `footer.main.form.heading` })}
              </span>
              <span className="sr-only">
                {intl.formatMessage({
                  id: `footer.main.form.heading--sr-only`,
                })}
              </span>
            </h3>
            <FooterForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMain
