import {
  LocalizationProvider,
  SingleInputDateRangeField,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { CalenderIcon1Svg } from "../../svgs";
import "../../assets/components/styles.css";
import { themeColors, themeFonts } from "../../configs";

export const SingleInputDateRangePicker = ({
  value,
  onChange,
  placeholder,
}: {
  value?: any;
  onChange?: any;
  placeholder?: any;
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
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        slots={{ field: SingleInputDateRangeField }}
        slotProps={{
          textField: {
            InputProps: {
              endAdornment: <CalenderIcon1Svg />,
              placeholder: `${placeholder ? placeholder : " "}`,
            },
          },
        }}
        sx={{
          "& .MuiInputBase-root.MuiOutlinedInput-root": {
            borderRadius: "5px",
            fontSize: "12px",
            fontFamily: themeFonts["Poppins-SemiBold"],
            height: "39px",
            width: "195px",
            color: themeColors["#0C345D"],
          },
          "& input": {
            paddingY: "8px",
          },
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            width: "100%",
            borderColor: themeColors["#0C345D"],
          },
          "& .MuiPickersCalendarHeader-labelContainer.css-cyfsxc-MuiPickersCalendarHeader-labelContainer":
            {
              position: "absolute !important",
              right: "117px",
            },
        }}
        calendars={1}
        showDaysOutsideCurrentMonth={true}
        dayOfWeekFormatter={customDayOfWeekFormatter}
        onChange={onChange}
        value={value}
        format="DD/MM/YY"
      />
    </LocalizationProvider>
  );
};
