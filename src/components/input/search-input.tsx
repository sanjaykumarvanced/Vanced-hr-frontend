import { useState } from 'react';
import { themeColors, themeFonts } from '../../configs';
import { Box, InputBase } from '@mui/material';
import { IconSearch1Svg } from '../../svgs';

interface SearchInputProps {
  size?: 'medium' | 'large' | 'small';
  variant?: 'filled' | 'outlined';
  placeholder?: string;
  height?: string;
  width?: string;
}

export const SearchInput = ({
  size = 'medium',
  variant = 'filled',
  placeholder = 'Search',
  height,
  width,
}: SearchInputProps) => {
  const [name, setName] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const containerStyle = {
    backgroundColor: variant === 'filled' ? themeColors['#F2F2F2'] : 'transparent',
    borderRadius: size === 'medium' ? '11px' : '8px',
    border: variant === 'filled' ? 'none' : `1px solid ${themeColors['#E9EEF2']}`,
    height: size === 'medium' ? 48 : height ? { height } : 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: size === 'medium' ? 2 : 1.5,
  };

  const inputStyle = {
    paddingX: size === 'medium' ? 2 : 1.5,
    fontFamily: themeFonts['Poppins-SemiBold'],
    fontSize: size === 'medium' ? 14 : 10,
  };

  return (
    <Box sx={containerStyle}>
      <InputBase placeholder={placeholder} sx={inputStyle} value={name} onChange={handleChange} />

      <IconSearch1Svg />
    </Box>
  );
};
