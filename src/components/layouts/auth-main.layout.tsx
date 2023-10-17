import { Box, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { themeColors, themeFonts } from '../../configs';

interface AuthMainLayoutProps {
  children?: ReactNode;
}

export const AuthMainLayout: FC<AuthMainLayoutProps> = (props) => {
  const { children } = props;
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 2,
        padding: 3.13,
        width: '-webkit-fill-available',
        overflow: ' hidden',
        position: 'relative',
      }}
    >
      <Box sx={{ height: '74px' }} />

      {children}
    </Box>
  );
};
