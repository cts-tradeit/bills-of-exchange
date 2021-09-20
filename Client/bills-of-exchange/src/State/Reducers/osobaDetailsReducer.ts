import { ActionType } from "../ActionTypes/actionType";
import { Action } from "../Actions/actions";
import { Smenka } from "./smenkyReducer";


export interface OsobaDetails {
    DrawerSmenky: Smenka[];
    BeneficiarySmenky: Smenka[];
}

const initialState = {
    DrawerSmenky: [],
    BeneficiarySmenky: []
}

const osobaDetailsReducer = (state: OsobaDetails = initialState, action: Action): OsobaDetails => {

    switch (action.type) {
        case ActionType.OsobaDetails: {
            const smenky = action.payload.smenky;

            const drawerSmenky = smenky.filter(smenka => smenka.DrawerId.toString() === action.payload.osobaId);

            const beneficiarySmenky = smenky.filter(smenka => smenka.BeneficiaryId.toString() === action.payload.osobaId);

            return {
                DrawerSmenky: drawerSmenky,
                BeneficiarySmenky: beneficiarySmenky
            };
        }
        default:
            return state;
    }
}

export default osobaDetailsReducer;