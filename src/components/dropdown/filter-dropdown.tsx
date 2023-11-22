import React, { useState } from 'react';
import { Box, Button, Dialog, Menu, MenuItem,  } from '@mui/material';
import { themeColors, themeFonts } from '../../configs';
import { FilterIcon1Svg } from '../../svgs';

export const FilterDropDown = ({ label_1, label_2 }: { label_1?: any; label_2?: any }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <Box sx={{ float: 'right' }}>
          <Button
            sx={{
              height: 30,
              minWidth: 78,
              borderRadius: '8px',
              backgroundColor: themeColors['#D6FFD8'],
              marginRight: '20px',
              paddingLeft: '15px',
              paddingRight: '11px',
              fontFamily: themeFonts['Poppins-SemiBold'],
              fontSize: '13px',
              color: themeColors['#4FB030'],
              '&:hover': {
                backgroundColor: themeColors['#D6FFD8'],
              },
            }}
            startIcon={<FilterIcon1Svg />}
            id="menu-button"
            aria-controls={open ? 'isLive' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Filter
          </Button>

          <Dialog id="isLive" onClose={handleClose} open={open}>
            <Box>
              <Menu
                id="isLive"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'menu-button',
                }}
                sx={{ minWidth: 200 }}
              >
                <MenuItem
                  sx={{
                    fontFamily: themeFonts['Poppins-SemiBold'],
                    fontWeight: '400',
                    fontSize: '10px',
                    color: themeColors['#000000'],
                    display: 'flex',
                    justifyContent: ' space-between',
                    alignItems: 'center',
                  }}
                >
                  abc
                </MenuItem>
              </Menu>
            </Box>
          </Dialog>
        </Box>
      </Box>
    </>
  );
};
