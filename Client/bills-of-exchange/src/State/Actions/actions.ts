import { ActionType } from "../ActionTypes/actionType";

interface OsobyListAction {
    type: ActionType.OsobyList
}

interface SmenkyListAction {
    type: ActionType.SmenkyList
}

export type Action = OsobyListAction | SmenkyListAction;