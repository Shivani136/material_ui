//import * as React from 'react';
import React, { useState, useEffect,useMemo} from "react";
import { DataGrid } from '@mui/x-data-grid';


const columns = [

 { field: 'name', headerName: 'NAME', width: 70 },
 { field: 'workOrder', headerName: 'Work Order #', width: 130 },
 { field: 'company', headerName: 'Company', width: 130 },
 {
      field: 'workers',
      headerName: 'Workers',
      width: 180,
     
    },
    {
          field: 'startDate',
          headerName: 'Start Date',
         // type: 'number',
          width: 130,
        },
        {
          field: 'endDate',
          headerName: 'End Date',
         // type: 'number',
          width: 130,
        },
        {
              field: 'status',
              headerName: 'Status',
             // type: 'button',
              width: 130,
            },
];
const rows = [
  { id: 1,  name:'cleanup',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: '1' },
  { id: 1,  name:'jfrejj',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: '2' },
  { id: 1, name:'acbd',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: '3' },
  { id: 1,  name:'fdf',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: '4' },
  { id: 1, name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: '5' },
  { id: 1,  name:'shivam',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: '6' },
  { id: 1,  name:'shivjj',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: '7' },
  { id: 1,  name:'shivyy ggh',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: '8' },
  // { id: 1, name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // { id: 1, name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // { id: 1,  name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // {id: 1,  name:'cleanup',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // { id: 1,  name:'jfrejj',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // { id: 1, name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // { id: 1,  name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // { id: 1, name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // { id: 1,  name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // { id: 1,  name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // { id: 1,  name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // { id: 1, name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  // { id: 1, name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
  //{ id: 1,  name:'shiv',workOrder:'BRS 453', company:'company name',workers:'R-10,C-10,W-10',startDate:'Dec 29 2020',endDate:'jun 29 2021', status: 'undefined' },
];



export default function DataTable() {
  return (
    <div style={{ height: 600, width: 1200, marginLeft:80 ,paddingLeft:20}}>
      <DataGrid
       rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
     
    </div>
  );
}