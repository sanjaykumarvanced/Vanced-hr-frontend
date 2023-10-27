import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { CalenderIcon1Svg } from "../../svgs";
import { themeColors } from "../../configs";
import "../../assets/components/styles.css";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers";
import { CustomLabel } from "../label";

export const SingleInputDateRangePicker = ({ label }: { label?: any }) => {
  const customDayOfWeekFormatter = (dayAbbreviation: string) => {
    debugger;
    const daysAbbreviations = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const dayIndex = daysAbbreviations.indexOf(dayAbbreviation);

    if (dayIndex !== -1) {
      const daysFullNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return daysFullNames[dayIndex];
    }

    return dayAbbreviation; // Return the abbreviation as-is if not found
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={['SingleInputDateRangeField']}> */}
      {label && <CustomLabel label={label} fontSize="12px" />}
      <DatePicker
        slots={{
          openPickerIcon: CalenderIcon1Svg,
        }}
        sx={{
          "& .MuiInputBase-root.MuiOutlinedInput-root": {
            borderRadius: "5px",
            fontSize: "12px",
            height: "39px",
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
          },
        }}
        showDaysOutsideCurrentMonth={true}
        fixedWeekNumber={6}
        dayOfWeekFormatter={customDayOfWeekFormatter}
      />
    </LocalizationProvider>
  );
};
