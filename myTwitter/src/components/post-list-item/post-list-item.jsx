import React, { Component } from "react";
import ModalDialog from "../modal-dialog/modal-dialog";
import "./post-list-item.css";

export default class PostListItem extends Component {
  state = {
    showEidtBox: false,
    tempLabel: ""
  };
  componentDidMount() {
    this.setState({
      tempLabel: this.props.label
    });
  }

  onEditClicked = () => {
    this.setState({
      showEidtBox: true,
      tempLabel: this.props.label
    });
  };
  onCancelClicked = () => {
    this.setState({
      showEidtBox: false
    });
  };
  onSaveClicked = () => {
    let newLabel = this.state.tempLabel.trim();
    if (newLabel.length > 0) {
      this.props.onSaveEditedItem(newLabel);
      this.setState({
        showEidtBox: false
      });
    } else {
      this.setState({
        showEidtBox: false
      });
    }
  };
  onInputChange = e => {
    this.setState({
      tempLabel: e.target.value
    });
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.onSaveClicked();
    }
  };

  render() {
    const { label, important, like, onDelete, onToggleImportant, onToggleLike } = this.props;
    const { showEidtBox, tempLabel } = this.state;
    const currentDate = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) classNames += " important";
    if (like) classNames += " like";

    if (showEidtBox) {
      return (
        <form className="editForm d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            value={tempLabel}
            onChange={this.onInputChange}
            onKeyDown={this.handleKeyDown}
          />
          <button className="btn btn-outline-primary" type="button" title="Save" onClick={this.onSaveClicked}>
            <i className="fa fa-check" />
          </button>
          <button className="btn btn-outline-secondary" type="button" onClick={this.onCancelClicked} title="Cancel">
            <i className="fa fa-times" />
          </button>
        </form>
      );
    } else {
      return (
        <li className={classNames}>
          <div className="flex-grow-1">
            <span className="app-list-item-label" onClick={onToggleLike}>
              {label}
            </span>
            <span className="app-list-item-date">{`${currentDate} - ${time}`}</span>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn-edit btn-sm" onClick={this.onEditClicked} title="Edit post">
              <i className="fa fa-edit" />
            </button>
            <button type="button" className="btn-star btn-sm" onClick={onToggleImportant} title="Mark as important">
              <i className="fa fa-star" />
            </button>
            <ModalDialog
              buttonLabel={<i className="fa fa-trash-o" />}
              headerText="Удаление записи"
              bodyText={`Вы действительно хотите удалить запись: ${label}?`}
              onApply={onDelete}
              btnClassNames="btn-show-delete-modal"
            />
            <i className="fa fa-heart" />
          </div>
        </li>
      );
    }
  }
}
