import usersData from "../data/Parties.json";
import billsData from "../data/BillsOfExchange.json";
import endorsementsData from "../data/Endorsements.json";

function getObjectById(array, id) {
  let result = array.find((item) => item.Id === id);
  return result;
}

//Data provider function for users page
export const getUsers = () => {
  return {
    data: usersData,
  };
};

//Data provider function for user detail page
export const getUserDetail = (userId) => {
  let userName = getObjectById(usersData, parseInt(userId)).Name;

  let issuedBills = billsData.filter(
    (bill) => bill.DrawerId === parseInt(userId)
  );

  issuedBills.forEach((item, i) => {
    item.BeneficiaryName = getObjectById(usersData, parseInt(item.BeneficiaryId)).Name;
    item.DrawerName = getObjectById(usersData, parseInt(item.DrawerId)).Name;
  });

  let ownedBills = billsData.filter(
    (bill) => bill.BeneficiaryId === parseInt(userId)
  ); 

  ownedBills.forEach((item, i) => {
    item.BeneficiaryName = getObjectById(usersData, parseInt(item.BeneficiaryId)).Name;
    item.DrawerName = getObjectById(usersData, parseInt(item.DrawerId)).Name;
  });

  return {
    name: userName,
    issuedBills: issuedBills,
    ownedBills: ownedBills,
  };
};

//Data provider function for bill detail page
export const getBillDetail = (billId) => {
  let ownerId = getObjectById(billsData, parseInt(billId)).BeneficiaryId;
  let ownerName = getObjectById(usersData, parseInt(ownerId)).Name;

  let drawerId = getObjectById(billsData, parseInt(billId)).DrawerId;
  let drawerName = getObjectById(usersData, parseInt(drawerId)).Name;

  let billEndorsements = endorsementsData.filter(
    (endorsement) => endorsement.BillId === parseInt(billId)
  );

  billEndorsements.forEach((item, i) => {
    item.NewBeneficiary = getObjectById(usersData, parseInt(item.NewBeneficiaryId)).Name;
    item.Order = i + 1
  });

  return {
    ownerName: ownerName,
    ownerId: ownerId,
    drawerName: drawerName,
    drawerId: drawerId,
    endorsements: billEndorsements,
  };
};

//Data provider function for bills page
export const getBills = () => {
  billsData.forEach((bill) => {
    bill.DrawerName = getObjectById(usersData, bill.DrawerId).Name;
    bill.BeneficiaryName = getObjectById(usersData, bill.BeneficiaryId).Name;
  });

  return {
    data: billsData,
  };
};
