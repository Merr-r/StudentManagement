import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SelectSmall from '../../../ui-component/select/SmallSelect';

function createData(col1, col2, col3, col4, col5, col6) {
    return { col1, col2, col3, col4, col5, col6};
  }
  
const itemTypeOfEducation = [
    { value: 1, label: 'Chính Quy' },
    { value: 2, label: 'Chuyên Tu' },
    { value: 3, label: 'Mở Rộng' },
    { value: 4, label: 'Ngắn Hạn' },
    { value: 5, label: 'Tại Chức' },
    { value: 6, label: 'Bằng 2' },
  ];
const itemTrainSystem = [
    { value: 1, label: 'DHCQ' },
    { value: 2, label: 'Cao Đẳng' },
  ];
  const itemCourse = [
    { value: 1, label: 'AT18' },
    { value: 2, label: 'Cao Đẳng' },
  ];
const rows = [
  createData(
    <Typography variant="titleHeader">Loại hình đào tạo :</Typography>,
    <SelectSmall items={itemTypeOfEducation}/>,
    <Typography variant="titleHeader">Hệ đào tạo :</Typography>,
    <SelectSmall items={itemTrainSystem} />,
    <Typography variant="titleHeader">Khóa :</Typography>,
    <SelectSmall items={itemCourse} />,),

];

export default function HeaderTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ border: 0, height:'30px', padding:'1px', backgroundColor: 'aquamarine'}}
            >
              <TableCell component="th" scope="row" width={200} sx={{ padding: '1px', paddingLeft:'30px', border:0 }}>
                {row.col1}
              </TableCell>
              <TableCell align="left" width={180} sx={{ padding: '1px', border:0 }}>{row.col2}</TableCell>
              <TableCell align="left" width={150} sx={{ padding: '1px', border:0 }}>{row.col3}</TableCell>
              <TableCell align="left" width={250} sx={{ padding: '1px' , border:0}}>{row.col4}</TableCell>
              <TableCell align="left" width={70} sx={{ padding: '1px', border:0 }}>{row.col5}</TableCell>
              <TableCell align="left" sx={{ padding: '1px' , border:0}}>{row.col6}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
