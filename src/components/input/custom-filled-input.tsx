import {
  Box,
  FormHelperText,
  InputBase,
  InputProps,
  TextFieldProps,
  Typography,
} from "@mui/material";

import { ReactNode } from "react";
import { themeColors, themeFonts } from "../../configs";
import { ErrorStatusMessage } from "./error-status-message";

interface CustomFilledInputProps extends InputProps {
  label?: string;
  placeholder?: string;
  value?: any;
  errorStatus?: string;
  disableValue?: boolean;
  disabled?: boolean;
  titleComponent?: ReactNode;
  formatValue?: (value: string) => string;
  onChangeValue?: (e: string) => void;
  textFieldProps?: TextFieldProps;
  direction?: string;
  height?: string;
  border?: string;
  fontSize?: string;
  fontWeight?: string;
  paddingTop?: any;
  backgroundColor?: any;
  color?: any;
  borderRadius?: any;
  Color?: any;
  alignItems?: any;
  marginTop?: any;
  onBlur?: any;
  helperText?: any;
  helperTextProps?: any;
}
export const CustomFilledInput = ({
  label,
  placeholder = label,
  value = "",
  onChangeValue,
  errorStatus,
  disableValue,
  disabled,
  formatValue = (value) => value,
  titleComponent,
  textFieldProps,
  height,
  border,
  fontSize,
  fontWeight,
  paddingTop,
  backgroundColor,
  color,
  Color,
  borderRadius,
  alignItems,
  marginTop,
  onBlur,
  helperText,
  helperTextProps,
  direction = "ltr",
  ...rest
}: CustomFilledInputProps) => {
  return (
    <Box sx={{ width: "100%", paddingTop: paddingTop ? { paddingTop } : "" }}>
      {label && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontWeight: fontWeight ? { fontWeight } : "600",
              color: themeColors["#000000"],
              fontSize: fontSize ? { fontSize } : 16,
            }}
          >
            {label}
          </Typography>
          {titleComponent}
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: alignItems ? { alignItems } : "center",
          fontFamily: themeFonts["Poppins-Regular"],
          backgroundColor: backgroundColor ? { backgroundColor } : "",
          color: themeColors["#323B4B"],
          border: border ? { border } : "1px solid #1C223E6E",
          fontSize: 14,
          borderRadius: borderRadius ? { borderRadius } : "5px",
          paddingX: 1.5,
          height: height ? { height } : 45,
          marginTop: 1,
          boxShadow: `${
            !!errorStatus && "0 0 0 2px " + themeColors["#E11900"]
          }`,
        }}
      >
        <InputBase
          {...rest}
          placeholder={placeholder}
          disabled={disabled}
          sx={{
            fontFamily: themeFonts["Poppins-Regular"],
            color: color ? { color } : `${themeColors["rgb(0 0 0 / 50%)"]} `,
            fontSize: 12,
            marginLeft: 0.5,
            marginTop: marginTop ? { marginTop } : "",
            flex: 1,
            direction: direction,
            "& .MuiInputBase-input": {
              fontFamily: themeFonts["Poppins-Regular"],
              color: color ? { color } : `${themeColors["rgb(0 0 0 / 50%)"]}`,
              fontSize: 14,
            },
          }}
          value={!disableValue ? formatValue(value) : undefined}
          onChange={(e: any) => {
            if (onChangeValue) onChangeValue(e);
          }}
          error={!!errorStatus}
          inputProps={{
            ...textFieldProps?.inputProps,
          }}
        />
      </Box>

      {!!helperText && (
        <FormHelperText
          sx={{
            fontFamily: themeFonts["Poppins-Bold"],
            color: themeColors["#FF3939"],
            fontSize: 14,
            marginLeft: 0,
          }}
          {...helperTextProps}
        >
          {helperText}
        </FormHelperText>
      )}
      <ErrorStatusMessage error={errorStatus} />
    </Box>
  );
};
