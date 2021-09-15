export interface Endorsement {
    id: number;
    billId: number;
    newBeneficiaryId: number;
    previousEndorsementId?: number;
}