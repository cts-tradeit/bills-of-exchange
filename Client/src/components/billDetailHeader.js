import * as React from "react";
import Typography from "@mui/material/Typography";
import User from "../components/user";

export default function BillDetailHeader(props) {
  return (
    <React.Fragment>
      <Typography
        component="h4"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Bill Detail
      </Typography>
      <User title="Owner" name={props.ownerName} id={props.ownerId} />
      <User title="Drawer" name={props.drawerName} id={props.drawerId} />
    </React.Fragment>
  );
}
