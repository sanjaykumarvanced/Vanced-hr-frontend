import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { themeFonts, themeColors } from "../../configs";
import { CloseIconSvg1 } from "../../svgs";
import { CustomSelect } from "../select/custom-select";
import { CustomFilledInput } from "../input";
import { CustomDatePicker } from "../calendar/custom-date-picker";
import { CustomLabel } from "../label";

export const RequestLeavesDialog = (props: any) => {
  const { onClose, open, data } = props;
  console.log(data);
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        flexShrink: 0,
        "& .css-1rfs30z-MuiPaper-root-MuiDialog-paper": {
          width: "850px",
          maxWidth: "850px",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontFamily: themeFonts["Poppins-SemiBold"],
          fontSize: "15px",
          color: themeColors["#0A2A4A"],
          m: 0,
          paddingY: "17px",
          paddingX: "27px",
        }}
      >
        Request Leaves
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 20,
          top: 13,
        }}
      >
        <CloseIconSvg1 />
      </IconButton>
      <DialogContent
        dividers
        sx={{
          borderBottom: 0,
          paddingX: "27px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            paddingRight: "0px !important",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Grid item xs={6}>
            <CustomSelect
              label="Select Type of leave you want to apply"
              options={[
                { label: "Casual leave : 10 days available", value: "Casual " },
                { label: "Full Day Leave", value: "FullDay " },
                { label: "Half Day Leave", value: "HalfDay" },
              ]}
              value={"Casual"}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomFilledInput
              autoFocus={true}
              type="text"
              label="Notify"
              placeholder="Search Employee"
              disableValue
              height="39px"
              fontSize="12px"
              border="1px solid rgb(0 0 0 / 30%)"
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            paddingRight: "0px !important",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <Grid item xs={4}>
            <CustomDatePicker label={"From"} />
          </Grid>
          <Grid item xs={4}>
            <CustomDatePicker label={"To"} />
          </Grid>
          <Grid item xs={4}>
            <CustomFilledInput
              autoFocus={true}
              type="text"
              label="Number of Days"
              placeholder="0 days"
              disableValue
              height="39px"
              fontSize="12px"
              border="1px solid rgb(0 0 0 / 30%)"
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            paddingRight: "0px !important",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <CustomLabel label={"Reason"} fontSize="12px" />
          <TextField
            multiline
            rows={3.4}
            placeholder="Write Here"
            sx={{
              "&.MuiFormControl-root.MuiTextField-root": {
                width: "100%",
                fontSize: "12px",
              },
            }}
          />
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "26px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              width: 117,
              height: 39,
              borderRadius: "5px",
              border: "1px solid #0C345D",
              color: themeColors["#0C345D"],
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "15px",
              "&:hover": {
                backgroundColor: themeColors["#0C345D"],
                color: themeColors["#FFFFFF"],
              },
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              width: 117,
              height: 39,
              borderRadius: "5px",
              backgroundColor: themeColors["#0C345D"],
              color: themeColors["#FFFFFF"],
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "15px",
              "&:hover": {
                backgroundColor: "transparent",
                color: themeColors["#0C345D"],
                border: "1px solid #0C345D",
              },
            }}
          >
            Request
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
