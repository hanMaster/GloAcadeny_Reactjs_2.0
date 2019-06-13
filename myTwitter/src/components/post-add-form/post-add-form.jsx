import React from "react";
import { Button } from "reactstrap";
import "./post-add-form.css";

const PostAddForm = ({ onAddItem }) => {
  return (
    <form
      className="bottom-panel d-flex"
      onSubmit={e => {
        e.preventDefault();
        onAddItem("Hello world!");
      }}
    >
      <input
        name="message"
        type="text"
        className="form-control new-post-label"
        placeholder="О чем вы думаете сейчас?"
      />
      <Button outline color="secondary" type="submit">
        Добавить
      </Button>
    </form>
  );
};

export default PostAddForm;
