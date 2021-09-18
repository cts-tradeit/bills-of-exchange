import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../State/index';
import { ActionType } from '../../State/ActionTypes/actionType';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: false,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: false,
    },
];



export const Osoby: React.FC = () => {
    const dispatch = useDispatch();

    dispatch({ type: ActionType.OsobyList });

    const osoby = useSelector((state: State) => state.osobyReducer);

    return (
        <div style={{ height: 450, width: '31%', margin: '5% 0 0 5%' }}>
            <h1>Osoby</h1>
            <DataGrid
                rows={osoby}
                columns={columns}
                pageSize={6}
                checkboxSelection={false}
                disableColumnMenu={true}
                disableSelectionOnClick
            />
        </div>
    );
}

export default Osoby;