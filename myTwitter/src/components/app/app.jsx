import React, { Component } from 'react';
import AppHeader from './../app-header/';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import { getUId } from '../../utils/utils';
import styled from 'styled-components';

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
export default class App extends Component {
  state = {
    data: [
      3,
      { id: 'asldkj', label: 'Going to learn React', important: true },
      { id: 'sdfgdh', label: 'That is so good', important: false },
      { id: 'ghjkjl', label: 'I need a break...', important: false },
      [1, 3, 5],
      'string'
    ]
  };

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data];
      newData.splice(index, 1);
      return {
        data: newData
      };
    });
  }

  addItem(body) {
    body = body.trim();
    if (body.length < 0) return;
    const id = getUId();
    const newPost = {
      id,
      label: body,
      important: false
    };
    this.setState(({ data }) => {
      const newData = [...data, newPost];
      return {
        data: newData
      };
    });
  }

  render() {
    return (
      <AppWrapper>
        <AppHeader />
        <div className="d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={this.state.data}
          onDelete={id => {
            this.deleteItem(id);
          }}
        />
        <PostAddForm
          onAddItem={body => {
            this.addItem(body);
          }}
        />
      </AppWrapper>
    );
  }
}
