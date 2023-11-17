import {
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { themeFonts, themeColors } from "../../configs";
import { CloseIconSvg1, CrossMarkIcon, LineIconSvg } from "../../svgs";
import { SearchInput } from "../input/search-input";

export const SearchBarDialog = (props: any) => {
  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <Box>
      <Box sx={{ float: "right" }}>
        <Dialog
          onClose={handleClose}
          open={open}
          sx={{
            "& .css-1rfs30z-MuiPaper-root-MuiDialog-paper": {
              width: "536px",
              borderRadius: "6px",
              position: "absolute",
              top: 0,
            },
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 20,
              top: 15,
              height: "25px",
              width: "25px",
            }}
          >
            <CloseIconSvg1 />
          </IconButton>
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "16px",
              color: themeColors["#0C345D"],
              padding: "16px",
            }}
          >
            Search
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Box
            sx={{
              maxWidth: "100%",
              padding: "16px",
            }}
          >
            <SearchInput
              variant="outlined"
              placeholder={"Search"}
              height="45px !important"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingY: "9px",
              paddingX: "16px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                lineHeight: "20px",
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "14px",
                color: themeColors["#000000"],
              }}
            >
              Are you looking for <LineIconSvg />
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "15px",
              paddingX: "16px",
              paddingY: "5px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                lineHeight: "17px",
                background: themeColors["#DBEAF1"],
                paddingX: "16px",
                paddingY: "4px",
                width: "max-content",
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "12px",
                color: themeColors["#28AAE1"],
              }}
            >
              Employee
              <IconButton>
                <CrossMarkIcon />
              </IconButton>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                lineHeight: "17px",
                background: themeColors["#DBEAF1"],
                paddingX: "16px",
                paddingY: "4px",
                width: "max-content",
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "12px",
                color: themeColors["#28AAE1"],
              }}
            >
              Apply Leaves
              <IconButton>
                <CrossMarkIcon />
              </IconButton>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: themeColors["#DBEAF1"],
                lineHeight: "17px",
                paddingX: "16px",
                paddingY: "4px",
                width: "max-content",
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "12px",
                color: themeColors["#28AAE1"],
              }}
            >
              Attendance Approval
              <IconButton>
                <CrossMarkIcon />
              </IconButton>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingY: "22px",
              paddingX: "16px",
            }}
          >
            <Button
              variant="text"
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "12px",
                color: themeColors["#0C345D"],
                textDecoration: "underline",
                height: 27,
                paddingX: 1,
              }}
            >
              Clear Recent
            </Button>
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
};
