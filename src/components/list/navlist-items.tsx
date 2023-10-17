import { List } from '@mui/material';
import { IMenuList } from '../../configs';
import { NavListItemButton, NavListItemIcon } from '../sidebar/sidebar';

interface NavListItemProps {
  menu: Array<IMenuList>;
  navigate: Function;
  pathname: string;
}
export const NavListItems = ({ menu, navigate, pathname }: NavListItemProps) => {
  return (
    <List>
      {menu.map((item, index) => (
        <NavListItemButton
          key={`menu-${index}`}
          selected={pathname === item.route}
          onClick={() => navigate(item.route)}
        >
          <NavListItemIcon
            sx={{
              color: 'inherit',
            }}
          >
            {item.icon}
          </NavListItemIcon>
        </NavListItemButton>
      ))}
    </List>
  );
};
