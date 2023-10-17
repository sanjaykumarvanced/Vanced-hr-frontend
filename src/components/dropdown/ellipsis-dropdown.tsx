import React, { useState } from 'react';
import { Box, Dialog, IconButton, Menu, MenuItem } from '@mui/material';
// import { IconMore1Svg } from '../../svgs';
import { themeColors, themeFonts } from '../../configs';
// // import { usePutApiAdsByAdIdPauseMutation } from 'generatedStore/adsSuperUserApi';
// import { useNavigate } from 'react-router-dom';
import { CloseIconSvg, EditIcon1Svg, EllipsisIconSvg, RefreshIconSvg } from '../../svgs';

export const EllipsisDropDown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const adId = item.id;
  // const [update] = usePutApiAdsByAdIdPauseMutation();
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const navigate = useNavigate();
  // const onTab = ({ baseRoute, id }: { baseRoute: string; id: number }) => {
  //   navigate(baseRoute.replace(':id', `${id}`));
  // };
  // const showAllTransactions = (): void => {
  //   onTab({
  //     baseRoute: ROUTES.KIPPOS_DETAILS_ALL_DONATIONS,
  //     id: 2770,
  //   });
  // };

  return (
    <>
      <Box>
        <Box sx={{ float: 'right' }}>
          <IconButton
            sx={{
              width: 30,
              height: 30,
              '@media (max-width: 1560px)': {
                width: 26,
                height: 26,
              },
              borderRadius: '8px',
              backgroundColor: themeColors['#F2F2F2'],
            }}
            id="menu-button"
            aria-controls={open ? 'isLive' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <EllipsisIconSvg />
          </IconButton>
          <Dialog onClose={handleClose} open={open}>
            <Box>
              <Menu
                id="isLive"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'menu-button',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      width: '17px',
                      height: '17px',
                      background: themeColors['#FFFFFF'],
                      position: 'absolute',
                      right: '15px',
                      bottom: '-1px',
                      transform: 'rotate(45deg)',
                    },
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    paddingBottom: '10px',
                  }}
                >
                  <MenuItem
                    sx={{
                      fontFamily: themeFonts['Poppins-SemiBold'],
                      fontSize: '13px',
                      color: themeColors['#0F1533'],
                      display: 'flex',
                      gap: '13px',
                      alignItems: 'center',
                    }}
                  >
                    <CloseIconSvg /> Close
                  </MenuItem>
                  <MenuItem
                    sx={{
                      fontFamily: themeFonts['Poppins-SemiBold'],
                      fontSize: '13px',
                      color: themeColors['#0F1533'],
                      display: 'flex',
                      gap: '13px',
                      alignItems: 'center',
                    }}
                  >
                    <EditIcon1Svg /> Edit
                  </MenuItem>
                  <MenuItem
                    sx={{
                      fontFamily: themeFonts['Poppins-SemiBold'],
                      fontSize: '13px',
                      color: themeColors['#0F1533'],
                      display: 'flex',
                      gap: '13px',
                      alignItems: 'center',
                    }}
                  >
                    <RefreshIconSvg /> Refresh
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
