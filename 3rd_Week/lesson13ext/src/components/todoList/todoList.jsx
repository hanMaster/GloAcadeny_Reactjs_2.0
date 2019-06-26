import React from 'react';
import TodoItem from './../todoItem/todoItem';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const TodoList = ({ taskList, add, toggle }) => {
  const list = taskList.map(item => {
    return (
      <TodoItem
        key={item.id}
        task={item.text}
        completed={item.completed}
        add={add}
        toggle={() => toggle(item.id)}
      />
    );
  });
  return (
    <div className="todo-list">
      <ul>{list}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  const { taskList } = state;
  return {
    taskList
  };
};

export default connect(
  mapStateToProps,
  actions
)(TodoList);
