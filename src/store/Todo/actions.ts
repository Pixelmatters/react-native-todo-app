import {
  TodoActionTypes,
  ITodo,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO_IS_DONE,
} from './types';

export const addTodo = (todo: ITodo): TodoActionTypes => ({
  todo: todo,
  type: ADD_TODO,
});

export const removeTodo = (todo: ITodo): TodoActionTypes => ({
  todo: todo,
  type: REMOVE_TODO,
});

export const updateIsDone = (todo: ITodo): TodoActionTypes => ({
  todo: todo,
  type: UPDATE_TODO_IS_DONE,
});
