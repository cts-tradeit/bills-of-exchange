import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { getBillDetail } from "../api/index";
import BillDetailHeader from "../components/billDetailHeader";
import BillDetailEndorsements from "../components/billDetailEndorsements";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "15px",
  },
}));

export default function BillDetail() {
  const [bill, setBill] = useState({});

  let { billId } = useParams();

  const classes = useStyles();

  useEffect(() => {
    let currentBill = getBillDetail(billId);
    setBill(currentBill);
  }, [billId]);

  return (
    <Container className={classes.root} maxWidth="sm">
      <BillDetailHeader
        ownerName={bill.ownerName}
        ownerId={bill.ownerId}
        drawerName={bill.drawerName}
        drawerId={bill.drawerId}
      />
      <BillDetailEndorsements
        endorsements={bill.endorsements}
      />
    </Container>
  );
}
