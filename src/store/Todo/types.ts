export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO_IS_DONE = 'UPDATE_TODO_IS_DONE';

export type TodoActionTypes =
  | IAddTodoAction
  | IRemoveTodoAction
  | IUpdateTodoIsDoneAction;

interface IAddTodoAction {
  todo: ITodo;
  type: typeof ADD_TODO;
}

interface IRemoveTodoAction {
  todo: ITodo;
  type: typeof REMOVE_TODO;
}

interface IUpdateTodoIsDoneAction {
  todo: ITodo;
  type: typeof UPDATE_TODO_IS_DONE;
}

export interface ITodo {
  key: string;
  title: string;
  isDone: boolean;
}

export interface ITodoState {
  todo: ITodo[];
}
