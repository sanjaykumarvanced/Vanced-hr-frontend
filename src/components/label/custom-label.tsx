import { Box, Typography } from '@mui/material';
import { themeColors, themeFonts } from '../../configs';

interface CustomLabelProps {
  label: string;
  fontSize?: string;
  fontWeight?: string;
}

export const CustomLabel = ({ label, fontSize, fontWeight }: CustomLabelProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 1,
      }}
    >
      <Typography
        sx={{
          fontFamily: themeFonts['Poppins-SemiBold'],
          fontWeight: fontWeight ? { fontWeight } : '600',
          color: themeColors['#1C223E'],
          fontSize: fontSize ? { fontSize } : 16,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
