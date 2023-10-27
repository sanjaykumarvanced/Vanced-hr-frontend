import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { themeFonts, themeColors } from "../../configs";
import { ErrorStatusMessage } from "../input/error-status-message";
import { CustomLabel } from "../label";
import { DownArrowIcon2 } from "../../svgs";

export type CustomSelectOption = {
  label: string;
  value: string;
};

interface CustomSelectProps {
  label?: string;
  options: Array<CustomSelectOption>;
  helperText?: string;
  value?: string;
  onChange?: (value: string) => void;
  errorStatus?: string;
  dark?: boolean;
  defaultValue?: any;
}

export const CustomSelect = ({
  label,
  options,
  helperText,
  value,
  onChange,
  errorStatus,
  dark,
  defaultValue,
}: CustomSelectProps) => {
  const [selectValue, setSelectValue] = useState(value ?? "");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
    if (onChange) onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      {label && <CustomLabel label={label} fontSize="12px" />}

      <Select
        value={selectValue.toString()}
        onChange={handleChange}
        IconComponent={() => <DownArrowIcon2 />}
        defaultValue={defaultValue ? defaultValue : ""}
        sx={{
          height: 39,
          borderRadius: 2,
          color: "rgb(0 0 0 / 50%)",
          fontSize: "12px",
          fontFamily: themeFonts["Poppins-Regular"],
          border: "1px solid rgb(0 0 0 / 30%)",
          padding: "11px",
          cursor: "pointer",
          "& .MuiInputBase-input.MuiOutlinedInput-input.MuiSelect-outlined.MuiSelect-select":
            {
              position: "relative",
              overflow: "overlay",
              padding: 0,
              zIndex: 1,
            },
          "& svg": {
            position: "absolute",
            right: "13px",
          },
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            border: "0px",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              "&.MuiPaper-root.MuiPopover-paper.MuiMenu-paper": {
                marginTop: "7px !important",
              },
            },
          },
        }}
      >
        {options.map((item, index) => (
          <MenuItem key={`custom-select-option-${index}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>

      {helperText && (
        <FormHelperText
          sx={{
            fontFamily: themeFonts["Poppins-SemiBold"],
            color: themeColors["#8A94A6"],
            fontSize: 14,
            marginLeft: 0,
          }}
        >
          {helperText}
        </FormHelperText>
      )}
      <ErrorStatusMessage error={errorStatus} />
    </FormControl>
  );
};
