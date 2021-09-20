import { ActionType } from "../ActionTypes/actionType";
import { Action } from "../Actions/actions";
import { parties } from '../../data/parties';


export interface Osoba {
    id: number;
    name: string | null | undefined;
}

const rows: Osoba[] = parties;

const osobyReducer = (state: Osoba[] = [], action: Action) => {
    switch (action.type) {
        case ActionType.OsobyList: {
            return rows;
        }
        default:
            return state;
    }
}

export default osobyReducer;