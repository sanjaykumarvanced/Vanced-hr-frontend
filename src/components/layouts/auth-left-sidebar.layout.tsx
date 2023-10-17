import { Drawer } from '@mui/material';
import { themeColors } from '../../configs';
import { SidebarMenu } from '../sidebar';
import { LEFT_SIDEBAR_WIDTH } from '../consts/layout.const';
import { Sidebar } from '../sidebar/sidebar';

export const AuthLeftSidebarLayout = ({ open }: { open: any }) => {
  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: { xs: !open ? LEFT_SIDEBAR_WIDTH : '72px', minHeight: '100vh' },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: !open ? LEFT_SIDEBAR_WIDTH : '72px',
            boxSizing: 'border-box',
            position: 'fixed',
            transition: '0.2s',
          },
        }}
        PaperProps={{
          sx: {
            position: 'relative',
            backgroundColor: themeColors['#0C345D'],
            borderRight: 0,
          },
        }}
        open={open}
        transitionDuration={1000}
      >
        {!open ? <SidebarMenu /> : <Sidebar open={open} />}
      </Drawer>
    </>
  );
};
