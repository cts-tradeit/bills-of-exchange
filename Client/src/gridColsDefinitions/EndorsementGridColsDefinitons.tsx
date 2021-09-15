import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { Link } from "react-router-dom"
import DataService from "../services/DataService"

export const ENDORSEMENT_COLLS: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'newBeneficiaryId', headerName: 'Owner', width: 200,
        renderCell: (params: GridRenderCellParams) => (
                    
            <Link
                to={'/party/' + params.getValue(params.id, 'newBeneficiaryId')}
                color="primary"
            >
                {DataService.INSTANCE.getPartyById(params.getValue(params.id, 'newBeneficiaryId')?.toString())?.name}
            </Link>
        ),
    },
  ];
