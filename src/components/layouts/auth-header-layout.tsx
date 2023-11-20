import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { LEFT_SIDEBAR_WIDTH } from "../consts/layout.const";
import { themeColors, themeFonts } from "../../configs";
import {
  BarIconSvg,
  DownArrowIcon,
  NotificationIconSvg,
  ProfilePicture,
  SearchIcon,
} from "../../svgs";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import { ProfileMenu } from "../dropdown/profile-menu";
import { useSelector } from "react-redux";
import { SearchBarDialog } from "../modals/search-bar";
import { useGetImageQuery } from "../apis/imageApi";
import { apiBaseUrl } from "../consts/api-url.const";

export const AuthHeaderLayout = ({
  handleDrawerClose,
  handleDrawerOpen,
  open,
}: {
  handleDrawerClose: any;
  handleDrawerOpen: any;
  open: any;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = useSelector((state: any) => state.authentication.user);
  const UserId = user[0].id;
  const { data: image } = useGetImageQuery({ id: UserId });
  console.log(image);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const handleSearchBarClose = () => {
    setOpenSearchBar(false);
  };
  const handleSearchBarOpen = () => {
    setOpenSearchBar(true);
  };
  return (
    <>
      <AppBar
        sx={{
          width: `auto`,
          left: !open ? `${LEFT_SIDEBAR_WIDTH}px` : "72px",
          backgroundColor: "white",
          boxShadow: "none",
          position: "fixed",
          transition: "0.2s",
          height: "70px !important",
        }}
      >
        <Toolbar
          sx={{
            height: "70px !important",
            boxShadow: "0px 3px 6px 0px rgb(0 0 0 / 16%)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderLeft: "1px solid rgb(112 112 112 / 18%)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "8px",
            }}
          >
            {!open ? (
              <IconButton
                onClick={handleDrawerOpen}
                sx={{
                  height: "40px",
                  width: "40px",
                }}
              >
                <BarIconSvg />
              </IconButton>
            ) : (
              <IconButton
                onClick={handleDrawerClose}
                sx={{
                  height: "40px",
                  width: "40px",
                }}
              >
                <ArrowRightIcon />
              </IconButton>
            )}

            <IconButton
              onClick={handleSearchBarOpen}
              sx={{
                height: "40px",
                width: "40px",
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingRight: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={handleSearchBarOpen}
                sx={{
                  height: "40px",
                  width: "40px",
                  background: "rgb(80 156 238 / 15%)",
                  borderRadius: "5px",
                  marginRight: "12px",
                }}
              >
                <Badge color="primary" variant="dot">
                  <NotificationIconSvg />
                </Badge>
              </IconButton>
              <Box
                sx={{
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={apiBaseUrl + "/" + image}
                  height={40}
                  width={40}
                  alt="ProfilePicture"
                />
                {/* <ProfilePicture /> */}
              </Box>
              <Box
                sx={{
                  paddingLeft: "15px",
                  paddingRight: "7px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-Regular"],
                    color: themeColors["#000000"],
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  {user[0].firstName} {user[0].lastName}
                </Typography>
              </Box>

              <IconButton
                sx={{
                  height: 40,
                  paddingX: "8px",
                  width: "40px !important",
                }}
                id="menu-button"
                aria-controls={isOpen ? "isLive" : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? "true" : undefined}
                onClick={handleClick}
              >
                <DownArrowIcon height={10} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {isOpen && (
        <ProfileMenu
          handleClose={handleClose}
          anchorEl={anchorEl}
          open={isOpen}
        />
      )}
      {openSearchBar && (
        <SearchBarDialog open={openSearchBar} onClose={handleSearchBarClose} />
      )}
    </>
  );
};
