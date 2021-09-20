import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { getUserDetail } from "../api/index";
import Bill from "../components/bill";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "15px",
  },
}));

export default function UserDetail() {
  const [user, setUser] = useState({
    name: "",
    issuedBills: [],
    ownedBills: [],
  });

  let { userId } = useParams();

  const classes = useStyles();

  useEffect(() => {
    let currentUser = getUserDetail(userId);
    setUser(currentUser);
  }, [userId]);


  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography
        component="h3"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {user.name}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography
            component="h5"
            variant="h6"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Issued Bills {"(" + user.issuedBills.length + ")"}
          </Typography>
          {user.issuedBills.map((bill) => (
              <Bill
                amount={bill.Amount}
                id={bill.Id}
                beneficiaryId={bill.BeneficiaryId}
                beneficiary={bill.BeneficiaryName}
                drawerId={bill.DrawerId}
                owner={bill.DrawerName}
              />
            ))}
        </Grid>
        <Grid item xs={6}>
          <Typography
            component="h5"
            variant="h6"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Owned Bills {"(" + user.ownedBills.length + ")"}
          </Typography>
          {user.ownedBills.map((bill) => (
              <Bill
                amount={bill.Amount}
                id={bill.Id}
                beneficiaryId={bill.BeneficiaryId}
                beneficiary={bill.BeneficiaryName}
                drawerId={bill.DrawerId}
                owner={bill.DrawerName}
              />
            ))}
        </Grid>
      </Grid>
    </Container>
  );
}
