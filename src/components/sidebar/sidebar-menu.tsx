import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  ListItemButton as MuiListItemButton,
  listItemButtonClasses,
  ListItemButtonProps,
  ListItemIcon as MuiListItemIcon,
  listItemIconClasses,
  ListItemIconProps,
  ListItemText as MuiListItemText,
  listItemTextClasses,
  ListItemTextProps,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { SidebarMenuHeader } from "./sidebar-menu-header";
import {
  sidebarMenuConfig as menus,
  sidebarAdminMenuConfig as adminMenus,
  themeColors,
  themeFonts,
} from "../../configs";
import { ListItems } from "../list";
import { useSelector } from "react-redux";

export const SidebarMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const styles = getStyles();
  const pathname = "/" + location.pathname.split("/")[1];
  const user = useSelector((state: any) => state.authentication.user);
  const UserRole = user[0].role;

  return (
    <>
      <SidebarMenuHeader />
      <Divider
        sx={{
          borderColor: themeColors["#F2F2F2"],
          marginBottom: "30px",
          opacity: "13%",
        }}
      />
      <Box sx={styles.root}>
        {UserRole === "employee" ? (
          <ListItems menu={menus} navigate={navigate} pathname={pathname} />
        ) : (
          <ListItems
            menu={adminMenus}
            navigate={navigate}
            pathname={pathname}
          />
        )}
      </Box>
    </>
  );
};

export const getStyles = () => {
  return {
    root: {
      paddingX: 2.75,
    },
    title: {
      fontFamily: themeFonts["Poppins-Regular"],
      color: "rgb(255 255 255 / 60%)",
      fontSize: 15,
      marginBottom: "4px",
      marginTop: "18px",
    },
    margin: {
      marginTop: "auto",
    },
  };
};

export const ListItemButton = styled(({ ...props }: ListItemButtonProps) => (
  <MuiListItemButton {...props} />
))((props) => ({
  [`&.${listItemButtonClasses.root}`]: {
    paddingLeft: 14,
    paddingRight: 12,
    color: "rgb(255 255 255 / 60%)",
    height: "40",
    width: "206px",
    marginBottom: 10,
    borderRadius: "5px",
    ":hover": {
      backgroundColor: themeColors["#224C78"],
      color: themeColors["#FFFFFF"],
      "& svg path ": {
        stroke: themeColors["#FFFFFF"],
      },
    },
  },
  [`&.${listItemButtonClasses.selected}`]: {
    backgroundColor: `${themeColors["#224C78"]}`,
    color: themeColors["#FFFFFF"],
    "& svg path": {
      stroke: themeColors["#FFFFFF"],
    },
  },
}));

export const ListItemIcon = styled(({ ...props }: ListItemIconProps) => (
  <MuiListItemIcon {...props} />
))((props) => ({
  [`&.${listItemIconClasses.root}`]: {
    minWidth: 34,
  },
}));

export const ListItemText = styled(({ ...props }: ListItemTextProps) => (
  <MuiListItemText {...props} />
))((props) => ({
  [`&.${listItemTextClasses.root}`]: {
    [`& .${listItemTextClasses.primary}`]: {
      fontSize: 15,
      fontWeight: "400",
    },
  },
}));
