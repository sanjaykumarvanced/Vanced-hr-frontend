import { themeColors, themeFonts } from "../../configs";
import { Box, InputBase } from "@mui/material";
import { IconSearch1Svg, SearchIcon, SearchIcon2, SearchIcon3 } from "../../svgs";

interface SearchFilledInputProps {
  size?: "medium" | "large" | "small";
  variant?: "filled" | "outlined";
  placeholder?: string;
  height?: string;
  width?: string;
  onChange?: any;
}

export const SearchFilledInput = ({
  size = "medium",
  variant = "filled",
  placeholder = "Search",
  height,
  width,
  onChange,
}: SearchFilledInputProps) => {
  const containerStyle = {
    backgroundColor:
      variant === "filled" ? themeColors["#F2F2F2"] : "transparent",
    borderRadius: size === "medium" ? "11px" : "8px",
    border:
      variant === "filled" ? "none" : `1px solid ${themeColors["#E9EEF2"]}`,
    height: size === "medium" ? 48 : height ? { height } : 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: size === "medium" ? 2 : 1.5,
  };

  const inputStyle = {
    paddingX: size === "medium" ? 2 : 1.3,
    fontFamily: themeFonts["Poppins-Regular"],
    fontSize: size === "medium" ? 14 : 15,
  };

  return (
    <Box sx={containerStyle}>
      <SearchIcon3 />
      <InputBase
        placeholder={placeholder}
        sx={inputStyle}
        onChange={onChange}
      />
    </Box>
  );
};
