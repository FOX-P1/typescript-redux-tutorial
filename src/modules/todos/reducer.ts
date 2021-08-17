import { TodosState, TodosAction } from "./types";
import { createReducer } from "typesafe-actions";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actions";

// 초기 상태 선언
const initialState: TodoState = [];

// 리듀서 작성
const reducer = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) =>
        state.concat({
            ...action.payload, // id, text 를 이 안에 넣기
        }),
});
