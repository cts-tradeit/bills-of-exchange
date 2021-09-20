import { ActionType } from "../ActionTypes/actionType";
import { Action } from "../Actions/actions";
import { Osoba } from "./osobyReducer";


export interface SmenkaDetails {
    drawerParty: Osoba[];
    beneficiaryParty: Osoba[];
    radVlastniku?: Osoba[];
}

const initialState = {
    drawerParty: [],
    beneficiaryParty: [],
    radVlastniku: []
}

const smenkaDetailsReducer = (state: SmenkaDetails = initialState, action: Action): SmenkaDetails => {

    switch (action.type) {
        case ActionType.SmenkaDetails: {
            const smenky = action.payload.smenky;
            const osoby = action.payload.osoby;

            const smenka = smenky.find(smenka => smenka.id.toString() === action.payload.smenkaId);
            // const osobaVystavelaSmenku = osoby.find(osoba => osoba.id === smenka?.DrawerId);

            const drawerParty: any[] = [];
            drawerParty.push(osoby.find(osoba => osoba.id === smenka?.DrawerId));

            // const osobaVlastnikSmenky = osoby.find(osoba => osoba.id === smenka?.BeneficiaryId);
            const beneficiaryParty: any[] = [];
            beneficiaryParty.push(osoby.find(osoba => osoba.id === smenka?.BeneficiaryId));

            return {
                drawerParty: drawerParty,
                beneficiaryParty: beneficiaryParty,
                radVlastniku: []
            };
        }
        default:
            return state;
    }
}

export default smenkaDetailsReducer;