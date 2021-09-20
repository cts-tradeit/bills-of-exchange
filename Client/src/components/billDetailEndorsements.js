import * as React from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function BillDetailEndorsements(props) {

  function renderEndorsements(endorsements) {
    if (endorsements.length > 0) {
      return (
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Oder</TableCell>
                <TableCell align="left">Owner</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {endorsements.map((row) => (
                <TableRow
                  key={row.Id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Order}
                  </TableCell>
                  <TableCell component="th" scope="row">
                  <Link
                      style={{ textDecoration: "none" }}
                      to={"/user/" + row.NewBeneficiaryId}
                    >
                    {row.NewBeneficiary}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
  }

  return (
    <React.Fragment>
      <Typography
        component="h6"
        variant="h6"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Endorsement History
      </Typography>
      {props.endorsements ? renderEndorsements(props.endorsements) : null}
    </React.Fragment>
  );
}
