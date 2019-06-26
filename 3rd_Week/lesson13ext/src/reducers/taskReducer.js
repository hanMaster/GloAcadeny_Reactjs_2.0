const taskReducer = (
  state = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Make all current homework', completed: true },
    { id: 3, text: 'Get sertificate Mastering of React', completed: false }
  ],
  action
) => {
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
