import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "10px",
  },
}));



export default function User(props) {
  const classes = useStyles();
  return (
    <Card  data-testid="user" className={classes.card} sx={{ minWidth: 275 }}>
      <CardContent>
      {props.title ? 
        <Typography variant="h5" component="div">
        {props.title}
        </Typography> : null}
        <Typography variant="h6" component="div">
          <AssignmentIndIcon color="primary" fontSize="large" /> {props.name}
        </Typography>
        
          <Button to={"/user/" + props.id} variant="outlined" size="small">
            User Detail
          </Button>
        
      </CardContent>
    </Card>
  );
}
