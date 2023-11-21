import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalenderIcon1Svg } from "../../svgs";
import "../../assets/components/styles.css";
import { DatePicker } from "@mui/x-date-pickers";
import { CustomLabel } from "../label";
import { themeFonts } from "../../configs";
import { useState } from "react";

export const CustomDatePicker = ({
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
}) => {
  const customDayOfWeekFormatter = (dayAbbreviation: string) => {
    const daysAbbreviations = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const dayIndex = daysAbbreviations.indexOf(dayAbbreviation);

    if (dayIndex === -1) {
      const daysFullNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return daysFullNames[dayIndex];
    }

    return dayAbbreviation;
  };

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
        dayOfWeekFormatter={customDayOfWeekFormatter}
        format={`${format ? format : "MM/YY"}`}
      />
    </LocalizationProvider>
  );
};
