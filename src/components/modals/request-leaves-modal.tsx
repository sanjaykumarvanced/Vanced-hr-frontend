import {
  Autocomplete,
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
import {
  useCreateApplyLeaveRequestMutation,
  useUpdateLeaveRequestMutation,
} from "../apis/applyLeaveApi";
import { useGetRequestedLeavesByIdQuery } from "../apis/requestedLeavesApi";
import { Roles, leaveOptions } from "../consts/consts";
import { useState } from "react";
import { toast } from "react-toastify";
import { convertSnakeToText } from "../../utils/helpers";

const validationSchema = Yup.object({
  leaveType: Yup.string().required("Leave Type is required"),
  startDate: Yup.string().required("From is required"),
  endDate: Yup.string().required("To is required"),
  noOfDays: Yup.number().required("Number of Days is required"),
  reason: Yup.string().required("Reason is required"),
});

export const RequestLeavesDialog = (props: any) => {
  debugger;
  const { onClose, open, refetch, editedData, employeeList } = props;
  const handleClose = () => {
    onClose();
  };
  const [createApplyLeaveRequest] = useCreateApplyLeaveRequestMutation();
  const employeeRoles = Roles[2].key;
  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  const employeeOptions =
    employeeList &&
    employeeList
      .filter((option: any) => option.role !== employeeRoles)
      .map((option: any) => ({
        id: option._id,
        label: `${option.firstName || ""} ${option.lastName || ""}`,
      }));

  const user = useSelector((state: any) => state.authentication.user);
  const Id = user[0].id;
  const adminId = "652d31fc3d93ae86647ec0fe";
  const { refetch: leaveStatusRefetch }: any = useGetRequestedLeavesByIdQuery({
    employerId: adminId,
  });
  const [updateApi] = useUpdateLeaveRequestMutation();
  const handleSubmit = async () => {
    if (editedData?.action === "edit") {
      try {
        await updateApi({
          id: formik.values.id,
          employee: Id,
          leaveType: formik.values.leaveType,
          notify: formik.values.notify,
          startDate: formik.values.startDate,
          endDate: formik.values.endDate,
          noOfDays: formik.values.noOfDays,
          reason: formik.values.reason,
        });
      } catch (error) {
        console.error("Error applying for leave:", error);
        toast.error("Something went wrong.");
      }
    } else {
      try {
        await createApplyLeaveRequest({
          employee: Id,
          leaveType: formik.values.leaveType,
          notify: formik.values.notify,
          startDate: formik.values.startDate,
          endDate: formik.values.endDate,
          noOfDays: formik.values.noOfDays,
          reason: formik.values.reason,
        });
      } catch (error) {
        console.error("Error applying for leave:", error);
        toast.error("Something went wrong.");
      }
      onClose();
    }
    refetch();
    leaveStatusRefetch();
  };
  const parseDateString = (dateString: any) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };
  debugger;
  // let ss = convertSnakeToText("FULL_DAY_LEAVE");
  const formik: any = useFormik({
    initialValues: {
      id: editedData?.id || "",
      leaveType: convertSnakeToText(editedData?.leaveType) || "",
      notify: editedData?.notify || [],
      startDate: editedData?.from ? parseDateString(editedData.from) : null,
      endDate: editedData?.to ? parseDateString(editedData.to) : null,
      noOfDays: editedData?.noOfDays || parseInt(""),
      reason: editedData?.reason || "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  function calculateNumberOfDays(startDate: any, endDate: any) {
    if (startDate && endDate) {
      const start = dayjs(startDate);
      const end = dayjs(endDate);
      const days = end.diff(start, "days");
      return days;
    }
    return 0;
  }
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
          fontSize: "16px",
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
          top: 16,
          height: "25px",
          width: "25px",
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
                options={leaveOptions}
                onChange={(selectedValue: any) => {
                  formik.handleChange("leaveType")(selectedValue);
                  setSelectedLeaveType(selectedValue);
                }}
                value={formik.values.leaveType}
                name="leaveType"
                color="#2F353B"
                helperText={formik.touched.leaveType && formik.errors.leaveType}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                paddingRight: "0px !important",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <CustomLabel label={"Notify"} fontSize="14px" />
              <Autocomplete
                multiple
                freeSolo
                id="combo-box-demo"
                options={employeeOptions}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root.MuiOutlinedInput-root": {
                    minHeight: "39px",
                  },
                  "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
                    padding: 0,
                  },
                  "& .MuiButtonBase-root.MuiChip-root.MuiChip-filled": {
                    height: "max-content",
                    margin: 0,
                  },
                  "& .MuiInputBase-root": {
                    gap: "5px",
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      "&.MuiFormControl-root.MuiTextField-root": {
                        width: "100%",
                        fontSize: "14px",
                        minHeight: "39px",
                      },
                      "& .MuiFormHelperText-root": {
                        fontFamily: themeFonts["Poppins-Bold"],
                        color: themeColors["#FF3939"],
                        fontSize: 14,
                        marginLeft: 0,
                      },
                      "& span.MuiChip-label.MuiChip-labelMedium": {
                        paddingZLeft: "9px",
                      },
                      "& svg.MuiSvgIcon-root": {
                        fontSize: "16px",
                        margin: "0 5px 0 -9px",
                      },
                    }}
                  />
                )}
                onChange={(event, selectedValues) => {
                  const filteredEmployeeIDs = selectedValues.map(
                    (val) => val.id
                  );
                  formik.setFieldValue("notify", filteredEmployeeIDs);
                }}
                value={formik.values.notify?.map((employeeID: any) => {
                  const employee = employeeOptions?.find(
                    (val: any) => val.id === employeeID
                  );
                  return employee;
                })}
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
                  );
                  const endDateValue =
                    formik.values.leaveType === "SHORT_LEAVE" ||
                    formik.values.leaveType === "HALF_DAY_LEAVE"
                      ? selectedValue.format("YYYY-MM-DD")
                      : "";
                  formik.setFieldValue("endDate", endDateValue);
                  const days =
                    calculateNumberOfDays(
                      selectedValue.format("YYYY-MM-DD"),
                      formik.values.endDate
                    ) + 1;
                  formik.setFieldValue("noOfDays", days);
                }}
                minDate={dayjs().startOf("day")}
                value={dayjs(formik.values.startDate)}
                name="startDate"
                fontFamily="Poppins-Regular"
                fontSize={"14px"}
                helperText={formik.touched.startDate && formik.errors.startDate}
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
                  );
                  const days =
                    calculateNumberOfDays(
                      formik.values.startDate,
                      selectedValue.format("YYYY-MM-DD")
                    ) + 1;
                  formik.setFieldValue("noOfDays", days);
                }}
                minDate={dayjs(formik.values.startDate).startOf("day")}
                value={dayjs(formik.values.endDate)}
                name="endDate"
                fontFamily="Poppins-Regular"
                fontSize={"14px"}
                helperText={formik.touched.endDate && formik.errors.endDate}
                disabled={
                  selectedLeaveType === "SHORT_LEAVE" ||
                  selectedLeaveType === "HALF_DAY_LEAVE"
                }
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
                value={formik.values.noOfDays}
                readOnly
                helperText={formik.touched.noOfDays && formik.errors.noOfDays}
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
            <CustomLabel label={"Reason"} fontSize="14px" />
            <TextField
              multiline
              rows={3.4}
              placeholder="Write Here"
              sx={{
                "&.MuiFormControl-root.MuiTextField-root": {
                  width: "100%",
                },
                "& .MuiInputBase-colorPrimary.Mui-error": {
                  color: themeColors["#323B4B"],
                  border: "1px solid #1C223E6E",
                  fontSize: 14,
                },
                "& .Mui-error": {
                  fontFamily: themeFonts["Poppins-Bold"],
                  color: themeColors["#FF3939"],
                  fontSize: 14,
                  marginLeft: 0,
                },
                "& .MuiOutlinedInput-root.MuiInputBase-colorPrimary": {
                  fontFamily: themeFonts["Poppins-Regular"],
                  color: themeColors["2F353B"],
                  fontSize: 14,
                },
                "& .Mui-error .MuiOutlinedInput-notchedOutline": {
                  border: 0,
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #1C223E6E",
                },
                "& :hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1C223E6E",
                },
              }}
              onChange={formik.handleChange}
              value={formik.values.reason}
              name="reason"
              error={formik.touched.reason && Boolean(formik.errors.reason)}
              helperText={formik.touched.reason && formik.errors.reason}
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
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={formik.isValid === false}
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
              // onClick={handleSubmit}
            >
              Request
            </Button>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
};
