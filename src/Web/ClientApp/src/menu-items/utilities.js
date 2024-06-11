// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Thông tin cá nhân',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Xem lệ phí-học phí',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shcadow',
      title: 'Shadow',
      type: 'item',
      url: '/utils/utcil-shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'registcer-study',
      title: 'Register Study',
      type: 'item',
      url: '/utils/register-cstudy',
      icon: icons.IconShadow,
      breadcrumbs: false
    }
  ]
};

export default utilities;
