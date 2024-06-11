import React from 'react';
import GenericTable from '../../ui-component/table/TableBasic'; // Đảm bảo bạn import component `GenericTable` từ đúng đường dẫn
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HeaderTable from './component/HeaderRegister';
import Radio from '@mui/material/Radio';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
const columns = [
  { id: 'STT', label: 'STT', minWidth: 50 },
  { id: 'khoi_kien_thuc', label: 'Khối kiến thức', minWidth: 250 },
  { id: 'ma_hoc_phan', label: 'Mã học phần', minWidth: 120 },
  { id: 'ten_hoc_phan', label: 'Tên học phần', minWidth: 200 },
  { id: 'so_TC', label: 'Số TC', minWidth: 80 },
  { id: 'so_tiet_ly_thuyet', label: 'Số tiết Lý thuyết', minWidth: 150 },
  { id: 'so_tiet_thuc_hanh', label: 'Thực hành(thí nghiệm)', minWidth: 180 },
  { id: 'so_tiet_thao_luan', label: 'Thảo luận(bài tập)', minWidth: 150 },
  { id: 'hoc_ky', label: 'Học kỳ', minWidth: 100 },
];

const rows = [
  { STT: 1, khoi_kien_thuc: 'An toàn mạng máy tính (Bắt buộc)', ma_hoc_phan: 'CLC1ATATAT2', ten_hoc_phan: 'An toàn mạng máy tính', so_TC: 3, so_tiet_ly_thuyet: 30, so_tiet_thuc_hanh: 30, so_tiet_thao_luan: 0, hoc_ky: 6 },
  { STT: 2, khoi_kien_thuc: '//', ma_hoc_phan: 'ATCN35', ten_hoc_phan: 'An toàn mạng máy tính (tự chọn)', so_TC: 3, so_tiet_ly_thuyet: 60, so_tiet_thuc_hanh: 0, so_tiet_thao_luan: 0, hoc_ky: '' },
  { STT: 3, khoi_kien_thuc: 'Cơ sở chuyên ngành (ngành ATTT_K16 phân tách 3 chuyên ngành) (Bắt buộc)', ma_hoc_phan: 'ATCTKM1', ten_hoc_phan: 'Cấu trúc dữ liệu và giải thuật', so_TC: 2, so_tiet_ly_thuyet: 20, so_tiet_thuc_hanh: 0, so_tiet_thao_luan: 10, hoc_ky: 5 },
  { STT: 4, khoi_kien_thuc: '//', ma_hoc_phan: 'ATDVDV1', ten_hoc_phan: 'Cơ sở lý thuyết truyền tin', so_TC: 2, so_tiet_ly_thuyet: 30, so_tiet_thuc_hanh: 0, so_tiet_thao_luan: '', hoc_ky: 5 },
  { STT: 5, khoi_kien_thuc: '//', ma_hoc_phan: 'ATDVDV2', ten_hoc_phan: 'Kỹ thuật truyền số liệu', so_TC: 2, so_tiet_ly_thuyet: 30, so_tiet_thuc_hanh: 0, so_tiet_thao_luan: 0, hoc_ky: 5 },
  { STT: 6, khoi_kien_thuc: '//', ma_hoc_phan: 'ATCTKM2', ten_hoc_phan: 'Lý thuyết cơ sở dữ liệu', so_TC: 2, so_tiet_ly_thuyet: 25, so_tiet_thuc_hanh: 0, so_tiet_thao_luan: '', hoc_ky: 4 },
  { STT: 7, khoi_kien_thuc: '//', ma_hoc_phan: 'ATCTHT7', ten_hoc_phan: 'Nguyên lý hệ điều hành', so_TC: 2, so_tiet_ly_thuyet: 25, so_tiet_thuc_hanh: 0, so_tiet_thao_luan: 10, hoc_ky: 6 },
  { STT: 8, khoi_kien_thuc: '//', ma_hoc_phan: 'ATCTHT12', ten_hoc_phan: 'Quản trị mạng máy tính', so_TC: 2, so_tiet_ly_thuyet: 20, so_tiet_thuc_hanh: 20, so_tiet_thao_luan: '', hoc_ky: 4 },
  { STT: 9, khoi_kien_thuc: '//', ma_hoc_phan: 'ATATTM2', ten_hoc_phan: 'An toàn cơ sở dữ liệu', so_TC: 2, so_tiet_ly_thuyet: 24, so_tiet_thuc_hanh: 0, so_tiet_thao_luan: 0, hoc_ky: 5 },
  { STT: 10, khoi_kien_thuc: '//', ma_hoc_phan: 'AT1CTHT10', ten_hoc_phan: 'Chuyên đề cơ sở', so_TC: 2, so_tiet_ly_thuyet: 0, so_tiet_thuc_hanh: 60, so_tiet_thao_luan: 0, hoc_ky: 6 },
  { STT: 10, khoi_kien_thuc: '//', ma_hoc_phan: 'AT1CTHT10', ten_hoc_phan: 'Chuyên đề cơ sở', so_TC: 2, so_tiet_ly_thuyet: 0, so_tiet_thuc_hanh: 60, so_tiet_thao_luan: 0, hoc_ky: 6 },
  // Thêm các dòng dữ liệu khác tương tự ở đây
];



export default function App() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <MainCard>
      <div>
      <div>
      <Box sx={{ justifyContent: 'center',
                 display:'flex',
                 marginBottom:'20px'
      }}>
        <Typography variant={'h1'} color="inherit">
        Đăng ký môn học
        </Typography>      
      </Box>
      
      <HeaderTable/>
        

      <Box sx={{ marginBottom:'20px',
                 marginTop:'30px',
                 gap: '10px', 
                 flexDirection: 'column' 
      }}>
        <Stack spacing={0.5} sx={{justifyContent:'center'}} direction="column" alignItems="center" justifyContent="center">
          <Typography variant={'h2'} color="#4b4b46">
          AT180422 - Nguyễn Quang Huy Lớp: AT18D - Ngành An toàn thông tin - AT18
          </Typography>
          <Typography variant={'h3'} color="#696969">
          Tình trạng học lực:
          </Typography>
          <Typography variant={'h1'} color="#016401">
          Danh sách lớp học phần có thể đăng ký học kỳ 1 năm học 2024_2025 đợt học 1
          </Typography>
          <Typography variant={'h4'} color="#696969">
          Những lớp học phần thuộc cùng một dải màu liên tiếp dạy cùng một học phần, chỉ được chọn không quá 1 lớp
          </Typography>
      </Stack>
        
      </Box>

      <div style={{ marginTop: '15px' }}>
          <GenericTable columns={columns} rows={rows} maxHeight={300} />
        </div>
      </div>
    </div>
    </MainCard>
    
  );
}
