import { Box, Typography } from '@mui/material';
import { CSSProperties } from '@mui/styled-engine';
import { forwardRef, ReactNode } from 'react';
import { ErrorMarkSvg } from '../../svgs';



interface IErrorStatusMessage {
  error?: string;
  sx?: CSSProperties;
  highlight?: boolean;
  warning?: boolean;
  children?: ReactNode;
}

export const ErrorStatusMessage = forwardRef(
  ({ error, highlight, warning, sx, children, ...props }: IErrorStatusMessage, ref) => {
    if (!error) return null;

    const hightLignSx = highlight
      ? {
          justifyContent: 'center',
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: warning ? '#FFFAEB' : '#e1190040',
        }
      : {};

    return (
      <Box
        sx={{
          paddingTop: '8px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          ...sx,
          ...hightLignSx,
        }}
        ref={ref}
        {...props}
      >

        <ErrorMarkSvg
          style={{ minWidth: '20px', stroke: warning ? '#F79009' : undefined }}
        />
        <Typography
          sx={{
            paddingLeft: '8px',
            fontFamily:'Inter-Medium',
            color: warning ? '#F79009' : '#E11900',
            fontSize: 14,
          }}
        >
          {error}
        </Typography>
        {children}
      </Box>
    );
  },
);
