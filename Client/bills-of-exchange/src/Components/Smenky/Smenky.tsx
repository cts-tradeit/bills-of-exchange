import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { ActionType } from '../../State/ActionTypes/actionType';
import { State } from '../../State';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'firstName',
        headerName: 'Name',
        width: 150,
        editable: false,
    },
];


export const Osoby: React.FC = () => {
    const dispatch = useDispatch();

    dispatch({ type: ActionType.SmenkyList });

    const smenky = useSelector((state: State) => state.smenkyReducer);

    return (
        <div style={{ height: 450, width: '20%', margin: '5% 0 0 5%' }}>
            <h1>Smenky</h1>
            <DataGrid
                rows={smenky}
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