import React from "react";
import { useState, useEffect } from 'react';
import { Button, ButtonGroup, FormControl, Grid, InputLabel, TextField } from '@mui/material';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles'
import { VerticalAlignTop } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Select, MenuItem } from "@mui/material";

const useStyles = makeStyles({
      container:{
        height: '100vh',
        border: '1px solid #0000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      picture:{
        display: 'flex',
        justifyContent: 'center'
      },
      question:{
        display: 'flex',
        justifyContent: 'center',
        background: '#808080'
      },
      answers:{
        display: 'flex',
        justifyContent: 'center'
      },
      dropdown:{
        width: '100px'
      }
})

function createData(nev, elso, masodik, harmadik, negyedik) {
  return { nev, elso, masodik, harmadik, negyedik };
}

const rows = [
  createData('Név1', 159, 6.0, 24, 4.0),
  createData('Név2', 237, 9.0, 37, 4.3),
  createData('Név3', 262, 16.0, 24, 6.0),
  createData('Név4', 305, 3.7, 67, 4.3),
  createData('Náv5', 356, 16.0, 49, 3.9),
];

export default function Bonusz() {

  const classes = useStyles()

  return (
    <Container className={classes.picture}>
        <TextField>Írd be a nevet</TextField>
        <FormControl className={classes.dropdown}>
          <InputLabel>Válassz</InputLabel>
          <Select>
            <MenuItem value={1}>Egy</MenuItem>
            <MenuItem value={2}>Kettő</MenuItem>
            <MenuItem value={3}>Három</MenuItem>
            <MenuItem value={4}>Négy</MenuItem>
          </Select>
        </FormControl>
        <TextField>Szám inaktív</TextField>
        <Button>Gomb</Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Név</TableCell>
                <TableCell align="right">Kategória 1</TableCell>
                <TableCell align="right">Kategória 2</TableCell>
                <TableCell align="right">Kategória 3</TableCell>
                <TableCell align="right">Kategória 4</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.nev}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nev}
                  </TableCell>
                  <TableCell align="right">{row.elso}</TableCell>
                  <TableCell align="right">{row.masodik}</TableCell>
                  <TableCell align="right">{row.harmadik}</TableCell>
                  <TableCell align="right">{row.negyedik}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
    </Container>    
    
  );
}