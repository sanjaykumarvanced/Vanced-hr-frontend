import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { AuthLeftSidebarLayout } from './auth-left-sidebar.layout';
import { AuthMainLayout } from './auth-main.layout';
import { AuthHeaderLayout } from './auth-header-layout';
import { useState } from 'react';

export const AuthLayout = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log('jkjkj');
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <AuthHeaderLayout
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />

      <AuthLeftSidebarLayout open={open} />

      <AuthMainLayout>
        <Outlet />
      </AuthMainLayout>
      
    </Box>
  );
};
