import React, { useState, useEffect } from "react";
import { getBills } from "../api/index";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Bill from "../components/bill";
import { makeStyles } from "@mui/styles";

const PAGE_LIMIT = 5;

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "15px",
  },
}));

export default function Bills() {
  const [bills, setBills] = useState([]);
  const [visibleBills, setVisibleBills] = useState([]);
  const [page, setPage] = React.useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    let billList = getBills();
    setBills(billList.data);
    console.log(billList.data.length)
  }, [bills]);

  useEffect(() => {
    let newVisibleUsers = bills.slice(page, page + PAGE_LIMIT);
    setVisibleBills(newVisibleUsers);
  }, [page, bills]);

  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container} maxWidth="sm">
        {visibleBills.map((bill) => (
          <Bill
            amount={bill.Amount}
            id={bill.Id}
            beneficiaryId={bill.BeneficiaryId}
            beneficiary={bill.BeneficiaryName}
            drawerId={bill.DrawerId}
            owner={bill.DrawerName}
          />
        ))}
        <Pagination
          className={classes.pagination}
          count={Math.ceil(bills.length / PAGE_LIMIT)}
          onChange={handlePageChange}
        />
      </Container>
    </div>
  );
}
