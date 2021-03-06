import React from "react";
import "./post-list-item.css";

const PostListItem = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <li className="app-list-item d-flex justify-content-between">
      <div>
        <span className="app-list-item-label">Hello World!!</span>
        <span className="app-list-item-date">{currentDate}</span>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm">
          <i className="fa fa-star" />
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fa fa-trash-o" />
        </button>
        <i className="fa fa-heart" />
      </div>
    </li>
  );
};

export default PostListItem;
