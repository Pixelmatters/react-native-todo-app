import {
  ITodoState,
  TodoActionTypes,
  ITodo,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO_IS_DONE,
} from './types';
import asyncStorage from '@react-native-community/async-storage';

const TODOS_STORAGE_KEY = 'todos_';

const getTodosStorage = async (): Promise<ITodo[]> => {
  const serializedValue = await asyncStorage.getItem(TODOS_STORAGE_KEY);
  if (serializedValue == null) {
    return [];
  }
  return JSON.parse(serializedValue) as ITodo[];
};

const updateTodosStorage = async (todos: ITodo[]) => {
  try {
    const serializedValue = JSON.stringify(todos);
    await asyncStorage.setItem(TODOS_STORAGE_KEY, serializedValue);
  } catch (error) {
    console.log('Error storing the todos', error);
  }
};

export const getInitialState = async (): Promise<ITodoState> => {
  const todosArray = await getTodosStorage();
  const initalState: ITodoState = {todo: todosArray};
  return initalState;
};

const initialState: ITodoState = {
  todo: [],
};

export const todoReducer = (
  state = initialState,
  action: TodoActionTypes,
): ITodoState => {
  switch (action.type) {
    case ADD_TODO:
      const newState = {todo: state.todo.concat(action.todo)};
      updateTodosStorage(newState.todo);
      return newState;
    case REMOVE_TODO:
      state = {todo: state.todo.filter((todo) => todo.key !== action.todo.key)};
      updateTodosStorage(state.todo);
      return state;
    case UPDATE_TODO_IS_DONE:
      const updateAtIndex = state.todo.findIndex(
        (todo) => todo.key === action.todo.key,
      );
      if (updateAtIndex !== -1) {
        state.todo[updateAtIndex].isDone = !state.todo[updateAtIndex].isDone;
        updateTodosStorage(state.todo);
      }
      return state;
    default:
      return state;
  }
};
