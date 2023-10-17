import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { LogoSvg } from '../../../svgs';
import { themeColors } from '../../../configs';
import { LoginForm } from './login-with-email';
import { RegisterForm } from './register-page';
import { LogBackground } from '../../../pngs';
export const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm((prevState) => !prevState);
  };
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          display: { xl: 'flex', md: 'grid', sm: 'grid', xs: 'grid' },
          justifyContent: { xl: 'center', md: 'center', sm: 'center', xs: 'center' },
          alignItems: { xl: 'center', md: 'center', sm: 'center', xs: 'center' },
          justifyItems: 'center',
          background: themeColors['#F5F9FF'],
          minHeight: '100vh',
          backgroundSize: 'cover',
          margin: 0,
          width: '100%',
          // minHeight: { xl: '100vh' },
        }}
      >
        <Grid
          item
          xs={7} // Full width on all screen sizes
          sm={12} // Full width on all screen sizes
          md={8} // Takes up 8 out of 12 columns on medium screens and larger
          lg={7}
          sx={{
            maxWidth: '1186px',
            height: { xl: '724px' },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px !important',
          }}
        >
          <Grid
            item
            md={12}
            xs={6}
            sx={{
              height: '100%',
              position: 'relative',
              display: { sm: 'none', xs: 'none', xl: 'block', md: 'none' },
            }}
          >
            <img src={LogBackground} alt="LogBackground" height={'100%'} width={'100%'} />
            <Box sx={{ position: 'absolute', top: '0', padding: '28px' }}>
              <LogoSvg />
            </Box>
          </Grid>
          <Grid
            item
            md={12}
            xs={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: themeColors['#FFFFFF'],
              boxShadow: '0px 6px 6px 0px rgb(0 0 0 / 16%)',
              padding: '20px',
              height: '100%',
              minWidth: 350,
            }}
          >
            {showLoginForm ? (
              <LoginForm toggleForm={toggleForm} />
            ) : (
              <RegisterForm toggleForm={toggleForm} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
