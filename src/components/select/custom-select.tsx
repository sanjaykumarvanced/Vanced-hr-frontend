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
  helperText?: any;
  value?: string;
  onChange?: (value: string) => void;
  errorStatus?: string;
  defaultValue?: any;
  name?: any;
  color?: any;
}

export const CustomSelect = ({
  label,
  options,
  helperText,
  value,
  onChange,
  errorStatus,
  name,
  defaultValue,
  color,
}: CustomSelectProps) => {
  const [selectValue, setSelectValue] = useState(value ?? "");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
    if (onChange) onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      {label && <CustomLabel label={label} fontSize="14px" />}

      <Select
        value={selectValue.toString()}
        onChange={handleChange}
        IconComponent={() => <DownArrowIcon2 height={10} />}
        defaultValue={defaultValue ? defaultValue : ""}
        name={name}
        sx={{
          height: 39,
          borderRadius: 2,
          color: color ? color : "rgb(0 0 0 / 50%)",
          fontSize: "14px",
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
        error={!!errorStatus}
      >
        {options.map((item, index) => (
          <MenuItem
            key={`custom-select-option-${index}`}
            value={item.value}
            sx={{
              fontSize: "14px",
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>

      {helperText && (
        <FormHelperText
          sx={{
            fontFamily: themeFonts["Poppins-Bold"],
            color: themeColors["#FF3939"],
            fontSize: 14,
            marginLeft: 0,
          }}
        >
          {helperText}
        </FormHelperText>
      )}
      {/* <ErrorStatusMessage error={errorStatus} /> */}
    </FormControl>
  );
};
