import React, { Component } from 'react';
import AppHeader from '../../components/appHeader/appHeader';
import AppFooter from '../../components/appFooter/appFooter';
import background from './img/contactUsBg.jpg';
import logoDark from '../../logo/Beans_logo_dark.svg';
import './contactUs.sass';
import WithDbService from './../../components/hoc/withService';
import Thanks from '../../components/thanks/thanks';
import ContactForm from '../../components/contactForm/contactForm';

class ContactUsPage extends Component {
  state = {
    sent: false
  };

  sent = () => {
    this.setState({ sent: true });
  };
  anotherMessage = () => {
    this.setState({ sent: false });
  };
  render() {
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
            {this.state.sent && <Thanks anotherMessage={this.anotherMessage} />}
            {!this.state.sent && <ContactForm sent={this.sent} />}
          </div>
        </section>
        <AppFooter />
      </>
    );
  }
}

export default WithDbService()(ContactUsPage);
