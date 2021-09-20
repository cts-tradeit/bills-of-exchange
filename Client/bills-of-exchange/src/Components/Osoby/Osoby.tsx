import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../State/index';
import { ActionType } from '../../State/ActionTypes/actionType';
import { useHistory } from 'react-router';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'name',
        headerName: 'Name',
        width: 160,
        editable: false,
    },
];

// We should remember, that DataGrid uses the State too for pagination (which is outside of the Reducer).
// But for this task, I think in doesn't matter for now.

export const Osoby: React.FC = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    dispatch({ type: ActionType.OsobyList });

    const osoby = useSelector((state: State) => state.osobyReducer);

    return (
        <div style={{ height: 450, width: '21%', margin: '5% 0 0 5%', cursor: 'pointer' }}>
            <h1>Parties</h1>
            <DataGrid
                rows={osoby}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[6]}
                checkboxSelection={false}
                disableColumnMenu={true}
                disableSelectionOnClick
                onRowClick={(params) => {
                    history.push(`/osobadetails/${params.id}`);
                }}
            />
        </div>
    );
}

export default Osoby;