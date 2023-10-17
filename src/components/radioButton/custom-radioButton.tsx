import { ReactNode } from 'react';
import { Radio, RadioProps, FormControlLabel, FormGroup, Box, Typography } from '@mui/material';
import { themeFonts, themeColors } from '../../configs';
import { ErrorStatusMessage } from '../input/error-status-message';

interface CustomRadioProps {
  label: string | ReactNode;
  radioProps?: RadioProps;
  fontFamily?: keyof typeof themeFonts;
  errorStatus?: string;
  helperText?: string;
  disabled?: boolean;
  sx?: object;
  color?: string;
  marginRight?: string;
}

export const CustomRadioButton = ({
  label,
  fontFamily = 'Poppins-Medium',
  radioProps,
  errorStatus,
  helperText,
  disabled,
  sx,
  color,
  marginRight,
}: CustomRadioProps) => {
  return (
    <FormGroup sx={sx}>
      <FormControlLabel
        sx={{
          display: 'flex',
          width: 'fit-content',
          marginRight: marginRight ? marginRight : 0,
        }}
        control={
          <Radio
            disabled={disabled}
            {...radioProps}
            size="small"
            sx={{
              color: { color },
              width: '30px',
              height: '30px',
              '& .MuiSvgIcon-root': {
                fontSize: 12,
              },
            }}
          />
        }
        label={
          <Box>
            {typeof label === 'string' ? (
              <Typography
                sx={{
                  fontFamily: themeFonts[fontFamily],
                  color: themeColors['#323B4B'],
                  fontSize: 12,
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
                  fontFamily: themeFonts[fontFamily],
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

      <ErrorStatusMessage error={errorStatus} />
    </FormGroup>
  );
};
