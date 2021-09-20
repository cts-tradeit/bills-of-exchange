import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { ActionType } from '../../State/ActionTypes/actionType';
import { State } from '../../State';
import { useHistory, useParams } from 'react-router';

const columnsDrawerParty: GridColDef[] = [
    { field: 'id', headerName: 'Drawer ID', width: 130 },
    {
        field: 'name',
        headerName: 'Drawer Name',
        width: 150,
        editable: false,
    },
];

const columnsBeneficiaryParty: GridColDef[] = [
    { field: 'id', headerName: 'Beneficiary ID', width: 150 },
    {
        field: 'name',
        headerName: 'Beneficiary Name',
        width: 170,
        editable: false,
    },
];


export const Smenky: React.FC = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const params: any = useParams();

    dispatch({ type: ActionType.SmenkyList });
    dispatch({ type: ActionType.OsobyList });
    const smenky = useSelector((state: State) => state.smenkyReducer);
    const osoby = useSelector((state: State) => state.osobyReducer);

    dispatch({
        type: ActionType.SmenkaDetails,
        payload: {
            smenkaId: params.id,
            osoby,
            smenky
        }
    });

    const drawerParty = useSelector((state: State) => state.smenkaDetailsReducer.drawerParty);
    const beneficiaryParty = useSelector((state: State) => state.smenkaDetailsReducer.beneficiaryParty);

    return (
        <div style={{ height: 450, width: '21rem', margin: '5% 0 0 5%', cursor: 'pointer' }}>
            <h1>Bill's Details</h1>
            <h2>Drawer Party</h2>
            <DataGrid
                rows={drawerParty}
                columns={columnsDrawerParty}
                pageSize={6}
                autoHeight={true}
                checkboxSelection={false}
                disableColumnMenu={true}
                disableSelectionOnClick
                rowsPerPageOptions={[6]}
                onRowClick={(params) => {
                    history.push(`/osobadetails/${params.id}`);
                }}
            />
            <h2>Beneficiary Party</h2>
            <DataGrid
                rows={beneficiaryParty}
                columns={columnsBeneficiaryParty}
                pageSize={6}
                autoHeight={true}
                checkboxSelection={false}
                disableColumnMenu={true}
                disableSelectionOnClick
                rowsPerPageOptions={[6]}
                onRowClick={(params) => {
                    history.push(`/osobadetails/${params.id}`);
                }}
            />
        </div>
    );
}

export default Smenky;