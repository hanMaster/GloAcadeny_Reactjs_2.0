import React from 'react';
import AppHeader from './../app-header/';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
      </div>
      <PostStatusFilter />
    </div>
  );
};
export default App;
