import { List } from '@mui/material';
import { IMenuList } from '../../configs';

import { useLocation } from 'react-router-dom';
import {
  AdminMenuListItemButton,
  AdminMenuListItemIcon,
  AdminMenuListItemText,
} from './admin-menus-list';

interface AdminMenuListItemProps {
  menu: Array<IMenuList>;
  navigate: Function;
  pathname: string;
}
export const AdminMenuListItems = ({ menu, navigate, pathname }: AdminMenuListItemProps) => {
  const location = useLocation();
  return (
    <List
      sx={{
        padding: '0px',
      }}
    >
      {menu.map((item) => (
        <AdminMenuListItemButton
          selected={location.pathname === item.route}
          onClick={() => navigate(item.route)}
        >
          <AdminMenuListItemIcon
            sx={{
              color: 'inherit',
            }}
          >
            {item.icon}
          </AdminMenuListItemIcon>
          <AdminMenuListItemText primary={item.title} />
        </AdminMenuListItemButton>
      ))}
    </List>
  );
};
