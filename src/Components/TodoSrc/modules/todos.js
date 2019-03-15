import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션 타입 정의, 액션 생성 함수 만들기.
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List({});
