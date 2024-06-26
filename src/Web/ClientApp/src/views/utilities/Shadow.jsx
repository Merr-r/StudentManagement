import React from 'react';
import GenericTable from '../../ui-component/table/TableBasic'; // Đảm bảo bạn import component `GenericTable` từ đúng đường dẫn
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeaderTable from './component/HeaderShow';
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
          Chương trình đạo tạo của <span style={{ color: '#069101' }}>ngành</span> <span style={{ color: '#0e55da' }}>An toàn thông tin</span>
        </Typography>      
      </Box>
      
      <HeaderTable/>
        

      <Box sx={{ justifyContent: 'center',
                 display:'flex',
                 marginBottom:'20px'
      }}>
        <Radio
            checked={selectedValue === 'a'}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
        <Typography variant={'h3'} color="inherit" sx={{marginTop:'10px'}}>
          Chi tiết khung chương trình
        </Typography>
        <Radio
          checked={selectedValue === 'c'}
          onChange={handleChange}
          value="c"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'c' }}
        />
        <Typography variant={'h3'} color="inherit" sx={{marginTop:'10px'}}>
          Kiểm tra tình trạng hoàn thành
        </Typography>
      </Box>

      <div style={{ marginTop: '15px' }}>
          <GenericTable columns={columns} rows={rows} maxHeight={550} />
        </div>
      </div>
    </div>
    </MainCard>
    
  );
}
