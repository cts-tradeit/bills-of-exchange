import { Divider, Typography } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useParams } from "react-router";
import { BILL_COLLS } from "../gridColsDefinitions/BillGridColsDefinitons";
import { Party } from "../model/Party";
import DataService from "../services/DataService";

const columns = BILL_COLLS;

export default function PartyComponent() {
    const { id } = useParams<{id: string}>();
    const [party] = useState<Party | undefined>(DataService.INSTANCE.getPartyById(id));
    const [createdBills] = useState(DataService.INSTANCE.getBillsCreatedByParty(id));
    const [ownedBills] = useState(DataService.INSTANCE.getBillsOwnedByParty(id));
 
    return (
        <>
            <Typography variant="h5">{party?.name}</Typography>
            <Divider />
            <br />
            <Typography variant="h6">Bills created by {party?.name}</Typography>
            <br />
            <DataGrid rows={createdBills} columns={columns} pageSize={5} autoHeight />
            <Divider />
            <br />
            <Typography variant="h6">Bills owned by {party?.name}</Typography>
            <br />
            <DataGrid rows={ownedBills} columns={columns} pageSize={5} autoHeight />
        </>
    );
}
