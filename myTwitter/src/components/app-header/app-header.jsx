import React from "react";
import "./app-header.css";

const AppHeader = ({ allPosts, likedPosts }) => {
  let liked = likedPosts % 10 === 1 && likedPosts !== 11 ? "понравилась" : "понравилось";
  let record = "записей";
  let count = allPosts;
  count = count > 20 ? allPosts % 10 : count;
  switch (count) {
    case 1:
      record = "запись";
      break;
    case 2:
    case 3:
    case 4:
      record = "записи";
      break;
    default:
      record = "записей";
  }

  return (
    <div className="app-header d-flex">
      <h1>Andrey Khalepov</h1>
      <h2>{`${allPosts} ${record}, из них ${liked} ${likedPosts}`}</h2>
    </div>
  );
};

export default AppHeader;
