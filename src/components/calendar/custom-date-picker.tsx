import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalenderIcon1Svg } from "../../svgs";
import "../../assets/components/styles.css";
import { DatePicker } from "@mui/x-date-pickers";
import { CustomLabel } from "../label";

export const CustomDatePicker = ({ label }: { label?: any }) => {
  const customDayOfWeekFormatter = (dayAbbreviation: string) => {
    debugger;
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
            width: "100%",
          },
        }}
        showDaysOutsideCurrentMonth={true}
        dayOfWeekFormatter={customDayOfWeekFormatter}
        format={'DD/MM/YY'}
      />
    </LocalizationProvider>
  );
};
