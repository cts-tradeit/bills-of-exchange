
import { DataGrid, GridColDef, GridRenderCellParams  } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { Party } from "../model/Party";
import DataService from '../services/DataService';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'details', headerName: 'Details', width: 200,  
        renderCell: (params: GridRenderCellParams) => (
            
            <Link
                to={'/party/' + params.id}
                color="primary"
            >
                View party details
            </Link>
        ),
    },
  ];


export default function PartiesComponent() {
    const [parties, setParties] = useState(new Array<Party>());

    useEffect(() => {
        const subscription = DataService.INSTANCE.parties.subscribe(parties => {
            if (parties) {
                setParties(parties);
            } else {
                setParties([]);
            }
        });

        return (() => {
            subscription.unsubscribe();
        })
    }, []);
 
    return (
        <DataGrid rows={parties} columns={columns} pageSize={5} autoHeight/>
    );
}
