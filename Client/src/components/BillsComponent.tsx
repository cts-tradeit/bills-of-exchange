
import { DataGrid  } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { BILL_COLLS } from '../gridColsDefinitions/BillGridColsDefinitons';
import { BillOfExchange } from '../model/BillOfExchange';

import DataService from '../services/DataService';

const columns = BILL_COLLS;

export default function BillsComponent() {
    const [bills, setBills] = useState(new Array<BillOfExchange>());

    useEffect(() => {
        const subscription = DataService.INSTANCE.bills.subscribe(bills => {
            if (bills) {
                setBills(bills);
            } else {
                setBills([]);
            }
        });

        return (() => {
            subscription.unsubscribe();
        })
    }, []);
 
    return (
        <>
        <DataGrid rows={bills} columns={columns} pageSize={5} autoHeight />
        </>
    );
}
