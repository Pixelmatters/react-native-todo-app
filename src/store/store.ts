import {todoReducer} from './Todo/reducers';

export type RootState = ReturnType<typeof todoReducer>;
