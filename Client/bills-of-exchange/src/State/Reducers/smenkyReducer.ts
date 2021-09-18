import { ActionType } from "../ActionTypes/actionType";
import { Action } from "../Actions/actions";


export interface Smenka {
    id: number;
    firstName: string | null | undefined;
}

const rows: Smenka[] = [
    { id: 1, firstName: 'CTS Trade IT' },
    { id: 2, firstName: 'Apple' },
    { id: 3, firstName: 'Google' },
    { id: 4, firstName: 'Microsoft' },
    { id: 5, firstName: 'Amazon' },
    { id: 6, firstName: 'NCR' },
];


const osobyReducer = (state: Smenka[] = [], action: Action) => {
    switch (action.type) {
        case ActionType.SmenkyList: {
            return rows;
        }
        default:
            return state;
    }
}

export default osobyReducer;