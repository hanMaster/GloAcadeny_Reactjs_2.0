import getUId from './../utils/utils';

export const add = text => ({ type: 'ADD_TASK', id: getUId, text });
export const toggle = id => ({ type: 'TOGGLE_TASK', id });
export const hideCompleted = () => ({ type: 'HIDE_COMPLETED' });
