import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { themeColors, themeFonts } from '../../configs';
import { ErrorStatusMessage } from '../input/error-status-message';
import { FormHelperText } from '@mui/material';
interface CustomDatePickerCalendarProps {
  value?: any;
  onChange?: any;
  errorSx?: any;
  helperText?: any;
  helperTextProps?: any;
  disableValue?: boolean;
  formatValue?: (value: string) => string;
  errorStatus?: string;
  name?: string;
}
export const CustomDatePickerCalendar = ({
  value = '',
  onChange,
  errorStatus,
  formatValue = (value) => value,
  disableValue,
  errorSx,
  helperText,
  helperTextProps,
  name,
}: CustomDatePickerCalendarProps) => {
  
  const [selectValue, setSelectValue] = React.useState(value ?? '');
  const today = dayjs()
  //.format('YYYY-MM-DD');
  console.log(today, 'today');

  const handleDateChange = (date: any) => {
    // Update the selectValue state
    setSelectValue(date);

    // Call the provided onChange function if it exists
    if (onChange) onChange(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['MobileDatePicker']}
        sx={{
          '& p.MuiTypography-body2.MuiTypography-root': {
            color: themeColors['#1C223E'],
            fontFamily: themeFonts['Poppins-SemiBold'],
            fontSize: '13px',
          },
          '&.MuiStack-root': {
            padding: 0,
            width: '100% !important',
          },
          '& .MuiStack-root.css-11a8txn-MuiStack-root': {
            width: '100%',
            overflow: 'hidden',
          },
        }}
      >
        <DemoItem label="Date Of admit">
          <MobileDatePicker
            // defaultValue={dayjs('2022-04-17').format('DD-MM-YYYY')}
            sx={{
              '& .MuiInputBase-formControl.MuiInputBase-root.MuiOutlinedInput-root': {
                height: '45px',
                borderRadius: '8px',
                background: themeColors['#F2F2F2'],
                fontFamily: themeFonts['Poppins-Regular'],
                fontSize: '14px',
              },
              '& fieldset.MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiFormControl-root.MuiTextField-root': { margin: 0 },
            }}
            // type={name}
            onChange={handleDateChange} // Update Formik state
            value={selectValue}
            maxDate={today}
          />
        </DemoItem>
      </DemoContainer>
      {!!helperText && (
        <FormHelperText
          sx={{
            fontFamily: themeFonts['Poppins-Bold'],
            color: themeColors['#FF3939'],
            fontSize: 14,
            marginLeft: 0,
          }}
          {...helperTextProps}
        >
          {helperText}
        </FormHelperText>
      )}
      <ErrorStatusMessage error={errorStatus} sx={errorSx} />
    </LocalizationProvider>
  );
};
