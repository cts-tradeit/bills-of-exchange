import { combineReducers } from "redux";
import osobaDetailsReducer from "./osobaDetailsReducer";
import osobyReducer from './osobyReducer';
import smenkaDetailsReducer from "./smenkaDetailsReducer";
import smenkyReducer from "./smenkyReducer";

const allReducers = combineReducers({
    osobyReducer,
    smenkyReducer,
    osobaDetailsReducer,
    smenkaDetailsReducer
});

export default allReducers;

export type State = ReturnType<typeof allReducers>