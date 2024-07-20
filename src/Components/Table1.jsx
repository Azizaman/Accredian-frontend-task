
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export function Table1() {
  const rows = [
    { name: 'Professional Certificate Program in Product Management', age: 7000, city: '2000' },
    { name: 'PG Certificate Program in Strategic Product Management', age: 10000, city: '5000' },
    { name: 'Executive Program in Data Driven Product Management', age: 5000, city: '4000' },
    { name: 'Executive Program in Product Management and Digital Transformation', age: 8000, city: '1000' },
    { name: 'Executive Program in Product Management', age: 75000, city: '6500' },
    { name: 'Advanced Certification in Product Management', age: 9000, city: '4500' },
    { name: 'Executive Program in Product Management and Project Management', age: 2000, city: '8500' },

  ];

  return (
    <TableContainer component={Paper} className="container mx-auto p-4">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Programs</TableCell>
            <TableCell>Referrer Bonus</TableCell>
            <TableCell>Referee Bonus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
