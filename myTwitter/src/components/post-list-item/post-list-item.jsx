import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
  state = {
    important: false,
    like: false,
    showEidtBox: false,
    label: '',
    tempLabel: ''
  };
  componentDidMount() {
    this.setState({
      label: this.props.label,
      tempLabel: this.props.label
    });
  }
  onImportant = () => {
    this.setState({
      important: !this.state.important
    });
  };
  onLike = () => {
    this.setState({
      like: !this.state.like
    });
  };
  onEditClicked = () => {
    this.setState({
      showEidtBox: true,
      tempLabel: this.state.label
    });
  };
  onCancelClicked = () => {
    this.setState({
      showEidtBox: false
    });
  };
  onSaveClicked = () => {
    this.setState({
      showEidtBox: false,
      label: this.state.tempLabel
    });
  };
  onInputChange = e => {
    this.setState({
      tempLabel: e.target.value
    });
  };

  render() {
    const { label, important, like, showEidtBox, tempLabel } = this.state;
    const currentDate = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    let classNames = 'app-list-item d-flex justify-content-between';
    if (important) classNames += ' important';
    if (like) classNames += ' like';

    if (showEidtBox) {
      return (
        <form className="editForm d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            value={tempLabel}
            onChange={this.onInputChange}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            title="Save"
            onClick={this.onSaveClicked}
          >
            <i className="fa fa-check" />
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={this.onCancelClicked}
            title="Cancel"
          >
            <i className="fa fa-times" />
          </button>
        </form>
      );
    } else {
      return (
        <li className={classNames}>
          <div className="flex-grow-1">
            <span className="app-list-item-label" onClick={this.onLike}>
              {label}
            </span>
            <span className="app-list-item-date">{`${currentDate} - ${time}`}</span>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn-edit btn-sm"
              onClick={this.onEditClicked}
              title="Edit post"
            >
              <i className="fa fa-edit" />
            </button>
            <button
              type="button"
              className="btn-star btn-sm"
              onClick={this.onImportant}
              title="Mark as important"
            >
              <i className="fa fa-star" />
            </button>
            <button
              type="button"
              className="btn-trash btn-sm"
              title="Delete post"
            >
              <i className="fa fa-trash-o" />
            </button>
            <i className="fa fa-heart" />
          </div>
        </li>
      );
    }
  }
}
