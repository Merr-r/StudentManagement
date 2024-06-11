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
    <Typography variant="titleHeader">Số TC tối thiểu cần ĐK:</Typography>,
    <Typography variant="titleHeader" style={{color:'#000000'}}>0</Typography>,
    <Typography variant="titleHeader">Số TC tối đa được phép ĐK:</Typography>,
    <Typography variant="titleHeader" style={{color:'#000000'}}>Không hạn chế</Typography>,
    <Typography variant="titleHeader">Hạn đăng ký : </Typography>,
    <Typography variant="titleHeader" style={{color:'#000000'}}>18h, 22/06/2024 -> 07/07/2024</Typography>,
  ),
  createData(
    <Typography variant="titleHeader">Hạn chế số SV tối đa :</Typography>,
    <Typography variant="titleHeader" style={{color:'#000000'}}>Có</Typography>,
    <Typography variant="titleHeader">Cho phép đ.ký ngoài ngành :</Typography>,
    <Typography variant="titleHeader" style={{color:'#000000'}}>Không</Typography>,
    '',
    '',
  ),
  createData(
    <Typography variant="titleHeader">Kiểm tra học phí :</Typography>,
    <Typography variant="titleHeader" style={{color:'#000000'}}>Có</Typography>,
    <Typography variant="titleHeader" style={{color:'#de0000'}}>Bạn không còn tiền dư: <span style={{color:'#1601c1'}}>0</span></Typography>,
    <Typography variant="titleHeader" style={{color:'#de0000'}}>Hệ số miễn giảm: <span style={{color:'#1601c1'}}>0</span></Typography>,
    '',
    '',
  ),

];

export default function HeaderTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ border: 0, height:'30px', padding:'1px', backgroundColor: '#d3efff'}}
            >
              <TableCell component="th" scope="row" width={200} sx={{ padding: '1px', paddingLeft:'30px', border:0 }}>
                {row.col1}
              </TableCell>
              <TableCell align="left" width={120} sx={{ padding: '1px', border:0 }}>{row.col2}</TableCell>
              <TableCell align="left" width={230} sx={{ padding: '1px', border:0 }}>{row.col3}</TableCell>
              <TableCell align="left" width={230} sx={{ padding: '1px' , border:0}}>{row.col4}</TableCell>
              <TableCell align="left" width={130} sx={{ padding: '1px', border:0 }}>{row.col5}</TableCell>
              <TableCell align="left" sx={{ padding: '1px' , border:0}}>{row.col6}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
