import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataError } from '../../actions';
import ReactPhoneInput from 'react-phone-input-2';
import WithDbService from './../../components/hoc/withService';
import { validateEmail, validatePhone } from '../../utils/utils';
import checked from './img/checked.svg';

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
      name,
      validName,
      email,
      validEmail,
      phone,
      validPhone,
      message,
      validMessage
    } = this.state;
    if (
      phone.length > 0 &&
      validPhone &&
      validName &&
      validEmail &&
      validMessage
    ) {
      const data = [name, email, phone, message];
      this.props.dbService
        .saveContact(data)
        .catch(() => getDataError(this.props.dbService.errMessage));
      this.props.sent();
    }
    if (phone.length === 0 && validName && validEmail && validMessage) {
      const data = [name, email, '', message];
      this.props.dbService
        .saveContact(data)
        .catch(() => getDataError(this.props.dbService.errMessage));
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
    let nameSpanStyle = {};
    if (nameTouch && !validName) {
      nameInputStyle = {
        borderColor: 'crimson'
      };
      nameSpanStyle = {
        display: 'none'
      };
    } else if (validName) {
      nameInputStyle = {
        borderColor: '#6AC259'
      };
      nameSpanStyle = {
        display: 'inline-block'
      };
    }

    let emailInputStyle = {};
    let emailSpanStyle = {};
    if (emailTouch && !validEmail) {
      emailInputStyle = {
        borderColor: 'crimson'
      };
      emailSpanStyle = {
        display: 'none'
      };
    } else if (validEmail) {
      emailInputStyle = {
        borderColor: '#6AC259'
      };
      emailSpanStyle = {
        display: 'inline-block'
      };
    }

    let phoneInputStyle = {
      outline: 'none'
    };
    let phoneSpanStyle = {};
    if (phoneTouch && !validPhone) {
      phoneInputStyle = {
        ...phoneInputStyle,
        borderColor: 'crimson'
      };
      phoneSpanStyle = {
        display: 'none'
      };
    } else if (validPhone) {
      phoneInputStyle = {
        ...phoneInputStyle,
        borderColor: '#6AC259'
      };
      phoneSpanStyle = {
        display: 'inline-block'
      };
    }
    let messageInputStyle = {};
    let messageSpanStyle = {};
    if (messageTouch && !validMessage) {
      messageInputStyle = {
        borderColor: 'crimson'
      };
      messageSpanStyle = {
        display: 'none'
      };
    } else if (validMessage) {
      messageInputStyle = {
        borderColor: '#6AC259'
      };
      messageSpanStyle = {
        display: 'inline-block'
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
            <img
              className="checked"
              src={checked}
              alt="checked"
              style={nameSpanStyle}
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
            <img
              className="checked"
              src={checked}
              alt="checked"
              style={emailSpanStyle}
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
            <img
              className="checked"
              src={checked}
              alt="checked"
              style={phoneSpanStyle}
            />
          </div>

          <div className="subtitle message">
            <span className="messageSpan">
              Your message<span className="star">*</span>
            </span>
            <img
              className="checked"
              src={checked}
              alt="checked"
              style={messageSpanStyle}
            />
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
export default WithDbService()(
  connect(
    undefined,
    { getDataError }
  )(ContactForm)
);
