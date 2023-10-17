import { Box, Typography } from '@mui/material';
import { Logo1Svg } from '../../svgs';
import { themeColors } from '../../configs';

export const SidebarMenuHeader = ({ open }: { open?: any }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 70,
        background: themeColors['#FFFFFF'],
      }}
    >
      {!open ? (
        <Logo1Svg />
      ) : (
        <Typography
          sx={{
            fontSize: '35px',
            letterSpacing: '2px',
            color: '#1D1D6C',
          }}
        >
          HR
        </Typography>
      )}
    </Box>
  );
};
