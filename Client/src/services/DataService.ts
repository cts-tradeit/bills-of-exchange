import { BehaviorSubject, Observable } from "rxjs";
import { BillOfExchange } from "../model/BillOfExchange";
import { Endorsement } from "../model/Endorsement";
import { Party } from "../model/Party";

export default class DataService {
    public static INSTANCE: DataService = new DataService();

    private partiesSubject: BehaviorSubject<Array<Party>> = new BehaviorSubject(new Array<Party>());
	public get parties(): Observable<Array<Party>>  {
		return this.partiesSubject.asObservable();
	}

    private billsSubject: BehaviorSubject<Array<BillOfExchange>> = new BehaviorSubject(new Array<BillOfExchange>());
	public get bills(): Observable<Array<BillOfExchange>>  {
		return this.billsSubject.asObservable();
	}

    private endorsementsSubject: BehaviorSubject<Array<Endorsement>> = new BehaviorSubject(new Array<Endorsement>());
	public get endorsements(): Observable<Array<Endorsement>>  {
		return this.endorsementsSubject.asObservable();
	}

    private constructor() {
        this.loadParties();
        this.loadBills();
        this.loadEndorsements();
    }

    public loadParties() {
		fetch('./data/parties.json', {
			method: 'GET',
		})
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(data => {
				this.partiesSubject.next(data.data);
			});
	}

    public getPartyById(id: string | undefined | null): Party | undefined {
        if (id === undefined || id === null) {
            return undefined;
        }
        return this.partiesSubject.value.find((p => p.id.toString() === id))
    }
 
    public loadBills() {
		fetch('./data/bills.json', {
			method: 'GET',
		})
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(data => {
				this.billsSubject.next(data.data);
			});
	}

    public getBillById(id: string | undefined | null): BillOfExchange | undefined {
        if (id === undefined || id === null) {
            return undefined;
        }
        return this.billsSubject.value.find((b => b.id.toString() === id))
    }

    public getBillsCreatedByParty(partyId?: string): BillOfExchange[] {
        if (partyId === undefined) {
            return [];
        }
        return this.billsSubject.value.filter(bill => bill.drawerId.toString() === partyId);
    }

    public getBillsOwnedByParty(partyId?: string): BillOfExchange[] {
        if (partyId === undefined) {
            return [];
        }
        return this.billsSubject.value.filter(bill => {
            let billOwner = this.getBillOwner(bill.id.toString());
            return billOwner !== undefined && billOwner.id.toString() === partyId;
        });
    }

    public loadEndorsements() {
		fetch('./data/endorsements.json', {
			method: 'GET',
		})
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(data => {
				this.endorsementsSubject.next(data.data);
			});
	}

    private getLastEndorsement(billId: string, previousEndorsement?: Endorsement): Endorsement | undefined {
        if (previousEndorsement === undefined) {
            const endorsement = this.endorsementsSubject.value.find(en => en.previousEndorsementId === undefined && en.billId.toString() === billId);
            if (endorsement === undefined) {
                return undefined;
            }

            return this.getLastEndorsement(billId, endorsement);
        } else {
            const endorsement = this.endorsementsSubject.value.find(en => en.previousEndorsementId !== undefined &&  en.previousEndorsementId === previousEndorsement.id && en.billId.toString() === billId);
            if (endorsement === undefined) {
                return previousEndorsement;
            }

            return this.getLastEndorsement(billId, endorsement);
        }
    }

    public getActiveEndorsement(billId: string | undefined | null): Endorsement | undefined {
        if (billId === undefined || billId === null) {
            return undefined;
        }

        return this.getLastEndorsement(billId);
    }

    public getBillOwner(billId: string | undefined): Party | undefined {
        if (billId === undefined || billId === null) {
            return undefined;
        }

        const bill = this.getBillById(billId);
        if (bill === undefined) {
            return undefined;
        }

        const endorsement = this.getActiveEndorsement(bill.id.toString());
        if (endorsement === undefined) {
            return this.getPartyById(bill.beneficiaryId.toString());
        }

        return this.getPartyById(endorsement.newBeneficiaryId.toString());
    }

    public getBillEndorsements(billId: string): Endorsement[] {
        if (billId === undefined) {
            return [];
        }

        return this.endorsementsSubject.value.filter(en => en.billId.toString() === billId);
    }


}