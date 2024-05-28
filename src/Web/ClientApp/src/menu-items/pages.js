// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Tài khoản',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Quản lý mật khẩu',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Đổi mật khẩu',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Đăng ký email lấy lại mật khẩu',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default pages;
