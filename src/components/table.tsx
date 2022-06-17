import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { rows, columns } from '../constants';
import { FormComponent } from './form'
import './styles.css';

export const TableComponent : React.FC = () => {

  const [rowSelected, updateRowSelected] = useState<object>({})
  return (
    <>
    {Object.keys(rowSelected).length === 0 && <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(item => (
                <TableCell align = "center">{item.headerName}</TableCell>
            ))
            }
          </TableRow>
        </TableHead>
        <TableBody className = 'pointer'>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              onClick = {() => updateRowSelected(row)}
              selected = {true}
              hover = {true}
            >
              <TableCell component = "th" scope = "row">
                {row.pid}
              </TableCell>
              <TableCell align = "center">{row.name}</TableCell>
              <TableCell align = "center">{row.desc}</TableCell>
              <TableCell align = "center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}

      {Object.keys(rowSelected).length !== 0 &&  
      <FormComponent rowInfo = {rowSelected}/>}
      </>
  );
}