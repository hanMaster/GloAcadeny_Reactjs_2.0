import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
  return (
    <div className="btn-group filter-buttons">
      <button className="btn btn-info" type="button">
        Все
      </button>
      <button className="btn btn-outline-secondary" type="button">
        Понравилось
      </button>
    </div>
  );
};

export default PostStatusFilter;
