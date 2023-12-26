import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  ListItemButton as MuiListItemButton,
  listItemButtonClasses,
  ListItemButtonProps,
  ListItemIcon as MuiListItemIcon,
  listItemIconClasses,
  ListItemIconProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { SidebarMenuHeader } from "./sidebar-menu-header";
import {
  sidebarMenuButtonConfig as menus,
  themeColors,
  themeFonts,
} from "../../configs";
import { NavListItems } from "../list/navlist-items";
import { useSelector } from "react-redux";
import { useGetEmployeeListQuery } from "../apis/employeeListApi";

export const Sidebar = ({ open }: { open: any }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const styles = getStyles(open);
  const pathname = "/" + location.pathname.split("/")[1];
  const user = useSelector((state: any) => state.authentication.user);
  const userRole = user[0].role === "employee";
  const users = user[0].id;
  const { data } = useGetEmployeeListQuery(undefined, { skip: userRole });
  const employee: any = data && data?.find((elm: any) => elm._id === users);
  const role = employee ? employee.role : user[0].role;
  const filteredMenus = menus.filter(
    (elm) => elm.permissions.includes(role) && elm.isActive
  );
  return (
    <>
      <SidebarMenuHeader open={open} />
      <Box sx={styles.root}>
        <NavListItems
          menu={filteredMenus}
          navigate={navigate}
          pathname={pathname}
        />
      </Box>
    </>
  );
};

const getStyles = ({ open }: { open: any }) => {
  return {
    root: {
      paddingLeft: 0,
      display: "flex",
      justifyContent: "center",
      marginTop: "27px",
    },
    title: {
      fontFamily: themeFonts["Poppins-SemiBold"],
      color: themeColors["#8A94A6"],
      fontSize: 12,
      marginBottom: "4px",
      marginTop: "18px",
    },
    margin: {
      marginTop: "auto",
    },
  };
};

export const NavListItemButton = styled(({ ...props }: ListItemButtonProps) => (
  <MuiListItemButton {...props} />
))((props) => ({
  [`&.${listItemButtonClasses.root}`]: {
    paddingLeft: 12,
    paddingRight: 12,
    padding: "10px",
    marginBottom: 10,
    color: themeColors["#6F88A7"],
    borderRadius: 5,
    height: "40px",
    width: "40px",
    display: "flex",
    justifyContent: "center",
    ":hover": {
      backgroundColor: themeColors["#224C78"],
      color: themeColors["#FFFFFF"],
      "& svg path": {
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

export const NavListItemIcon = styled(({ ...props }: ListItemIconProps) => (
  <MuiListItemIcon {...props} />
))((props) => ({
  [`&.${listItemIconClasses.root}`]: {
    minWidth: "34",
    justifyContent: "center",
  },
}));
