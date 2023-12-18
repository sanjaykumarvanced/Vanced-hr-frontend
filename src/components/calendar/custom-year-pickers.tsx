import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalenderIcon1Svg } from "../../svgs";
import "../../assets/components/styles.css";
import { DatePicker } from "@mui/x-date-pickers";
import { CustomLabel } from "../label";
import { themeColors, themeFonts } from "../../configs";
import { useState } from "react";
import { FormHelperText } from "@mui/material";

export const CustomYearPicker = ({
  label,
  width,
  placeholder,
  fontFamily,
  color,
  fontSize,
  format,
  value = "",
  onChange,
  name,
  helperText,
  minDate,
  disabled,
  maxDate,
}: {
  label?: any;
  width?: any;
  placeholder?: any;
  fontFamily?: keyof typeof themeFonts;
  color?: any;
  fontSize?: any;
  format?: any;
  value?: any;
  onChange?: any;
  name?: any;
  helperText?: any;
  minDate?: any;
  disabled?: any;
  maxDate?: any;
}) => {
 

  const [selectValue, setSelectValue] = useState(value ?? "");
  const handleDateChange = (date: any) => {
    setSelectValue(date);

    if (onChange) onChange(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {label && <CustomLabel label={label} fontSize="14px" />}
      <DatePicker
        slots={{
          openPickerIcon: CalenderIcon1Svg,
        }}
        slotProps={{
          textField: {
            InputProps: {
              placeholder: `${placeholder ? placeholder : ""}`,
            },
          },
        }}
        views={["year"]}
        onChange={handleDateChange}
        value={selectValue}
        sx={{
          "& .MuiInputBase-root.MuiOutlinedInput-root": {
            borderRadius: "5px",
            fontSize: fontSize ? { fontSize } : "12px",
            height: "39px",
            fontFamily: { fontFamily },
            color: { color },
          },
          "& input": {
            paddingY: "0px",
          },
          "& .MuiPickersCalendarHeader-labelContainer.css-cyfsxc-MuiPickersCalendarHeader-labelContainer":
            {
              position: "absolute !important",
              right: "117px",
            },
          "&.MuiFormControl-root.MuiTextField-root": {
            marginTop: "0px",
            width: width ? { width } : "100%",
          },
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.23) !important",
          },
        }}
        showDaysOutsideCurrentMonth={true}
        minDate={minDate}
        disabled={disabled}
        maxDate={maxDate}
      />
      {helperText && (
        <FormHelperText
          sx={{
            fontFamily: themeFonts["Poppins-Bold"],
            color: themeColors["#FF3939"],
            fontSize: 10,
            marginLeft: 0,
            position: "absolute",
            bottom: "-15px",
          }}
        >
          {helperText}
        </FormHelperText>
      )}
    </LocalizationProvider>
  );
};
