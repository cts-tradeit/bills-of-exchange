import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "10px",
  },
}));

export default function Bill(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item sm={5}>
            <Typography variant="subtitle2" component="div">Owner</Typography>
            </Grid>
            <Grid item sm={5}>
            <Typography variant="subtitle2" component="div">Drawer</Typography>
            </Grid>
            <Grid item sm={2}>
            <Typography variant="subtitle2" component="div">Amount</Typography>
            </Grid>
            <Grid item sm={5}>
              {props.owner}
            </Grid>
            <Grid item sm={5}>
            {props.beneficiary}
            </Grid>
            <Grid item sm={2}>
              {props.amount} $
            </Grid>
          </Grid>
        </Typography>

        
        <Link style={{ textDecoration: "none"}} to={"/bill/" + props.id}>
          <Button size="small" variant="outlined">
            Bill Detail
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
