import { ActionType } from "../ActionTypes/actionType";
import { Osoba } from "../Reducers/osobyReducer";
import { Smenka } from "../Reducers/smenkyReducer";

interface OsobyListAction {
    type: ActionType.OsobyList;
}

interface OsobaDetailsAction {
    type: ActionType.OsobaDetails,
    payload: {
        osobaId: number | string;
        smenky: Smenka[];
    }
}

interface SmenkyListAction {
    type: ActionType.SmenkyList;
}

interface SmenkaDetailsAction {
    type: ActionType.SmenkaDetails,
    payload: {
        smenkaId: number | string;
        osoby: Osoba[];
        smenky: Smenka[];
    }
}

export type Action = OsobyListAction | OsobaDetailsAction | SmenkyListAction | SmenkaDetailsAction;