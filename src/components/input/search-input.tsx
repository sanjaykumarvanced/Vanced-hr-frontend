import { useState } from "react";
import { themeColors, themeFonts } from "../../configs";
import { Box, IconButton, InputBase } from "@mui/material";
import { EllipsisIconSvg1, MicIconSvg, SearchIcon2 } from "../../svgs";

interface SearchInputProps {
  size?: "medium" | "large" | "small";
  variant?: "filled" | "outlined";
  placeholder?: string;
  height?: string;
  width?: string;
}

export const SearchInput = ({
  size = "medium",
  variant = "filled",
  placeholder = "Search",
  height,
  width,
}: SearchInputProps) => {
  const [name, setName] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const containerStyle = {
    backgroundColor:
      variant === "filled" ? themeColors["#F2F2F2"] : "transparent",
    borderRadius: "6px !important",
    border:
      variant === "filled" ? "none" : `1px solid ${themeColors["#707070"]}`,
    height: height ? { height } : "45px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingX: size === "medium" ? 2 : 1.5,
  };

  const inputStyle = {
    paddingX: size === "medium" ? 1.75 : 1.2,
    fontFamily: themeFonts["Poppins-Regular"],
    fontSize: 16,
    width: "100%",
    "& input.MuiInputBase-input": {
      paddingY: "0px",
    },
  };

  return (
    <Box sx={containerStyle}>
      <SearchIcon2 />
      <InputBase
        placeholder={placeholder}
        sx={inputStyle}
        value={name}
        onChange={handleChange}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{
            height: "30px",
            width: "30px",
          }}
        >
          <MicIconSvg />
        </IconButton>
        <IconButton
          sx={{
            height: "30px",
            width: "30px",
          }}
        >
          <EllipsisIconSvg1 />
        </IconButton>
      </Box>
    </Box>
  );
};
