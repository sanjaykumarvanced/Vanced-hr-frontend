import { ReactNode } from 'react';
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  Box,
  Typography,
} from '@mui/material';
import { themeColors, themeFonts } from '../../configs';

interface CustomCheckboxProps {
  label: string | ReactNode;
  checkboxProps?: CheckboxProps;
  font?: keyof typeof themeFonts;
  fontFamily?: keyof typeof themeFonts;
  errorStatus?: string;
  helperText?: string;
  disabled?: boolean;
  sx?: object;
  fontWeight?: string;
}

export const CustomCheckbox = ({
  label,
  font = 'Poppins-SemiBold',
  fontFamily,
  checkboxProps,
  errorStatus,
  helperText,
  disabled,
  sx,
  fontWeight,
}: CustomCheckboxProps) => {
  return (
    <FormGroup sx={sx}>
      <FormControlLabel
        sx={{
          display: 'flex',
          width: 'fit-content',
        }}
        control={
          <Checkbox
            sx={{
              '& svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-i4bv87-MuiSvgIcon-root path': {
                border: '0.5px solid #1C223E6E !important',
                fill: '#1C223E6E',
                borderRadius: '3px',
              },
            }}
            disabled={disabled}
            {...checkboxProps}
          />
        }
        label={
          <Box>
            {typeof label === 'string' ? (
              <Typography
                sx={{
                  fontFamily: fontFamily ? { fontFamily } : themeFonts[font],
                  fontWeight: { fontWeight },
                  color: themeColors['#A8A8A8'],
                  fontSize: 13,
                  position: 'relative',
                }}
              >
                {label}
              </Typography>
            ) : (
              label
            )}
            {helperText && (
              <Typography
                sx={{
                  fontFamily: themeFonts[font],
                  color: themeColors['#000000'],
                  fontSize: 8,
                  fontWeight: 300,
                  position: 'absolute',
                  width: '172px',
                }}
              >
                {helperText}
              </Typography>
            )}
          </Box>
        }
      />

      {/* <ErrorStatusMessage error={errorStatus} /> */}
    </FormGroup>
  );
};
