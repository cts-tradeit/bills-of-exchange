import { combineReducers } from "redux";
import osobyReducer from './osobyReducer';
import smenkyReducer from "./smenkyReducer";

const allReducers = combineReducers({
    osobyReducer,
    smenkyReducer
});

export default allReducers;

export type State = ReturnType<typeof allReducers>