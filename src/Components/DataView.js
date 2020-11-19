import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'tDC', headerName: 'Tipo de Certificado', width: 250 },
  { field: 'solicitante', headerName: 'Solicitante', width: 250 },
  {
    field: 'fecha',
    headerName: 'Fecha',
    type: String,
    width: 150,
  },

];

const rows = [
  { id: 1, tDC: 'Certificado de Estudio', solicitante: 'Deelan Daniel Duffis Duke', fecha: '02-17-2020', detalles: 'Ver Detalles'},
  { id: 2, tDC: 'Certificado de Estudio', solicitante: 'Hubert Duffis', fecha: '04-04-2020', detalles: 'Ver Detalles'},
  { id: 3, tDC: 'Certificado Academico Extendido', solicitante: 'Jon Snow', fecha: '07-27-2020', detalles: 'Ver Detalles'},
  { id: 4, tDC: 'Certificado de Estudio', solicitante: 'Jhon Mejia', fecha: '08-17-2020', detalles: 'Ver Detalles'},
  { id: 5, tDC: 'Certificado de Notas', solicitante: 'Jose Miller', fecha: '08-17-2020', detalles: 'Ver Detalles'},
  { id: 6, tDC: 'Certificado Academico Extendido', solicitante: 'Profe Froi', fecha: '10-29-2020', detalles: 'Ver Detalles'},
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10}/>
    </div>
  );
}
