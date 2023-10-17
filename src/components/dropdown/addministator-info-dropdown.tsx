import { Box, Dialog, Divider, Menu, Typography } from '@mui/material';
import { themeColors, themeFonts } from '../../configs';
import { ProfilePicture } from '../../svgs';

export const AdminDropDown = ({
  open,
  handleClose,
  anchorEl,
}: {
  open: any;
  handleClose: any;
  anchorEl: any;
}) => {
  return (
    <>
      <Box>
        <Box sx={{ float: 'right' }}>
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
                sx={{
                  '& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
                    overflow: 'visible !important',
                    minWidth: '193px !important',
                    height: '191px !important',
                    borderRadius: '8px !important',
                  },
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
                      right: '35px',
                      bottom: '-3px',
                      transform: 'rotate(45deg)',
                    },
                  }}
                />
                <Box
                  sx={{
                    padding: '7px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '7px',
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: '30px',
                        height: '30px',
                        border: '1px solid #FF8000',
                        borderRadius: '8px',
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
                        paddingLeft: '6px',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: themeFonts['Poppins-SemiBold'],
                          color: themeColors['#1B385B'],
                          fontSize: '11px',
                          textAlign: 'center',
                        }}
                      >
                        Anna Park
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: themeFonts['Poppins-SemiBold'],
                          color: themeColors['#FF8000'],
                          fontSize: '8px',
                        }}
                      >
                        Administrator
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ width: '100%', paddingTop: '10px' }} />
                </Box>
              </Menu>
            </Box>
          </Dialog>
        </Box>
      </Box>
    </>
  );
};
