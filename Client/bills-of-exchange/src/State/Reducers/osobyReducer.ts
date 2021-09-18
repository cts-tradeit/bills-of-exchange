import { ActionType } from "../ActionTypes/actionType";
import { Action } from "../Actions/actions";


export interface Osoba {
    id: number;
    lastName: string | null | undefined;
    firstName: string | null | undefined;
}

const rows: Osoba[] = [
    { id: 1, lastName: 'Snow', firstName: 'Jon' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
    { id: 4, lastName: 'Stark', firstName: 'Arya' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
    { id: 6, lastName: 'Melisandre', firstName: null },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey' },
];


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