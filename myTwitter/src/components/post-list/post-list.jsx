import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import isObject from "../../utils/utils";
import { ListGroup } from "reactstrap";
import "./post-list.css";

const PostList = ({ posts, onDelete }) => {
  const elements = posts.map(post => {
    const { id, ...postProps } = post;
    if (!isObject(post)) return null;
    return (
      <PostListItem key={id} {...postProps} onDelete={() => onDelete(id)} />
    );
  });
  return <ListGroup className="app-list">{elements}</ListGroup>;
};
export default PostList;
