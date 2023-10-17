import { AppBar, Box,  IconButton, Toolbar, Typography } from '@mui/material';
import { LEFT_SIDEBAR_WIDTH } from '../consts/layout.const';
import { themeColors, themeFonts } from '../../configs';
import { BarIconSvg, DownArrowIcon, ProfilePicture, SearchIcon } from '../../svgs';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useState } from 'react';
import { ProfileMenu } from '../dropdown/profile-menu';

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
  return (
    <>
      <AppBar
        sx={{
          // position: 'absolute',
          width: `auto`,
          left: !open ? `${LEFT_SIDEBAR_WIDTH}px` : '72px',
          backgroundColor: 'white',
          boxShadow: 'none',
          position: 'fixed',
          transition: '0.2s',
          height: '70px !important',
        }}
      >
        <Toolbar
          sx={{
            height: '70px !important',
            boxShadow: '0px 3px 6px 0px rgb(0 0 0 / 16%)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderLeft: '1px solid rgb(112 112 112 / 18%)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              flexDirection: 'row',
              gap: '8px',
            }}
          >
            {!open ? (
              <IconButton onClick={handleDrawerOpen}>
                <BarIconSvg />
              </IconButton>
            ) : (
              <IconButton onClick={handleDrawerClose}>
                <ArrowLeftIcon />
              </IconButton>
            )}

            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingRight: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '5px',
                  overflow: 'hidden',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ProfilePicture />
              </Box>
              <Box
                sx={{
                  paddingLeft: '15px',
                  paddingRight: '7px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: themeFonts['Poppins-Regular'],
                    color: themeColors['#000000'],
                    fontSize: '15px',
                    textAlign: 'center',
                  }}
                >
                  Udyam Kumar
                </Typography>
              </Box>

              <IconButton
                sx={{
                  height: 40,
                  paddingX: '8px',
                  width: '40px !important',
                }}
                id="menu-button"
                aria-controls={isOpen ? 'isLive' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={handleClick}
              >
                <DownArrowIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {isOpen && <ProfileMenu handleClose={handleClose} anchorEl={anchorEl} open={isOpen} />}
    </>
  );
};
