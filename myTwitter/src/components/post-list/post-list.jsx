import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import isObject from '../../utils/utils';
import './post-list.css';

const PostList = ({ posts, onDelete }) => {
  const elements = posts.map(post => {
    const { id, ...postProps } = post;
    if (!isObject(post)) return null;
    return (
      <PostListItem key={id} {...postProps} onDelete={() => onDelete(id)} />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};
export default PostList;
