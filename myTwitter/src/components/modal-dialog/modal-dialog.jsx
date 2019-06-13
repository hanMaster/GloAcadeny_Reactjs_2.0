import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class ModalDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const {
      buttonLabel,
      btnClassNames,
      headerText,
      bodyText,
      onApply
    } = this.props;
    return (
      <div>
        <button onClick={this.toggle} className={btnClassNames}>
          {buttonLabel}
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{headerText}</ModalHeader>
          <ModalBody>{bodyText}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onApply}>
              Ок
            </Button>{" "}
            <Button outline color="secondary" onClick={this.toggle}>
              Отмена
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
