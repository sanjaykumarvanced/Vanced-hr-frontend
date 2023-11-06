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
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { useCreateApplyLeaveRequestMutation } from "../apis/applyLeaveApi";

const validationSchema = Yup.object({
  leaveType: Yup.string().required("Leave Type is required"),
  notify: Yup.string().required("Notify is required"),
  startDate: Yup.string().required("From is required"),
  endDate: Yup.string().required("To is required"),
  noOfDays: Yup.number().required("Number of Days is required"),
  reason: Yup.string().required("Reason is required"),
});

export const RequestLeavesDialog = (props: any) => {
  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };
  const [createApplyLeaveRequest] = useCreateApplyLeaveRequestMutation();
  const Id = useSelector((state: any) => state.authentication.user);
  const handleSubmit = async () => {
    try {
      // Make an API request to apply for leave
      const response = await createApplyLeaveRequest({
        employee: Id,
        leaveType: formik.values.leaveType,
        notify: formik.values.notify,
        startDate: formik.values.startDate,
        endDate: formik.values.endDate,
        noOfDays: formik.values.noOfDays,
        reason: formik.values.reason,
      });

      // Handle success - You can close the dialog and show a success message
      console.log("Leave request submitted successfully", response);

      // Close the dialog
      onClose();
    } catch (error) {
      // Handle error - Display an error message or log the error
      console.error("Error applying for leave:", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      leaveType: "",
      notify: "",
      startDate: "",
      endDate: "",
      noOfDays: parseInt(""),
      reason: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
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
      <form onSubmit={formik.handleSubmit}>
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
                  {
                    label: "Casual leave : 10 days available",
                    value: "Casual",
                  },
                  { label: "Full Day Leave", value: "FullDay" },
                  { label: "Half Day Leave", value: "HalfDay" },
                ]}
                onChange={(selectedValue: any) => {
                  formik.handleChange("leaveType")(selectedValue);
                }}
                value={formik.values.leaveType}
                name="leaveType"
              />
            </Grid>
            <Grid item xs={6}>
              <CustomFilledInput
                label="Notify"
                placeholder="Search Employee"
                height="39px"
                fontSize="12px"
                border="1px solid rgb(0 0 0 / 30%)"
                onChangeValue={formik.handleChange}
                value={formik.values.notify}
                name="notify"
                error={formik.touched.notify && Boolean(formik.errors.notify)}
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
              <CustomDatePicker
                label={"From"}
                format={"DD/MM/YYYY"}
                onChange={(selectedValue: any) => {
                  formik.setFieldValue(
                    "startDate",
                    selectedValue.format("YYYY-MM-DD")
                  ); // Use setFieldValue
                }}
                value={dayjs(formik.values.startDate)}
                name="startDate"
              />
            </Grid>
            <Grid item xs={4}>
              <CustomDatePicker
                label={"To"}
                format={"DD/MM/YYYY"}
                onChange={(selectedValue: any) => {
                  formik.setFieldValue(
                    "endDate",
                    selectedValue.format("YYYY-MM-DD")
                  ); // Use setFieldValue
                }}
                value={dayjs(formik.values.endDate)}
                name="endDate"
              />
            </Grid>
            <Grid item xs={4}>
              <CustomFilledInput
                label="Number of Days"
                type="number"
                placeholder="0 days"
                height="39px"
                fontSize="12px"
                border="1px solid rgb(0 0 0 / 30%)"
                onChangeValue={formik.handleChange}
                value={formik.values.noOfDays}
                name="noOfDays"
                error={
                  formik.touched.noOfDays && Boolean(formik.errors.noOfDays)
                }
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
              onChange={formik.handleChange}
              value={formik.values.reason}
              name="reason"
              error={formik.touched.reason && Boolean(formik.errors.reason)}
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
              type="submit"
              onClick={handleSubmit}
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
      </form>
    </Dialog>
  );
};
