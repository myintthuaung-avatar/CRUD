import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'age', headerName: 'Age', width: 100 },
];

const rows = [
  { id: 1, name: 'Thein Zaw', age: 25 },
  { id: 2, name: 'Myint Thu Aung', age: 30 },
  { id: 3, name: 'Mon Naung', age: 28 },
];

export default function UserTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows}
            columns={columns}
            pageSize={5}
            />
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection = false
      /> */}
    </div>
  );
}
