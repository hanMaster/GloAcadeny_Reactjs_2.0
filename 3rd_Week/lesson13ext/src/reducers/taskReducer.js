const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TASK':
      return state.map(task => {
        if (task.id === action.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    default:
      return state;
  }
};

export default taskReducer;
