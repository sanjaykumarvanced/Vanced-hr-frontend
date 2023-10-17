import {
  listItemButtonClasses,
  ListItemButtonProps,
  ListItemText as MuiListItemText,
  ListItemButton as MuiListItemButton,
  listItemTextClasses,
  ListItemTextProps,
  styled,
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps,
  listItemIconClasses,
} from '@mui/material';
import { themeColors } from '../../configs';

export const AdminMenuListItemButton = styled(({ ...props }: ListItemButtonProps) => (
  <MuiListItemButton {...props} />
))((props) => ({
  [`&.${listItemButtonClasses.root}`]: {
    paddingLeft: 5,
    paddingRight: 12,
    color: themeColors['#BABABA'],
    borderRadius: 19,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingTop: '0px',
    paddingBottom: '0px',
    ':hover': {
      backgroundColor: themeColors['#FFFFFF'],
      color: `${themeColors['#FC9C3C']} !important`,
      '& svg path': {
        fill: themeColors['#FC9C3C'],
      },
      '& svg ellipse#Ellipse_17': {
        fill: themeColors['#FC9C3C'],
      },
    },
  },
  [`&.${listItemButtonClasses.selected}`]: {
    backgroundColor: `${themeColors['#FFFFFF']}`,
    color: themeColors['#FC9C3C'],
    '& svg path': {
      fill: themeColors['#FC9C3C'],
    },
    '& svg ellipse#Ellipse_17': {
      fill: themeColors['#FC9C3C'],
    },
  },
}));

export const AdminMenuListItemIcon = styled(({ ...props }: ListItemIconProps) => (
  <MuiListItemIcon {...props} />
))((props) => ({
  [`&.${listItemIconClasses.root}`]: {
    minWidth: 30,
  },
}));

export const AdminMenuListItemText = styled(({ ...props }: ListItemTextProps) => (
  <MuiListItemText {...props} />
))((props) => ({
  [`&.${listItemTextClasses.root}`]: {
    [`& .${listItemTextClasses.primary}`]: {
      fontSize: 12,
      fontWeight: '400',
    },
  },
}));
