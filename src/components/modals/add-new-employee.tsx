import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { themeFonts, themeColors } from "../../configs";
import { CloseIconSvg1 } from "../../svgs";
import { CustomSelect } from "../select/custom-select";
import { CustomFilledInput } from "../input";
import { CustomDatePicker } from "../calendar/custom-date-picker";
import { useFormik } from "formik";
import dayjs from "dayjs";
import * as Yup from "yup";
import { useCreateNewEmployeeMutation } from "../apis/employeeListApi";
import { toast } from "react-toastify";
import { Profile } from "../../pngs";
import { CustomLabel } from "../label";
import { EmployeeDetails } from "../../pages/admin/employee-details/employee-details";

const validationSchema = Yup.object({
  userName: Yup.string().required("User Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  password: Yup.string().required("Password is required"),
  role: Yup.string().required("Role is required"),
  birthday: Yup.string().required("Gender is required"),
  joiningDate: Yup.string().required("Joining Date is required"),
  department: Yup.string().required("Department is required"),
  address: Yup.string().required("Contact No. is required"),
  gender: Yup.string().required("Gender is required"),
});

export const AddNewEmployeeDialog = (props: any) => {
  debugger;
  const { onClose, open, refetch } = props;
  const handleClose = () => {
    onClose();
  };

  const [addNewEmployee] = useCreateNewEmployeeMutation();

  const handleSubmit = async () => {
    debugger;

    try {
      const res = await addNewEmployee({
        userName: formManager.values.userName,
        firstName: formManager.values.firstName,
        lastName: formManager.values.lastName,
        password: formManager.values.password,
        role: formManager.values.role,
        email: formManager.values.email,
        birthday: formManager.values.birthday,
        designation: formManager.values.department,
        gender: formManager.values.gender,
        employeeId: formManager.values.employeeId,
        address: formManager.values.address,
        dateOfJoining: formManager.values.joiningDate,
      }).unwrap();
      toast.success(res.message);
    } catch (error: any) {
      console.error("Error applying for leave:", error);
      toast.error(error.data.message);
    }
    onClose();

    refetch();
  };
  const formManager: any = useFormik({
    initialValues: {
      id: "",
      employeeId: "",
      userName: "",
      firstName: "",
      lastName: "",
      role: "",
      password: "",
      birthday: "",
      email: "",
      joiningDate: null,
      department: "",
      address: "",
      gender: "",
    },
    validationSchema,
    onSubmit: () => {
      handleSubmit();
    },
  });

  return (
    <Drawer
      onClose={handleClose}
      open={open}
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "calc(100% - 800px)",
        },
      }}
      anchor="right"
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
            paddingX: "27px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: "calc(100vh - 150px)",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              paddingRight: "0px !important",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                maxWidth: "80px !important",
                maxHeight: "80px !important",
                borderRadius: "5px",
                overflow: "hidden",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={Profile} alt="Profile Pic" height={80} width={80} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Button
                  variant="outlined"
                  component="label"
                  sx={{
                    height: 36,
                    color: themeColors["#0C345D"],
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "14px",
                    paddingX: "16px",
                    border: "1px solid #707070",
                    borderStyle: "dashed",
                    paddingY: "10px",
                    borderRadius: 0,
                  }}
                  // onClick={handleUpdateImage}
                >
                  Upload New Photo
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    // onChange={handleImageChange}
                  />
                </Button>
                <Button
                  component="label"
                  sx={{
                    height: 36,
                    color: themeColors["#737373"],
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "14px",
                    paddingX: "15px",
                    paddingY: "10px",
                    borderRadius: 0,
                    backgroundColor: themeColors["#D4D4D4"],
                  }}
                  // onClick={handleReset}
                >
                  Reset
                </Button>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    color: themeColors["#1B64B8"],
                  }}
                >
                  ( Allowed PNG , JPG , JPEG ) ( Size : 1.0 MB )
                </Typography>
              </Box>
            </Box>
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
              xs={4}
              sx={{
                paddingRight: "0px !important",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <CustomFilledInput
                autoFocus={true}
                label="UserName*"
                type="text"
                placeholder="Username*"
                name="userName"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.userName}
                onChangeValue={formManager.handleChange}
                error={
                  formManager.touched.userName &&
                  Boolean(formManager.errors.userName)
                }
                helperText={
                  formManager.touched.userName && formManager.errors.userName
                }
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                paddingRight: "0px !important",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <CustomFilledInput
                autoFocus={true}
                label="First Name*"
                type="text"
                placeholder="Harsh"
                name="firstName"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.firstName}
                onChangeValue={formManager.handleChange}
                error={
                  formManager.touched.firstName &&
                  Boolean(formManager.errors.firstName)
                }
                helperText={
                  formManager.touched.firstName && formManager.errors.firstName
                }
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                paddingRight: "0px !important",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <CustomFilledInput
                autoFocus={true}
                label="Last Name*"
                type="text"
                placeholder="Roy"
                name="lastName"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.lastName}
                onChangeValue={formManager.handleChange}
                error={
                  formManager.touched.lastName &&
                  Boolean(formManager.errors.lastName)
                }
                helperText={
                  formManager.touched.lastName && formManager.errors.lastName
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
                label={"Designation"}
                options={[
                  { label: "Development", value: "Development" },
                  { label: "Designing", value: "Designing" },
                  { label: "Marketing", value: "Marketing" },
                ]}
                value={formManager.values.department}
                onChange={(selectedValue: any) => {
                  formManager.handleChange("department")(selectedValue);
                }}
                helperText={
                  formManager.touched.department &&
                  formManager.errors.department
                }
                name={"department"}
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
              <CustomFilledInput
                autoFocus={true}
                label="Role"
                type="tex"
                placeholder="Manager"
                name="role"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.role}
                onChangeValue={formManager.handleChange}
                error={
                  formManager.touched.role && Boolean(formManager.errors.role)
                }
                helperText={formManager.touched.role && formManager.errors.role}
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
                label={"Date of Birth*"}
                format={"DD/MM/YYYY"}
                name="birthday"
                fontFamily="Poppins-Regular"
                fontSize={"14px"}
                value={dayjs(formManager.values.birthday)}
                onChange={(selectedValue: any) => {
                  formManager.setFieldValue(
                    "birthday",
                    selectedValue.format("YYYY-MM-DD")
                  );
                }}
                helperText={
                  formManager.touched.birthday && formManager.errors.birthday
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
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                  { label: "Other", value: "Other" },
                ]}
                value={formManager.values.gender}
                onChange={(selectedValue: any) => {
                  formManager.handleChange("gender")(selectedValue);
                }}
                helperText={
                  formManager.touched.gender && formManager.errors.gender
                }
                name={"gender"}
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
              <CustomFilledInput
                autoFocus={true}
                label="Password*"
                type="password"
                placeholder="password"
                name="password"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.password}
                onChangeValue={formManager.handleChange}
                error={
                  formManager.touched.password &&
                  Boolean(formManager.errors.password)
                }
                helperText={
                  formManager.touched.password && formManager.errors.password
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
              <CustomFilledInput
                autoFocus={true}
                label="Email ID*"
                type="email"
                placeholder="example@1.com"
                name="email"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.email}
                onChangeValue={formManager.handleChange}
                error={
                  formManager.touched.email && Boolean(formManager.errors.email)
                }
                helperText={
                  formManager.touched.email && formManager.errors.email
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
              position: "relative",
            }}
          >
            <CustomLabel label={"Full Address*"} fontSize="14px" />
            <TextField
              multiline
              rows={1.5}
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
              value={formManager.values.address}
              name="address"
              error={
                formManager.touched.address &&
                Boolean(formManager.errors.address)
              }
              helperText={
                formManager.touched.address && formManager.errors.address
              }
            />
          </Grid>
          <EmployeeDetails />
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
    </Drawer>
  );
};
