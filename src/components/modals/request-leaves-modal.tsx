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
import { Roles, durationsOptions, leaveOptions } from "../consts/consts";
import { useState } from "react";
import { toast } from "react-toastify";
import { convertTextToUppercase } from "../../utils/helpers";
import { CustomTimePicker } from "../calendar/cutom-time-picker";

const validationSchema = Yup.object({
  leaveType: Yup.string().required("Leave Type is required"),
  notify: Yup.array()
    .min(1, "At least one recipient must be selected") // Minimum length of 1
    .of(Yup.string()),
  startDate: Yup.string().required("From is required"),
  endDate: Yup.string().required("To is required"),
  noOfDays: Yup.number().required("Number of Days is required"),
  reason: Yup.string().required("Reason is required"),
  durations: Yup.string().required("Duration is required"),
  startTime: Yup.string().required("Start Time is required"),
  endTime: Yup.string().required("End Time is required"),
});

export const RequestLeavesDialog = (props: any) => {
  const { onClose, open, refetch, editedData, employeeList } = props;
  const handleClose = () => {
    onClose();
  };
  const [createApplyLeaveRequest] = useCreateApplyLeaveRequestMutation();
  const employeeRoles = Roles[2].key;
  const [selectedLeaveType, setSelectedLeaveType] = useState(
    convertTextToUppercase(editedData?.leaveType) || "FULL_DAY_LEAVE"
  );
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

  const handleSubmitLeaveRequest = async () => {
    debugger;
    if (editedData?.action === "edit") {
      try {
        const formattedStartTime = dayjs(formManager.values.startTime).format(
          "YYYY-MM-DDTHH:mm"
        );
        const formattedEndTime = dayjs(formManager.values.endTime).format(
          "YYYY-MM-DDTHH:mm"
        );

        const response = await updateApi({
          id: formManager.values.id,
          employee: Id,
          leaveType: formManager.values.leaveType,
          notify: formManager.values.notify,
          startDate: formManager.values.startDate,
          endDate: formManager.values.endDate,
          noOfDays: formManager.values.noOfDays,
          reason: formManager.values.reason,
          durations: formManager.values.durations,
          startTime: formattedStartTime,
          endTime: formattedEndTime,
        }).unwrap();
        toast.success(response.message);
      } catch (error: any) {
        console.error("Error applying for leave:", error);
        toast.error(error.data.message);
      }
      onClose();
    } else {
      try {
        let formattedStartTime = "";
        let formattedEndTime = "";

        if (formManager.values.leaveType == "SHORT_LEAVE") {
          formattedStartTime = dayjs(formManager.values.startTime).format(
            "YYYY-MM-DDTHH:mm"
          );
          formattedEndTime = dayjs(formManager.values.endTime).format(
            "YYYY-MM-DDTHH:mm"
          );
        }
        const res = await createApplyLeaveRequest({
          employee: Id,
          leaveType: formManager.values.leaveType,
          notify: formManager.values.notify,
          startDate: formManager.values.startDate,
          endDate: formManager.values.endDate,
          noOfDays: formManager.values.noOfDays,
          reason: formManager.values.reason,
          durations: formManager.values.durations,
          startTime: formattedStartTime,
          endTime: formattedEndTime,
        }).unwrap();
        toast.success(res.message);
      } catch (error: any) {
        console.error("Error applying for leave:", error);
        toast.error(error.data.message);
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

  const formManager: any = useFormik({
    initialValues: {
      id: editedData?.id || "",
      leaveType: convertTextToUppercase(editedData?.leaveType) || "",
      notify: editedData?.notify || [],
      startDate: editedData?.from ? parseDateString(editedData.from) : null,
      endDate: editedData?.to ? parseDateString(editedData.to) : null,
      noOfDays: editedData?.noOfDays || parseInt(""),
      reason: editedData?.reason || "",
      durations: convertTextToUppercase(editedData?.durations) || "",
      startTime: dayjs(editedData?.startTime) || "",
      endTime: dayjs(editedData?.endTime) || "",
    },
    validationSchema,
    onSubmit: () => {
      handleSubmitLeaveRequest();
    },
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
        "& .MuiDialog-paper": {
          width: "100%",
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
      <form onSubmit={formManager.handleSubmit}>
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
                  formManager.handleChange("leaveType")(selectedValue);
                  setSelectedLeaveType(selectedValue);
                  if (selectedValue == "SHORT_LEAVE") {
                    formManager.handleChange("durations")("");
                  }
                  if (selectedValue == "HALF_DAY_LEAVE") {
                    formManager.setFieldValue("startTime", "");
                    formManager.setFieldValue("endTime", "");
                  }
                }}
                value={formManager.values.leaveType}
                name="leaveType"
                color="#2F353B"
                helperText={
                  formManager.touched.leaveType && formManager.errors.leaveType
                }
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
                  "& button.MuiAutocomplete-clearIndicator svg": {
                    margin: 0,
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
                    helperText={
                      formManager.touched.notify && formManager.errors.notify
                    }
                  />
                )}
                onChange={(event, selectedValues) => {
                  const filteredEmployeeIDs = selectedValues.map(
                    (val) => val.id
                  );
                  formManager.setFieldValue("notify", filteredEmployeeIDs);
                }}
                value={formManager.values.notify?.map((employeeID: any) => {
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
            <Grid
              item
              xs={
                selectedLeaveType === "SHORT_LEAVE" ||
                selectedLeaveType === "HALF_DAY_LEAVE"
                  ? 6
                  : 4
              }
            >
              <CustomDatePicker
                label={
                  selectedLeaveType === "SHORT_LEAVE" ||
                  selectedLeaveType === "HALF_DAY_LEAVE"
                    ? "Date"
                    : "From"
                }
                format={"DD/MM/YYYY"}
                onChange={(selectedValue: any) => {
                  formManager.setFieldValue(
                    "startDate",
                    selectedValue.format("YYYY-MM-DD")
                  );
                  const endDateValue =
                    formManager.values.leaveType === "SHORT_LEAVE" ||
                    formManager.values.leaveType === "HALF_DAY_LEAVE"
                      ? selectedValue.format("YYYY-MM-DD")
                      : "";
                  formManager.setFieldValue("endDate", endDateValue);
                  const days =
                    calculateNumberOfDays(
                      selectedValue.format("YYYY-MM-DD"),
                      formManager.values.endDate
                    ) + 1;
                  formManager.setFieldValue("noOfDays", days);
                }}
                minDate={dayjs().startOf("day")}
                value={dayjs(formManager.values.startDate)}
                name="startDate"
                fontFamily="Poppins-Regular"
                fontSize={"14px"}
                helperText={
                  formManager.touched.startDate && formManager.errors.startDate
                }
              />
            </Grid>
            {selectedLeaveType === "HALF_DAY_LEAVE" && (
              <Grid item xs={6}>
                <CustomSelect
                  label="Durations"
                  options={durationsOptions}
                  onChange={(selectedValue: any) => {
                    formManager.handleChange("durations")(selectedValue);
                  }}
                  value={formManager.values.durations}
                  name="durations"
                  color="#2F353B"
                  // helperText={
                  //   formManager.touched.durations &&
                  //   formManager.errors.durations
                  // }
                />
              </Grid>
            )}
            {selectedLeaveType === "SHORT_LEAVE" && (
              <>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <Grid item xs={6}>
                    <CustomTimePicker
                      label="Start Time"
                      value={formManager.values.startTime}
                      onChange={(selectedValue: any) => {
                        formManager.setFieldValue("startTime", selectedValue);
                      }}
                      helperText={
                        formManager.touched.startTime &&
                        formManager.errors.startTime
                      }
                      // sx={{
                      //   "& .MuiInputBase-root": {
                      //     width: "100%",
                      //     fontSize: "14px",
                      //     height: "39px",
                      //   },
                      //   "& .MuiSvgIcon-root": {
                      //     height: "20px",
                      //   },
                      // }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomTimePicker
                      label="End Time"
                      value={formManager.values.endTime}
                      onChange={(selectedValue: any) => {
                        formManager.setFieldValue("endTime", selectedValue);
                      }}
                      helperText={
                        formManager.touched.endTime &&
                        formManager.errors.endTime
                      }
                    />
                  </Grid>
                </Grid>
              </>
            )}
            {selectedLeaveType === "FULL_DAY_LEAVE" && (
              <>
                <Grid item xs={4}>
                  <CustomDatePicker
                    label={"To"}
                    format={"DD/MM/YYYY"}
                    onChange={(selectedValue: any) => {
                      formManager.setFieldValue(
                        "endDate",
                        selectedValue.format("YYYY-MM-DD")
                      );
                      const days =
                        calculateNumberOfDays(
                          formManager.values.startDate,
                          selectedValue.format("YYYY-MM-DD")
                        ) + 1;
                      formManager.setFieldValue("noOfDays", days);
                    }}
                    minDate={dayjs(formManager.values.startDate).startOf("day")}
                    value={dayjs(formManager.values.endDate)}
                    name="endDate"
                    fontFamily="Poppins-Regular"
                    fontSize={"14px"}
                    helperText={
                      formManager.touched.endDate && formManager.errors.endDate
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
                    value={formManager.values.noOfDays}
                    readOnly
                    helperText={
                      formManager.touched.noOfDays &&
                      formManager.errors.noOfDays
                    }
                  />
                </Grid>
              </>
            )}
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
                "& .MuiFormHelperText-root.Mui-error": {
                  fontFamily: themeFonts["Poppins-Bold"],
                  color: themeColors["#FF3939"],
                  fontSize: 14,
                  marginLeft: 0,
                },
                "& .MuiOutlinedInput-root.MuiInputBase-colorPrimary": {
                  fontFamily: themeFonts["Poppins-Regular"],
                  color: themeColors["#2F353B"],
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
              onChange={formManager.handleChange}
              value={formManager.values.reason}
              name="reason"
              error={
                formManager.touched.reason && Boolean(formManager.errors.reason)
              }
              helperText={
                formManager.touched.reason && formManager.errors.reason
              }
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
                "&.Mui-disabled": {
                  color: themeColors["#FFFFFF"],
                  opacity: 0.8,
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
