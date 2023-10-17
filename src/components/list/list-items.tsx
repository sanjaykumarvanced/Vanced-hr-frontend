import { List } from '@mui/material';
import { IMenuList} from '../../configs';
import { ListItemButton, ListItemIcon, ListItemText } from '../sidebar/sidebar-menu';

interface ListItemProps {
  menu: Array<IMenuList>;
  navigate: Function;
  pathname: string;
}
export const ListItems = ({ menu, navigate, pathname }: ListItemProps) => {
  return (
    <List>
      {menu.map((item, index) => (
        <ListItemButton
          key={`menu-${index}`}
          selected={pathname === item.route}
          onClick={() => navigate(item.route)}
        
        >
          <ListItemIcon
            sx={{
              color: 'inherit',
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      ))}
    </List>
  );
};
