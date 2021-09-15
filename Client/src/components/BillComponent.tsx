
import { Typography, Divider } from '@material-ui/core';
import { DataGrid  } from '@mui/x-data-grid';
import { useState } from 'react';
import { useParams } from 'react-router';
import { ENDORSEMENT_COLLS } from '../gridColsDefinitions/EndorsementGridColsDefinitons';
import { BillOfExchange } from '../model/BillOfExchange';
import { Endorsement } from '../model/Endorsement';

import DataService from '../services/DataService';

const columns = ENDORSEMENT_COLLS;

export default function BillComponent() {
    const { id } = useParams<{id: string}>();
    const [bill] = useState<BillOfExchange | undefined>(DataService.INSTANCE.getBillById(id));
    const [endorsements] = useState<Endorsement[]>(DataService.INSTANCE.getBillEndorsements(id));

 
    return (
        <>
            <Typography variant="h5">Created by: {DataService.INSTANCE.getPartyById(bill?.drawerId.toString())?.name}</Typography>
            <Divider />
            <br />
            <Typography variant="h5">Owned by: {DataService.INSTANCE.getBillOwner(bill?.id.toString())?.name}</Typography>
            <Divider />
            <br />
            <Typography variant="h6">Bill's endorsements</Typography>
            <br />
            <DataGrid rows={endorsements} columns={columns} pageSize={5} autoHeight />
        </>
    );
}
