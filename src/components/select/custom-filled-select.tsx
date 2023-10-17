import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

import { FocusEventHandler, ReactNode, useState } from 'react';
import { themeColors, themeFonts } from '../../configs';

export type CustomSelectOption = {
  label: string;
  value: string | number;
};

interface CustomSelectProps {
  label?: string;
  options: Array<CustomSelectOption>;
  helperText?: string;
  value?: number | string | null;
  errorStatus?: string;
  filled?: boolean;
  id?: string;
  disabled?: boolean;
  height?: string;
  onChange?: (value: string) => void;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  fontWeight?: string;
  fontSize?: string;
  titleComponent?: ReactNode;
  color?: string;
}

export const CustomFilledSelect = ({
  label,
  options,
  helperText,
  value,
  errorStatus,
  filled = true,
  id,
  disabled = false,
  onBlur,
  onChange,
  height,
  fontWeight,
  fontSize,
  color,
  titleComponent,
}: CustomSelectProps) => {
  const [selectValue, setSelectValue] = useState(value ?? '');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
    if (onChange) onChange(event.target.value as string);
  };

  const borderStyle = () => {
    if (errorStatus) return '2px solid #e11900';
    if (filled) return 'none';
    return '1px solid #0000003b';
  };

  return (
    <FormControl fullWidth>
      {label && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontFamily: themeFonts['Poppins-SemiBold'],
              fontWeight: fontWeight ? { fontWeight } : '600',
              color: color ? { color } : themeColors['#1C223E'],
              fontSize: fontSize ? { fontSize } : 16,
            }}
          >
            {label}
          </Typography>
          {titleComponent}
        </Box>
      )}

      <Select
        value={selectValue.toString()}
        onChange={handleChange}
        onBlur={onBlur}
        id={id}
        disabled={disabled}
        sx={{
          height: height ? { height } : 50,
          borderRadius: 2,
          background: filled ? '#F2F2F2' : '#FFF',
          '& .MuiOutlinedInput-notchedOutline': {
            border: borderStyle(),
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: borderStyle(),
          },
          '& .MuiSelect-selected .MuiOutlinedInput-notchedOutline': {
            border: borderStyle(),
          },
          fontFamily: themeFonts['Poppins-Regular'],
          fontSize: 14,
          marginTop: 1,
        }}
      >
        {options.map((item, index) => (
          <MenuItem key={`custom-select-option-${index}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {!selectValue && selectValue !== 0 && (
        <FormHelperText
          sx={{
            fontSize: 14,
            fontFamily: themeFonts['Poppins-Regular'],
            color: themeColors['#323B4B'],
            marginLeft: 0,
            position: 'absolute',
            top: '40px',
            left: '14px',
            opacity: 0.5,
          }}
        >
          {helperText}
        </FormHelperText>
      )}
      {/* <ErrorStatusMessage error={errorStatus} /> */}
    </FormControl>
  );
};
