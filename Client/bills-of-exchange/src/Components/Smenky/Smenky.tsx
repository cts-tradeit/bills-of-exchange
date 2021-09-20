import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { ActionType } from '../../State/ActionTypes/actionType';
import { State } from '../../State';
import { useHistory } from 'react-router';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'DrawerId',
        headerName: 'DrawerId',
        width: 150,
        editable: false,
    },
    {
        field: 'BeneficiaryId',
        headerName: 'BeneficiaryId',
        width: 150,
        editable: false,
    },
];


export const Smenky: React.FC = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    dispatch({ type: ActionType.SmenkyList });

    const smenky = useSelector((state: State) => state.smenkyReducer);

    return (
        <div style={{ height: 450, width: '26rem', margin: '5% 0 0 5%', cursor: 'pointer' }}>
            <h1>Bills of Exchange</h1>
            <DataGrid
                rows={smenky}
                columns={columns}
                pageSize={6}
                checkboxSelection={false}
                disableColumnMenu={true}
                disableSelectionOnClick
                rowsPerPageOptions={[6]}
                onRowClick={(params) => {
                    history.push(`/smenkadetails/${params.id}`);
                }}
            />
        </div>
    );
}

export default Smenky;