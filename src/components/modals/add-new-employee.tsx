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
import * as Yup from "yup";
import { CustomInputField } from "../input/custom-input-field";
import { CustomFilledSelect } from "../select";

const validationSchema = Yup.object({
  employeeName: Yup.string().required("Employee Name is required"),
  emailId: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  joiningDate: Yup.string().required("Joining Date is required"),
  department: Yup.string().required("Department is required"),
  contactNo: Yup.string().required("Contact No. is required"),
  gender: Yup.string().required("Gender is required"),
});

export const AddNewEmployeeDialog = (props: any) => {
  debugger;
  const { onClose, open, refetch, editedData, data } = props;
  const handleClose = () => {
    onClose();
  };
  //   const [createApplyLeaveRequest] = useCreateApplyLeaveRequestMutation();
  //   const employeeRoles = Roles[2].key;
  //   const [selectedLeaveType, setSelectedLeaveType] = useState(
  //     convertTextToUppercase(editedData?.leaveType) || "FULL_DAY_LEAVE"
  //   );
  //   const employeeOptions =
  //     data &&
  //     data
  //       .filter((option: any) => option.role !== employeeRoles)
  //       .map((option: any) => ({
  //         id: option._id,
  //         label: `${option.firstName || ""} ${option.lastName || ""}`,
  //       }));
  //   const user = useSelector((state: any) => state.authentication.user);
  //   const Id = user[0].id;
  //   const adminId = "652d31fc3d93ae86647ec0fe";
  //   const { refetch: leaveStatusRefetch }: any = useGetRequestedLeavesByIdQuery({
  //     employerId: adminId,
  //   });
  //   const [updateApi] = useUpdateLeaveRequestMutation();

  //   const handleSubmitLeaveRequest = async () => {
  //     debugger;
  //     if (editedData?.action === "edit") {
  //       try {
  //         const formattedStartTime = dayjs(formManager.values.startTime).format(
  //           "YYYY-MM-DDTHH:mm"
  //         );
  //         const formattedEndTime = dayjs(formManager.values.endTime).format(
  //           "YYYY-MM-DDTHH:mm"
  //         );

  //         const response = await updateApi({
  //           id: formManager.values.id,
  //           employee: Id,
  //           leaveType: formManager.values.leaveType,
  //           notify: formManager.values.notify,
  //           startDate: formManager.values.startDate,
  //           endDate: formManager.values.endDate,
  //           noOfDays: formManager.values.noOfDays,
  //           reason: formManager.values.reason,
  //           durations: formManager.values.durations,
  //           startTime: formattedStartTime,
  //           endTime: formattedEndTime,
  //         }).unwrap();
  //         toast.success(response.message);
  //       } catch (error: any) {
  //         console.error("Error applying for leave:", error);
  //         toast.error(error.data.message);
  //       }
  //       onClose();
  //     } else {
  //       try {
  //         let formattedStartTime = "";
  //         let formattedEndTime = "";

  //         if (formManager.values.leaveType === "SHORT_LEAVE") {
  //           formattedStartTime = dayjs(formManager.values.startTime).format(
  //             "YYYY-MM-DDTHH:mm"
  //           );
  //           formattedEndTime = dayjs(formManager.values.endTime).format(
  //             "YYYY-MM-DDTHH:mm"
  //           );
  //         }
  //         const res = await createApplyLeaveRequest({
  //           employee: Id,
  //           leaveType: formManager.values.leaveType,
  //           notify: formManager.values.notify,
  //           startDate: formManager.values.startDate,
  //           endDate: formManager.values.endDate,
  //           noOfDays: formManager.values.noOfDays,
  //           reason: formManager.values.reason,
  //           durations: formManager.values.durations,
  //           startTime: formattedStartTime,
  //           endTime: formattedEndTime,
  //         }).unwrap();
  //         toast.success(res.message);
  //       } catch (error: any) {
  //         console.error("Error applying for leave:", error);
  //         toast.error(error.data.message);
  //       }
  //       onClose();
  //     }
  //     refetch();
  //     leaveStatusRefetch();
  //   };
  const parseDateString = (dateString: any) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };
  const handleSubmit = () => {
    return;
  };
  const formManager: any = useFormik({
    initialValues: {
      id: editedData?.id || "",
      employeeName: editedData?.employeeName || "",
      emailId: editedData?.mail || [],
      joiningDate: editedData?.joiningDate
        ? parseDateString(editedData.joiningDate)
        : null,
      department: editedData?.department || "",
      contactNo: editedData?.contactNo || "",
      gender: editedData?.gender || "",
    },
    validationSchema,
    onSubmit: () => {
      handleSubmit();
    },
  });

  //   function calculateNumberOfDays(startDate: any, endDate: any) {
  //     if (startDate && endDate) {
  //       const start = dayjs(startDate);
  //       const end = dayjs(endDate);
  //       const days = end.diff(start, "days");
  //       return days;
  //     }
  //     return 0;
  //   }

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
        New Employee
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
            gap: "26px",
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
              <CustomFilledInput
                autoFocus={true}
                label="Employee Name"
                type="text"
                placeholder="Username*"
                name="employeeName"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.employeeName}
                onChangeValue={(value: any) =>
                  formManager.setFieldValue("employeeName", value)
                }
                error={
                  formManager.touched.employeeName &&
                  Boolean(formManager.errors.employeeName)
                }
                helperText={
                  formManager.touched.employeeName &&
                  formManager.errors.employeeName
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
                position: "relative",
              }}
            >
              <CustomDatePicker
                label={"Joining Date"}
                format={"DD/MM/YYYY"}
                name="joiningDate"
                fontFamily="Poppins-Regular"
                fontSize={"14px"}
                value={dayjs(formManager.values.joiningDate)}
                onChange={(selectedValue: any) => {
                  formManager.setFieldValue(
                    "joiningDate",
                    selectedValue.format("YYYY-MM-DD")
                  );
                }}
                helperText={
                  formManager.touched.joiningDate &&
                  formManager.errors.joiningDate
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
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            <Grid item xs={6}>
              <CustomFilledInput
                autoFocus={true}
                label="Email ID"
                type="email"
                placeholder="@gmail.com"
                name="emailId"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.emailId}
                onChangeValue={(value: any) =>
                  formManager.setFieldValue("emailId", value)
                }
                error={
                  formManager.touched.emailId &&
                  Boolean(formManager.errors.emailId)
                }
                helperText={
                  formManager.touched.emailId && formManager.errors.emailId
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
                position: "relative",
              }}
            >
              <CustomSelect
                label={"Department"}
                options={[
                  { label: "$ 57890", value: "$ 57890" },
                  { label: "$ 67543", value: "$ 67543" },
                  { label: "$ 64785", value: "$ 64785" },
                ]}
                value={formManager.values.department}
                onChange={(selectedValue: any) => {
                  formManager.handleChange("department")(selectedValue);
                }}
                name={"department"}
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
            <Grid item xs={6}>
              <CustomFilledInput
                autoFocus={true}
                label="Contact No."
                type="text"
                placeholder="@gmail.com"
                name="contactNo"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.contactNo}
                onChangeValue={(value: any) =>
                  formManager.setFieldValue("contactNo", value)
                }
                error={
                  formManager.touched.contactNo &&
                  Boolean(formManager.errors.contactNo)
                }
                helperText={
                  formManager.touched.contactNo && formManager.errors.contactNo
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
                position: "relative",
              }}
            >
              <CustomSelect
                label={"Gender"}
                options={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "female" },
                ]}
                value={formManager.values.gender}
                onChange={(selectedValue: any) => {
                  formManager.handleChange("gender")(selectedValue);
                }}
                name={"gender"}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "end",
            paddingTop: "20px",
            paddingBottom: "26px",
            paddingX: "26px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              // disabled={!formManager.isValid}
              sx={{
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
                paddingX: "40px",
              }}
              // onClick={handleSubmit}
            >
              Save
            </Button>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
};
