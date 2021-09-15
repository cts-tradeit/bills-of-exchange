import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { Link } from "react-router-dom"
import DataService from "../services/DataService"

export const BILL_COLLS: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'drawerId', headerName: 'Drawer', width: 200,
        renderCell: (params: GridRenderCellParams) => (
            <Link to={'/party/' + params.getValue(params.id, 'drawerId')}
                color="primary"
            >
                {DataService.INSTANCE.getPartyById(params.getValue(params.id, 'drawerId')?.toString())?.name}
            </Link>
        ),
    },
    { field: 'beneficiaryId', headerName: 'Owner', width: 200,
        renderCell: (params: GridRenderCellParams) => (
                    
            <Link
                to={'/party/' + DataService.INSTANCE.getBillOwner(params.id.toString())?.id}
                color="primary"
            >
                {DataService.INSTANCE.getBillOwner(params.id.toString())?.name}
            </Link>
        ),
    },
    { field: 'amount', headerName: 'Amount', width: 150 },
    { field: 'details', headerName: 'Details', width: 200,  
        renderCell: (params: GridRenderCellParams) => (
            
            <Link
                to={'/bill/' + params.id}
                color="primary"
            >
                View bill details
            </Link>
        ),
    },
  ];
