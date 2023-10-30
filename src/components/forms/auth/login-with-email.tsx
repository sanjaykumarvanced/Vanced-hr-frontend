import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { themeColors, themeFonts } from '../../../configs';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../consts/routes.consts';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CustomInputField } from '../../input/custom-input-field';
import { CustomRadioButton } from '../../radioButton';
import { ErrorStatusMessage } from '../../input/error-status-message';
import {
  FacebookIconSvg,
  GoogleIconSvg,
  LinkedInIcon,
  LockIcon,
  TwitterIcon,
  UserIcon1,
} from '../../../svgs';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../../selectors';
import { useLoginWithEmailHook } from './login-with-email.hook';
interface LoginWithEmailFormProps {
  next?: () => void;
  toggleForm?: any;
}

export const LoginForm = forwardRef(
  ({ next = () => {}, toggleForm }: LoginWithEmailFormProps, ref) => {
    const formManager = useLoginWithEmailHook({ next });
    const { loading } = useSelector(selectAuthState);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
    useImperativeHandle(
      ref,
      () => ({
        onSubmit() {
          formManager.handleSubmit();
        },
      }),
      [formManager],
    );

    return (
      <form onSubmit={formManager.handleSubmit}>
        <Grid
          container
          spacing={3}
          sx={{
            paddingY: '20px',
            margin: '0px',
            marginX: { xl: '76px', md: '12px', sm: '12px', xs: '12px' },
            width: {
              xl: 'calc(100% - 151px)',
              md: 'calc(100% - 25px)',
              sm: 'calc(100% - 25px)',
              xs: 'calc(100% - 25px)',
            },
          }}
        >
          <Grid item xs={12} sx={{ padding: '0 !important', marginBottom: '46px' }}>
            <Typography
              sx={{
                fontFamily: themeFonts['Poppins-SemiBold'],
                color: themeColors['#000000'],
                fontSize: 30,
                textAlign: 'center',
              }}
            >
              Welcome back!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              padding: '0 !important',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginBottom: '9px',
            }}
          >
            <Typography
              sx={{
                fontFamily: themeFonts['Poppins-SemiBold'],
                color: themeColors['#007CFF'],
                fontSize: '18px',
              }}
            >
              ADMIN SIGNIN
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  color: themeColors['#BFBFBF'],
                  fontSize: '12px',
                  fontFamily: themeFonts['Poppins-Regular'],
                }}
              >
                OR Need an Account ?
                <MuiLink
                  component={Link}
                  to={ROUTES.REGISTER}
                  onClick={toggleForm}
                  sx={{
                    textDecoration: 'none',
                    fontFamily: themeFonts['Poppins-Regular'],
                    fontSize: 12,
                    marginLeft: '5px',
                    color: themeColors['#007CFF'],
                  }}
                >
                  Sign Up
                </MuiLink>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <ErrorStatusMessage error={formManager.status?.incorrectCredentials} highlight />
          </Grid>
          <Grid item xs={12} sx={{ paddingLeft: '0px !Important' }}>
            <CustomInputField
              autoFocus={true}
              type="email"
              placeholder="Username*"
              name="email"
              value={formManager.values.email}
              onChangeValue={(value) => formManager.setFieldValue('email', value)}
              error={formManager.touched.email && Boolean(formManager.errors.email)}
              helperText={formManager.touched.email && formManager.errors.email}
              titleComponent={<UserIcon1 />}
            />
          </Grid>
          <Grid item xs={12} sx={{ paddingLeft: '0px !Important' }}>
            <CustomInputField
              type={showPassword ? 'text' : 'password'}
              titleComponent={<LockIcon />}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? (
                      <VisibilityIcon
                        sx={{
                          fill: 'rgb(0 0 0 / 26%)',
                          height: '16px',
                          width: '20px',
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        sx={{
                          fill: 'rgb(0 0 0 / 26%)',
                          height: '16px',
                          width: '20px',
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Password*"
              name="password"
              value={formManager.values.password}
              onChangeValue={(value) => formManager.setFieldValue('password', value)}
              error={formManager.touched.password && Boolean(formManager.errors.password)}
              helperText={formManager.touched.password && formManager.errors.password}
            />
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: '15px !important', paddingLeft: '0px !Important' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <CustomRadioButton label="Remember me" fontFamily="Poppins-SemiBold" />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ paddingLeft: '0px !Important' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                height: '46px',
                background: themeColors['#007CFF'],
                color: themeColors['#FFFFFF'],
                fontSize: '18px',
                fontFamily: themeFonts['Poppins-SemiBold'],
                borderRadius: '5px',
                boxShadow: '3px 3px 6px 0px rgb(0 0 0 / 36%)',
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
                'LOGIN'
              )}
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: '16px !important', paddingLeft: '0px !Important' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MuiLink
                component={Link}
                to={''}
                sx={{
                  textDecoration: 'none',
                  fontFamily: themeFonts['Poppins-Regular'],
                  fontSize: 12,
                  color: themeColors['#FF0000'],
                }}
              >
                Forgot Password?
              </MuiLink>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ paddingLeft: '0px !Important' }}>
            <Divider sx={{ width: 147, paddingBottom: '16px' }}>
              <Typography
                sx={{
                  fontFamily: themeFonts['Poppins-Regular'],
                  fontSize: '12px',
                  color: themeColors['#000000'],
                }}
              >
                Or Login With
              </Typography>
            </Divider>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{
                    height: '47px',
                    background: themeColors['rgb(54 96 160 / 14%)'],
                    color: themeColors['#3660A0'],
                    fontSize: '18px',
                    fontFamily: themeFonts['Poppins-Regular'],
                    '&:hover': {
                      background: 'rgb(54 96 160 / 64%)',
                      color: themeColors['#3660A0'],
                    },
                    borderRadius: '5px',
                  }}
                  startIcon={<FacebookIconSvg />}
                >
                  {loading ? (
                    <CircularProgress
                      size={17}
                      sx={{
                        color: '#A8A8A8',
                        fontWeight: '900',
                      }}
                    />
                  ) : (
                    'Facebook'
                  )}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{
                    height: '47px',
                    background: themeColors['rgb(222 85 68 / 14%)'],
                    color: themeColors['#DE5544'],
                    fontSize: '18px',
                    fontFamily: themeFonts['Poppins-Regular'],
                    '&:hover': {
                      background: 'rgb(222 85 68 / 64%)',
                      color: themeColors['#DE5544'],
                    },
                    borderRadius: '5px',
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
                    'Google'
                  )}
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                paddingTop: '16px !important',
              }}
            >
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{
                    height: '47px',
                    background: themeColors['rgb(2 109 157 / 14%)'],
                    color: themeColors['#026D9D'],
                    fontSize: '18px',
                    fontFamily: themeFonts['Poppins-Regular'],
                    '&:hover': {
                      background: 'rgb(2 109 157 / 64%)',
                      color: themeColors['#026D9D'],
                    },
                    borderRadius: '5px',
                  }}
                  startIcon={<LinkedInIcon />}
                >
                  {loading ? (
                    <CircularProgress
                      size={17}
                      sx={{
                        color: '#A8A8A8',
                        fontWeight: '900',
                      }}
                    />
                  ) : (
                    'LinkedIn'
                  )}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{
                    height: '47px',
                    background: themeColors['rgb(40 170 225 / 14%)'],
                    color: themeColors['#28AAE1'],
                    fontSize: '18px',
                    fontFamily: themeFonts['Poppins-Regular'],
                    '&:hover': {
                      background: 'rgb(40 170 225 / 64%)',
                      color: themeColors['#28AAE1'],
                    },
                    borderRadius: '5px',
                  }}
                  startIcon={<TwitterIcon />}
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
                    'Twitter'
                  )}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  },
);
