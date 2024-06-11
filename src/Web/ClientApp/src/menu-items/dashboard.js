// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Danh mục chính',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Đăng ký học',
      type: 'collapse',
      icon: icons.IconDashboard,

      children: [
        {
          id: 'viewCurriculum',
          title: 'Xem chương trình học',
          type: 'item',
          url: '/utils/util-shadow',
          target: false,
          breadcrumbs: false
        },
        {
          id: 'registerForStudy',
          title: 'Đăng ký học',
          type: 'item',
          url: '/utils/register-study',
          target: false,
          breadcrumbs: false
        },
        {
          id: 'register4',
          title: 'Xem kết quả đăng ký học',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default dashboard;
