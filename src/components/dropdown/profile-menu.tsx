import {
  Box,
  Dialog,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { themeColors, themeFonts } from "../../configs";
import {
  AccountSettingsIcon,
  NeedHepIcon,
  ProfileIconSvg,
  ProfilePicture,
  SignOutIcon,
} from "../../svgs";
import { useNavigate } from "react-router-dom";
import { useMyStore } from "../../store/reducer";
import { authenticationSlice } from "../../store/slices/auth.slice";
import { useSelector } from "react-redux";

export const ProfileMenu = ({
  open,
  handleClose,
  anchorEl,
}: {
  open: any;
  handleClose: any;
  anchorEl: any;
}) => {
  const navigate = useNavigate();
  const store = useMyStore();
  const handleLogout = () => {
    localStorage.removeItem("authenticationToken");
    store.dispatch(authenticationSlice.actions.logout());
    navigate("/auth");
  };

  const user = useSelector((state: any) => state.authentication.user);
  console.log(user);

  return (
    <>
      <Box>
        <Box sx={{ float: "right" }}>
          <Dialog onClose={handleClose} open={open}>
            <Box>
              <Menu
                id="isLive"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "menu-button",
                }}
                sx={{
                  "& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiMenu-paper.MuiPopover-paper.MuiMenu-paper":
                    {
                      top: "65px !important",
                      left: "1675px !important",
                      borderRadius: "6px !important",
                    },
                }}
              >
                {/* <Box
                  sx={{
                    position: "relative",
                    "&::after": {
                      content: '""',
                      width: "17px",
                      height: "17px",
                      background: themeColors["#FFFFFF"],
                      position: "absolute",
                      right: "35px",
                      bottom: "-3px",
                      transform: "rotate(45deg)",
                    },
                  }}
                /> */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingX: "23px",
                    paddingY: "5px",
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "5px",
                      overflow: "hidden",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ProfilePicture />
                  </Box>
                  {user.map((val: any) => (
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-Regular"],
                        color: themeColors["#000000"],
                        fontSize: "15px",
                        textAlign: "center",
                        paddingLeft: "14px",
                      }}
                    >
                      {val.firstName} {val.lastName}
                    </Typography>
                  ))}
                </Box>
                <Divider sx={{ width: "100%", paddingTop: "8px" }} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "5px",
                    paddingX: "15px",
                    paddingTop: "14px",
                  }}
                >
                  <MenuItem
                    // component={Link}
                    // to={ROUTES.PROFILE}
                    sx={{
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "14px",
                      color: themeColors["#000000"],
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={handleClose}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: "25px !important",
                      }}
                    >
                      <ProfileIconSvg />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem
                    // component={Link}
                    // to={ROUTES.ACCOUNTS_SETTING}
                    sx={{
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "14px",
                      color: themeColors["#000000"],
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={handleClose}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: "25px !important",
                      }}
                    >
                      <AccountSettingsIcon />
                    </ListItemIcon>
                    Account setting
                  </MenuItem>
                  <MenuItem
                    // component={Link}
                    // to={ROUTES.NEED_HELP}
                    sx={{
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "14px",
                      color: themeColors["#000000"],
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={handleClose}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: "25px !important",
                      }}
                    >
                      <NeedHepIcon />
                    </ListItemIcon>
                    Need Help ?
                  </MenuItem>
                  <MenuItem
                    sx={{
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "14px",
                      color: themeColors["#000000"],
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      handleLogout();
                      handleClose();
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: "25px !important",
                      }}
                    >
                      <SignOutIcon />
                    </ListItemIcon>
                    Sign out
                  </MenuItem>
                </Box>
              </Menu>
            </Box>
          </Dialog>
        </Box>
      </Box>
    </>
  );
};
