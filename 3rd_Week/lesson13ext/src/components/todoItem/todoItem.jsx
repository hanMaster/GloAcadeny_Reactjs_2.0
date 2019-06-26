import React from 'react';

const TodoItem = ({ task, toggle, completed }) => {
  const clazz = completed ? 'done' : '';
  return (
    <li className={clazz} onClick={toggle}>
      {task}
    </li>
  );
};

export default TodoItem;
