import React, { Component } from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import { validateEmail, validatePhone } from '../../utils/utils';

class ContactForm extends Component {
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
    validMessage: false,
    messageTouch: false
  };

  emailInserted = e => {
    const email = e.target.value;
    if (validateEmail(email)) {
      this.setState({ email, validEmail: true });
    } else {
      this.setState({ email, emailTouch: true, validEmail: false });
    }
  };
  phoneInserted = value => {
    const phone = value;
    if (validatePhone(phone)) {
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

  messageInserted = e => {
    const message = e.target.value;
    this.setState({
      message,
      validMessage: 2 < message.length ? true : false,
      messageTouch: true
    });
  };

  submitClicked = e => {
    e.preventDefault();
    const {
      validName,
      validEmail,
      phone,
      validPhone,
      validMessage
    } = this.state;
    if (
      phone.length > 0 &&
      validPhone &&
      validName &&
      validEmail &&
      validMessage
    ) {
      this.props.sent();
    }
    if (phone.length === 0 && validName && validEmail && validMessage) {
      this.props.sent();
    }
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
      validMessage,
      messageTouch
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
    let messageInputStyle = {};
    if (messageTouch && !validMessage) {
      messageInputStyle = {
        borderColor: 'crimson'
      };
    } else if (validMessage) {
      messageInputStyle = {
        borderColor: 'green'
      };
    }
    return (
      <div className="contact">
        <form className="contact__form">
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
            <ReactPhoneInput
              defaultCountry="ru"
              onlyCountries={['ru']}
              value={phone}
              onChange={this.phoneInserted}
              inputClass="contact__form-input"
              inputStyle={phoneInputStyle}
            />
          </div>

          <div className="subtitle">
            Your message<span className="star">*</span>
          </div>
          <textarea
            cols="30"
            rows="10"
            style={messageInputStyle}
            value={message}
            onChange={this.messageInserted}
          />
          <button
            type="submit"
            className="btnSendUs"
            onClick={this.submitClicked}
            disabled={validEmail && validName && validMessage ? false : true}
          >
            Send us
          </button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
