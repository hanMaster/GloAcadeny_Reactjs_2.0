import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './post-add-form.css';

export default class PostAddForm extends Component {
  state = {
    newPost: ''
  };
  onChange = e => {
    this.setState({
      newPost: e.target.value
    });
  };
  onSubmit = e => {
    const { onAddItem } = this.props;
    const { newPost } = this.state;

    e.preventDefault();
    if (newPost.trim().length > 0) onAddItem(newPost);
    this.setState({ newPost: '' });
  };
  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          name="message"
          type="text"
          className="form-control new-post-label"
          placeholder="О чем вы думаете сейчас?"
          value={this.state.newPost}
          onChange={this.onChange}
        />
        <Button outline color="secondary" type="submit">
          Добавить
        </Button>
      </form>
    );
  }
}
