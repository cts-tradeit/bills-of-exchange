import { ActionType } from '../ActionTypes/actionType';
import { Dispatch } from 'redux';
import { Action } from '../Actions/actions';


export const osobyListLoading = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.OsobyList
        })
    }
}