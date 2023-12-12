import { Box, Button } from "@mui/material";
import { SearchFilledInput } from "./search-filled-input";

export const SearchComponents = ({
  searchTitle,
  Component,
  isEmpty,
  hideDate = false,
  onSearchChange,
}: {
  searchTitle: string;
  Component?: () => JSX.Element;
  isEmpty: boolean;
  hideDate?: boolean;
  onSearchChange?: any;
}) => {
  return (
    <Box
      sx={{
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 1,
      }}
    >
      {!isEmpty && (
        <Button size="small" sx={{ position: "relative", marginRight: "20px" }}>
          Clear Filters
        </Button>
      )}

      <Box
        sx={{
          maxWidth: 187,
          marginRight: "20px",
        }}
      >
        <SearchFilledInput
          size="small"
          variant="filled"
          placeholder={searchTitle}
        //   onChange={(event: any) => onSearchChange(event.target.value)}
          height="39px"
        />
      </Box>

      {Component && <Component />}
    </Box>
  );
};
