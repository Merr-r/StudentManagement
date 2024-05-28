import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

const ODD_OPACITY = 0.2;
const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));

export default function StripedGrid() {
  const rows = React.useMemo(
    () => [
      { id: 1, firstName: 'John', lastName: 'Doe', age: 35 },
      { id: 2, firstName: 'Jane', lastName: 'Doe', age: 28 },
      // Add more rows as needed
    ],
    []
  );

  return (
    <div style={{ height: 400, width: '100%' }}>
      <StripedDataGrid
        rows={rows}
        columns={[
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'firstName', headerName: 'First name', width: 130 },
          { field: 'lastName', headerName: 'Last name', width: 130 },
          { field: 'age', headerName: 'Age', type: 'number', width: 90 },
          // Add more columns as needed
        ]}
        getRowClassName={(params) =>
          params.index % 2 === 0 ? 'even' : 'odd'
        }
      />
    </div>
  );
}
