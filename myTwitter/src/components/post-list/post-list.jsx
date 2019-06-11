import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = ({ posts }) => {
  const elements = posts.map(post => {
    const { id, ...postProps } = post;
    if (id === undefined) return null;
    return <PostListItem key={id} {...postProps} />;
  });
  return <ul className="app-list list-group">{elements}</ul>;
};
export default PostList;
