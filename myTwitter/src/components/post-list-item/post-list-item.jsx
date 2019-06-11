import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
  state = {
    important: false,
    like: false
  };
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
  render() {
    const { label } = this.props;
    const { important, like } = this.state;
    const currentDate = new Date().toLocaleDateString();
    let classNames = 'app-list-item d-flex justify-content-between';
    if (important) classNames += ' important';
    if (like) classNames += ' like';
    return (
      <li className={classNames}>
        <div>
          <span className="app-list-item-label" onClick={this.onLike}>
            {label}
          </span>
          <span className="app-list-item-date">{currentDate}</span>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportant}
          >
            <i className="fa fa-star" />
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o" />
          </button>
          <i className="fa fa-heart" />
        </div>
      </li>
    );
  }
}
