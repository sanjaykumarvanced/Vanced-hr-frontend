import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { CalenderIcon1Svg } from '../../svgs';
import { themeColors } from '../../configs';
import '../../assets/components/styles.css';

export const SingleInputDateRangePicker = () => {
  const customDayOfWeekFormatter = (dayAbbreviation: string) => {
    debugger;
    const daysAbbreviations = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const dayIndex = daysAbbreviations.indexOf(dayAbbreviation);

    if (dayIndex !== -1) {
      const daysFullNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return daysFullNames[dayIndex];
    }

    return dayAbbreviation; // Return the abbreviation as-is if not found
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={['SingleInputDateRangeField']}> */}

      <DateRangePicker
        slots={{ field: SingleInputDateRangeField }}
        slotProps={{ textField: { InputProps: { endAdornment: <CalenderIcon1Svg /> } } }}
        sx={{
          '& .MuiInputBase-root.MuiOutlinedInput-root': {
            backgroundColor: themeColors['#F2F2F2'],
            borderRadius: '8px',
            fontSize: '10px',
            minWidth: '212px',
          },
          '& input': {
            paddingY: '8px',
          },
          '& fieldset.MuiOutlinedInput-notchedOutline': {
            border: '0 !important',
          },
          '& .MuiPickersCalendarHeader-labelContainer.css-cyfsxc-MuiPickersCalendarHeader-labelContainer':
            {
              position: 'absolute !important',
              /* left: inherit; */
              right: '117px',
            },
        }}
        calendars={1}
        //defaultCalendarMonth={3}
        showDaysOutsideCurrentMonth={true}
        fixedWeekNumber={6}
        dayOfWeekFormatter={customDayOfWeekFormatter}
      />
      {/* </DemoContainer> */}
    </LocalizationProvider>
  );
};
