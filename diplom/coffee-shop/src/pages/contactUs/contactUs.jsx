import React, { Component } from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import AppHeader from '../../components/appHeader/appHeader';
import AppFooter from '../../components/appFooter/appFooter';
import background from './img/contactUsBg.jpg';
import logoDark from '../../logo/Beans_logo_dark.svg';
import './contactUs.sass';
import WithDbService from './../../components/hoc/withService';

class ContactUsPage extends Component {
  state = {
    name: '',
    validName: false,
    nameTouch: false,
    email: '',
    validEmail: false,
    emailTouch: false,
    phone: '',
    validPhone: false,
    phoneTouch: false,
    message: '',
    validMessage: false
  };

  validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  validatePhone = phone => {
    console.log('phone', phone);
    return false;
  };

  emailInserted = e => {
    const email = e.target.value;
    if (this.validateEmail(email)) {
      this.setState({ email, validEmail: true });
    } else {
      this.setState({ email, emailTouch: true, validEmail: false });
    }
  };
  phoneInserted = e => {
    const phone = e.target.value;
    if (this.validatePhone(phone)) {
      this.setState({ phone, validPhone: true });
    } else {
      this.setState({ phone, phoneTouch: true, validPhone: false });
    }
  };
  phone2Inserted = value => {
    const phone = value;
    if (this.validatePhone(phone)) {
      this.setState({ phone, validPhone: true });
    } else {
      this.setState({ phone, phoneTouch: true, validPhone: false });
    }
  };

  nameInserted = e => {
    const name = e.target.value;
    this.setState({
      name,
      validName: 2 < name.length && name.length < 21 ? true : false,
      nameTouch: true
    });
  };

  render() {
    const {
      name,
      validName,
      nameTouch,
      email,
      validEmail,
      emailTouch,
      phone,
      validPhone,
      phoneTouch,
      message,
      validMessage
    } = this.state;

    let nameInputStyle = {};
    if (nameTouch && !validName) {
      nameInputStyle = {
        borderColor: 'crimson'
      };
    } else if (validName) {
      nameInputStyle = {
        borderColor: 'green'
      };
    }

    let emailInputStyle = {};
    if (emailTouch && !validEmail) {
      emailInputStyle = {
        borderColor: 'crimson'
      };
    } else if (validEmail) {
      emailInputStyle = {
        borderColor: 'green'
      };
    }

    let phoneInputStyle = {
      outline: 'none'
    };
    if (phoneTouch && !validPhone) {
      phoneInputStyle = {
        ...phoneInputStyle,
        borderColor: 'crimson'
      };
    } else if (validPhone) {
      phoneInputStyle = {
        ...phoneInputStyle,
        borderColor: 'green'
      };
    }

    return (
      <>
        <div
          className="banner"
          style={{
            background: `url(${background}) center center/cover no-repeat`
          }}
        >
          <div className="container">
            <AppHeader />
            <h1 className="title-big">Contact us</h1>
          </div>
        </div>
        <section className="shop">
          <div className="container">
            <div className="title">Tell us about your tastes</div>
            <img className="beanslogo" src={logoDark} alt="Beans logo" />
            <div className="contact">
              <form action="#" className="contact__form">
                <div className="name">
                  <label className="contact__form-label" htmlFor="userName">
                    Name<span className="star">*</span>
                  </label>
                  <input
                    id="userName"
                    type="text"
                    className="contact__form-input"
                    value={name}
                    onChange={this.nameInserted}
                    style={nameInputStyle}
                  />
                </div>
                <div className="email">
                  <label className="contact__form-label" htmlFor="email">
                    E-mail<span className="star">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="contact__form-input"
                    value={email}
                    onChange={this.emailInserted}
                    style={emailInputStyle}
                  />
                </div>
                <div className="phone">
                  <label className="contact__form-label" htmlFor="phone">
                    Phone
                  </label>
                  {/* <input
                    id="phone"
                    type="tel"
                    placeholder="+7(___)___-____"
                    className="contact__form-input"
                    style={phoneInputStyle}
                    value={phone}
                    onChange={this.phoneInserted}
                  /> */}
                  <ReactPhoneInput
                    defaultCountry="ru"
                    onlyCountries={['ru']}
                    value={phone}
                    onChange={this.phone2Inserted}
                    // containerClass="contact__form-input"
                    inputClass="contact__form-input"
                    placeholder="+7(___)___-____"
                    inputStyle={phoneInputStyle}
                  />
                  {/* <PhoneInput
                    country="RU"
                    placeholder="Enter phone number"
                    value={this.state.phone}
                    onChange={phone => this.setState({ phone })}
                  /> */}
                </div>

                <div className="subtitle">
                  Your message<span className="star">*</span>
                </div>
                <textarea cols="30" rows="10" />
                <button type="submit" className="btnSendUs">
                  Send us
                </button>
              </form>
            </div>
          </div>
        </section>
        <AppFooter />
      </>
    );
  }
}

export default WithDbService()(ContactUsPage);
