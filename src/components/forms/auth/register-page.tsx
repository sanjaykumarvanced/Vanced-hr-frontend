import { Box, Button, CircularProgress, Grid, Link as MuiLink, Typography } from '@mui/material';
import React, { useState } from 'react';
import { themeColors, themeFonts } from '../../../configs';
import { CustomFilledInput } from '../../input';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../consts/routes.consts';
import { FacebookIconSvg, GoogleIconSvg, RegisterLogSvg } from '../../../svgs';

export const RegisterForm = ({ toggleForm }: { toggleForm?: any }) => {
  const [loading] = useState(false);
  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ padding: '0 !important', paddingBottom: '24px !important' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: '25px',
            }}
          >
            <RegisterLogSvg />

            <Typography
              sx={{
                fontFamily: themeFonts['Poppins-SemiBold'],
                color: themeColors['#A8A8A8'],
                fontSize: '16px',
                textAlign: 'center',
                marginTop: '20px',
              }}
            >
              Create a New Account
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '22px',
          }}
        >
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              disabled={loading}
              sx={{
                height: '45px',
                background: themeColors['#1C223E'],
                color: themeColors['#A8A8A8'],
                fontSize: '13px',
                fontFamily: themeFonts['Poppins-SemiBold'],
              }}
              startIcon={<GoogleIconSvg />}
            >
              {loading ? (
                <CircularProgress
                  size={17}
                  sx={{
                    color: 'inherit',
                    fontWeight: '900',
                  }}
                />
              ) : (
                'Login with Google'
              )}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              disabled={loading}
              sx={{
                height: '45px',
                background: themeColors['#1C223E'],
                color: themeColors['#A8A8A8'],
                fontSize: '13px',
                fontFamily: themeFonts['Poppins-SemiBold'],
              }}
              startIcon={<FacebookIconSvg />}
            >
              {loading ? (
                <CircularProgress
                  size={17}
                  sx={{
                    color: 'inherit',
                    fontWeight: '900',
                  }}
                />
              ) : (
                'Login with Facebook'
              )}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/* <ErrorStatusMessage error={formManager.status?.incorrectCredentials} highlight /> */}
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: '20px !important' }}>
          <CustomFilledInput
            autoFocus={true}
            type="text"
            label="Username"
            placeholder="John Snow"
            disableValue
          />
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: '20px !important' }}>
          <CustomFilledInput
            autoFocus={true}
            type="email"
            label="Email I'd"
            placeholder="hello123@gmail.com"
            disableValue
          />
        </Grid>

        <Grid item xs={12} sx={{ paddingTop: '20px !important' }}>
          <CustomFilledInput
            label="Password"
            placeholder="*************"
            type="password"
            disableValue
          />
        </Grid>

        <Grid item xs={12} sx={{ paddingTop: '55px !important' }}>
          <Button
            type="submit"
            fullWidth
            disabled={loading}
            sx={{
              height: '45px',
              background: themeColors['#1C223E'],
              color: themeColors['#FFFFFF'],
              fontSize: '16px',
              fontFamily: themeFonts['Poppins-SemiBold'],
            }}
          >
            {loading ? (
              <CircularProgress
                size={17}
                sx={{
                  color: 'inherit',
                  fontWeight: '900',
                }}
              />
            ) : (
              'Register Now'
            )}
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: '20px !important' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                color: themeColors['#A8A8A8'],
                fontSize: '16px',
                fontFamily: themeFonts['Poppins-SemiBold'],
              }}
            >
              Already Have a Account ?
              <MuiLink
                component={Link}
                to={ROUTES.LOGIN}
                onClick={toggleForm}
                sx={{
                  textDecoration: 'none',
                  fontFamily: themeFonts['Poppins-SemiBold'],
                  fontSize: 13,
                  marginLeft: '5px',
                  color: themeColors['#FF8000'],
                }}
              >
                Sign In
              </MuiLink>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
