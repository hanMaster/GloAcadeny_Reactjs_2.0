import React, { Component } from "react";
import AppHeader from "./../app-header/";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import { getUId } from "../../utils/utils";
import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
export default class App extends Component {
  state = {
    data: [
      {
        id: "asldkj",
        label: "Going to learn React",
        important: true,
        like: false
      },
      { id: "sdfgdh", label: "That is so good", important: false, like: true },
      {
        id: "ghjkjl",
        label: "I need a break...",
        important: false,
        like: false
      }
    ],
    term: "",
    filter: "all"
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

  switchItemField(id, field) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data];
      if (field === "important") {
        newData[index].important = !newData[index].important;
      } else if (field === "like") {
        newData[index].like = !newData[index].like;
      }
      return {
        data: newData
      };
    });
  }

  toggleImportant(id) {
    this.switchItemField(id, "important");
  }
  toggleLike(id) {
    this.switchItemField(id, "like");
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

  saveEditedItem(id, body) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data];
      newData[index].label = body;
      return {
        data: newData
      };
    });
  }

  searchPosts = (items, term) => {
    if (term.length === 0) return items;
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  setFilter = filter => {
    this.setState({ filter });
  };

  filterPosts = posts => {
    if (this.state.filter === "like") return posts.filter(item => item.like);
    return posts;
  };

  onSearchChange = e => {
    this.setState({ term: e.target.value });
  };
  render() {
    const { data, term, filter } = this.state;
    const allPosts = data.length;
    const likedPosts = data.filter(item => item.like).length;
    const searchResult = this.searchPosts(data, term);
    const visiblePosts = this.filterPosts(searchResult);

    return (
      <AppWrapper>
        <AppHeader allPosts={allPosts} likedPosts={likedPosts} />
        <div className="d-flex">
          <SearchPanel searchString={term} onSearchChange={this.onSearchChange} />
          <PostStatusFilter onSetFilter={this.setFilter} filter={filter} />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={id => {
            this.deleteItem(id);
          }}
          onToggleImportant={id => {
            this.toggleImportant(id);
          }}
          onToggleLike={id => {
            this.toggleLike(id);
          }}
          onSaveEditedItem={(id, body) => {
            this.saveEditedItem(id, body);
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
