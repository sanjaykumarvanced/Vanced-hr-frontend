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
import { CustomDatePicker } from "../calendar/custom-date-picker";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { CustomLabel } from "../label";
import {
  useCreateNewPerformanceMutation,
  useUpdatePerformanceDetailMutation,
} from "../apis/performanceApi";
import { useSelector } from "react-redux";
import { Roles } from "../consts/consts";
import dayjs from "dayjs";

const validationSchema = Yup.object({
  employee: Yup.string().required("Employee Name is required"),
  projectName: Yup.string().required("Project Name is required"),
  comments: Yup.string().required("Comment is required"),
  date: Yup.string().required("Date is required"),
});

export const AddNewPerformanceDialog = (props: any) => {
  debugger;
  const { onClose, open, refetch, employeeList, projectList, editedData } =
    props;
  const handleClose = () => {
    onClose();
  };

  const [addNewPerformance] = useCreateNewPerformanceMutation();
  const [updateApi] = useUpdatePerformanceDetailMutation();

  const user = useSelector((state: any) => state.authentication.user);
  const addedBy = user[0].id;
  const adminRoles = Roles[0].key;
  console.log(adminRoles, "user");
  const employeeOptions =
    employeeList &&
    employeeList
      .filter((option: any) => option.role !== adminRoles)
      .map((option: any) => ({
        id: option._id,
        label: `${option.firstName || ""} ${option.lastName || ""}`,
        value: option._id,
      }));
  const projectOptions =
    projectList &&
    projectList
      .filter((option: any) => option.role !== adminRoles)
      .map((option: any) => ({
        id: option._id,
        label: option.projectName || "",
        value: option._id,
      }));

  const handleSubmit = async () => {
    if (editedData?.action === "edit") {
      try {
        const response = await updateApi({
          id: formManager.values.id,
          addedBy: formManager.values.addedBy,
          employee: formManager.values.employee,
          projectName: formManager.values.projectName,
          comments: formManager.values.comments,
          date: formManager.values.date,
        }).unwrap();
        toast.success(response.message);
      } catch (error: any) {
        console.error("Error applying for leave:", error);
        toast.error(error.data.message);
      }
    } else {
      try {
        const res = await addNewPerformance({
          addedBy: formManager.values.addedBy,
          employee: formManager.values.employee,
          projectName: formManager.values.projectName,
          comments: formManager.values.comments,
          date: formManager.values.date,
        }).unwrap();
        toast.success(res.message);
      } catch (error: any) {
        console.error("Error applying for leave:", error);
        toast.error(error.data.message);
      }
    }

    onClose();
    refetch();
  };
  const parseDateString = (dateString: any) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  const formManager: any = useFormik({
    initialValues: {
      id: editedData?.id || "",
      employee: editedData?.employeeID || "",
      addedBy: editedData?.addedById || addedBy,
      projectName: editedData?.projectId || "",
      comments: editedData?.comments || "",
      date: editedData?.date ? parseDateString(editedData?.date) : "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  console.log(employeeOptions);

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        flexShrink: 0,
        "& .MuiDialog-paper": {
          width: "calc(100% - 1070px)",
          maxWidth: "calc(100% - 1070px)",
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
        {editedData?.action === "edit"
          ? "Edit Performance Appraisal"
          : "Give Performance Appraisal"}
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
            paddingX: "27px",
            display: "flex",
            gap: "16px",
            flexDirection: "column",
            borderBottom: "0",
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
            <Grid
              item
              xs={8}
              sx={{
                paddingRight: "0px !important",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <CustomSelect
                label={"Employee Name"}
                options={employeeOptions}
                onChange={(selectedValue: any) => {
                  debugger;
                  const selectedEmployeeIDs = employeeOptions?.find(
                    (val: any) => val.value === selectedValue && val.id
                  );
                  const filteredEmployeeIDs = selectedEmployeeIDs.id;
                  formManager.setFieldValue("employee", filteredEmployeeIDs);
                }}
                value={formManager.values.employee}
                name={"employee"}
                helperText={
                  formManager.touched.employee && formManager.errors.employee
                }
              />
            </Grid>
            <Grid
              item
              xs={5}
              sx={{
                paddingRight: "0px !important",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <CustomDatePicker
                label={"Select Date"}
                format={"DD/MM/YYYY"}
                name="date"
                fontFamily="Poppins-Regular"
                fontSize={"14px"}
                value={dayjs(formManager.values.date)}
                onChange={(selectedValue: any) => {
                  formManager.setFieldValue(
                    "date",
                    selectedValue.format("YYYY-MM-DD")
                  );
                }}
                helperText={formManager.touched.date && formManager.errors.date}
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
              xs={12}
              sx={{
                paddingRight: "0px !important",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <CustomSelect
                label={"Project Name"}
                options={projectOptions}
                value={formManager.values.projectName}
                onChange={(selectedValue: any) => {
                  debugger;
                  const selectedProjectIDs = projectOptions?.find(
                    (val: any) => val.value === selectedValue && val.id
                  );
                  const filteredProjectIDs = selectedProjectIDs.id;
                  formManager.setFieldValue("projectName", filteredProjectIDs);
                }}
                helperText={
                  formManager.touched.projectName &&
                  formManager.errors.projectName
                }
                name={"projectName"}
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
              position: "relative",
            }}
          >
            <CustomLabel label={"Feedback / Comments"} fontSize="14px" />
            <TextField
              multiline
              rows={3.6}
              placeholder=""
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
                  fontSize: 10,
                  marginLeft: 0,
                  position: "absolute",
                  bottom: "-15px",
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
              value={formManager.values.comments}
              name="comments"
              error={
                formManager.touched.comments &&
                Boolean(formManager.errors.comments)
              }
              helperText={
                formManager.touched.comments && formManager.errors.comments
              }
            />
          </Grid>
        </DialogContent>

        <DialogActions
          sx={{
            justifyContent: "end",
            paddingY: "10px",
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
              sx={{
                width: 117,
                height: 36,
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
              // disabled={!formManager.isValid}
              sx={{
                width: 117,
                height: 36,
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
              Save
            </Button>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
};
