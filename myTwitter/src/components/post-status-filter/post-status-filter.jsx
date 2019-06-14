import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = ({ onSetFilter }) => {
  return (
    <div className="btn-group filter-buttons">
      <button className="btn btn-info" type="button" onClick={() => onSetFilter(false)}>
        Все
      </button>
      <button className="btn btn-outline-secondary" type="button" onClick={() => onSetFilter(true)}>
        Понравилось
      </button>
    </div>
  );
};

export default PostStatusFilter;
