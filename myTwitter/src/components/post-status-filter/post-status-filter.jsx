import React from "react";
import "./post-status-filter.css";

const PostStatusFilter = ({ filter, onSetFilter }) => {
  const buttons = [{ name: "all", label: "Все" }, { name: "like", label: "Понравилось" }];

  const mybuttons = buttons.map(({ name, label }) => {
    const clazz = filter === name ? "btn-info" : "btn-outline-secondary";
    return (
      <button key={name} className={`btn ${clazz}`} type="button" onClick={() => onSetFilter(name)}>
        {label}
      </button>
    );
  });
  return <div className="btn-group filter-buttons">{mybuttons}</div>;
};

export default PostStatusFilter;
