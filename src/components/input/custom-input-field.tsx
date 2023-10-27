import * as React from "react";
import Box from "@mui/material/Box";
import { InputProps } from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { ReactNode } from "react";
import { themeColors, themeFonts } from "../../configs";
import { ErrorStatusMessage } from "./error-status-message";
import { FormHelperText } from "@mui/material";

interface CustomInputFieldProps extends InputProps {
  label?: string;
  placeholder?: string;
  type?: any;
  value?: string;
  errorStatus?: string;
  disableValue?: boolean;
  disabled?: boolean;
  titleComponent?: ReactNode;
  formatValue?: (value: string) => string;
  onChangeValue?: (value: string) => void;
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
  endAdornment?: any;
  fontFamily?: keyof typeof themeFonts;
  errorSx?: any;
  helperText?: any;
  helperTextProps?: any;
}
export const CustomInputField = ({
  label,
  placeholder = label,
  value = "",
  type,
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
  direction = "ltr",
  endAdornment,
  errorSx,
  fontFamily,
  helperText,
  helperTextProps,
  ...rest
}: CustomInputFieldProps) => {
  return (
    <Box sx={{ width: "100%", paddingTop: paddingTop ? { paddingTop } : "" }}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{titleComponent}</InputAdornment>
          ),
          endAdornment: endAdornment,
        }}
        sx={{
          "&.MuiFormControl-root.MuiTextField-root": {
            width: "100%",
            "& ::placeholder": {
              fontFamily: themeFonts["Poppins-Regular"],
              color: themeColors["#000000"],
              fontSize: "16px",
              opacity: 1,
            },
          },
          "& .MuiInputBase-root.MuiInput-root.MuiInput-underline": {
            paddingBottom: "8px",
          },
          "& input:-internal-autofill-selected": {
            backgroundColor: "transparent !important",
          },

          "& ::after": {
            borderBottom: "2px solid #000000 !important",
          },
          fontFamily: themeFonts["Poppins-Regular"],
          color: themeColors["#000000"],
          fontSize: "16px",
        }}
        variant="standard"
        placeholder={placeholder}
        value={!disableValue ? formatValue(value) : undefined}
        onChange={(e) => {
          if (onChangeValue) onChangeValue(e.target.value);
        }}
        onBlur={() => {
          if (onChangeValue) onChangeValue(value.trim());
        }}
        error={!!errorStatus}
        inputProps={{
          ...textFieldProps?.inputProps,
        }}
        type={type}
      />
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
