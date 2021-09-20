import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../State/index';
import { ActionType } from '../../State/ActionTypes/actionType';
import { useHistory, useParams } from 'react-router';

const columnsVlastni: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 80,
        editable: false,
    },
];

const columnsVystavene: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 80,
        editable: false,
    },
];



export const OsobaDetails: React.FC = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const params: any = useParams();

    dispatch({ type: ActionType.SmenkyList });
    dispatch({ type: ActionType.OsobyList });

    const smenky = useSelector((state: State) => state.smenkyReducer);
    const osoby = useSelector((state: State) => state.osobyReducer);
    const osoba = osoby.find(osoba => osoba.id.toString() === params.id);

    dispatch({
        type: ActionType.OsobaDetails,
        payload: {
            osobaId: params.id,
            smenky
        }
    });


    const smenkyVystavene = useSelector((state: State) => state.osobaDetailsReducer.drawerSmenky);
    const smenkyVlastni = useSelector((state: State) => state.osobaDetailsReducer.beneficiarySmenky);

    return (
        <div style={{ height: 450, width: '15%', margin: '5% 0 0 5%', cursor: 'pointer' }}>
            <h1>{osoba?.name}</h1>
            <h2>Drawer Bills</h2>
            <DataGrid
                rows={smenkyVystavene}
                columns={columnsVystavene}
                pageSize={6}
                checkboxSelection={false}
                disableColumnMenu={true}
                disableSelectionOnClick
                rowsPerPageOptions={[6]}
                autoHeight={true}
                onRowClick={(params) => {
                    history.push(`/smenkadetails/${params.id}`);
                }}
            />
            <h2>Beneficiary Bills</h2>
            <DataGrid
                rows={smenkyVlastni}
                columns={columnsVlastni}
                pageSize={6}
                checkboxSelection={false}
                disableColumnMenu={true}
                disableSelectionOnClick
                rowsPerPageOptions={[6]}
                autoHeight={true}
                onRowClick={(params) => {
                    history.push(`/smenkadetails/${params.id}`);
                }}
            />
        </div>
    );
}

export default OsobaDetails;