import { ActionType } from "../ActionTypes/actionType";
import { Action } from "../Actions/actions";
import { billsOfExchange } from "../../data/billsOfExchange";

export interface Smenka {
    id: number;
    DrawerId: number;
    BeneficiaryId: number;
    Amount: number;
}

const bills: Smenka[] = billsOfExchange;


const osobyReducer = (state: Smenka[] = [], action: Action) => {
    switch (action.type) {
        case ActionType.SmenkyList: {
            return bills;
        }
        default:
            return state;
    }
}

export default osobyReducer;