import { createStore } from "redux";
import allReducers from "./Reducers/allReducers";

const ReduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    allReducers,
    ReduxDevTools
);