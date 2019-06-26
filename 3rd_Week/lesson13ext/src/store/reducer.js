// это первый вариант, сейчас уже не задействован

const reducer = (state, action) => {
  console.log('reducer', state);
  const { taskList } = state;
  switch (action.type) {
    case 'ADD_TASK':
      return {
        taskList: [
          ...taskList,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        taskList: taskList.map(task => {
          if (task.id === action.id)
            return { ...task, completed: !task.completed };
          return task;
        })
      };

    default:
      return state;
  }
};

export default reducer;
