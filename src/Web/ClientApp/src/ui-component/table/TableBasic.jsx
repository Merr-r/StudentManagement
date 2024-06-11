import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { borderBottom } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#2467ae',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
    borderRight: '0.1px solid #ddd',
    padding:'4px'
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: '#d9e8f7',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      borderRight: '0.1px solid #ddd',
      borderBottom: '0.1px solid #ddd',
    },
    '&:hover': {
      backgroundColor: 'lightblue', // Màu nền khi di chuột vào
    },
    
  }));
  const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderLeft: '1px solid #605656', // Viền bao quanh bảng
    borderBottom: '1px solid #605656', // Viền bao quanh bảng
  }));
export default function GenericTable({ columns, rows , maxHeight}) {
  const theme = useTheme();


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <StyledTableContainer sx={{ maxHeight: {maxHeight} }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => (
                <StyledTableRow role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  );
}
