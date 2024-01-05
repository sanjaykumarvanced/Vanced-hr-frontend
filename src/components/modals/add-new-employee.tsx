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
import {
  useCreateNewEmployeeMutation,
  useUpdateEmployeeDetailMutation,
} from "../apis/employeeListApi";
import { toast } from "react-toastify";
import { Avatar, Profile } from "../../pngs";
import { CustomLabel } from "../label";
import { EmployeeDetails } from "../../pages/admin/employee-details/employee-details";
import { useState } from "react";
import {
  useUpdateImageMutation,
  useUploadImageMutation,
} from "../apis/imageApi";
import { apiBaseUrl } from "../consts/api-url.const";

const validationSchema = Yup.object({
  userName: Yup.string().required("User Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  // password: Yup.string().required("Password is required"),
  role: Yup.string().required("Role is required"),
  birthday: Yup.string().required("Date of Birth is required"),
  joiningDate: Yup.string().required("Joining Date is required"),
  department: Yup.string().required("Department is required"),
  address: Yup.string().required("Address is required"),
  gender: Yup.string().required("Gender is required"),
});

export const AddNewEmployeeDialog = (props: any) => {
  debugger;
  const { onClose, open, refetch, editedData } = props;
  const [image, setImage] = useState<any>("");
  const handleClose = () => {
    onClose();
  };
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0] as any;
    setImage(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedImageUrl(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };
  const [addNewEmployee] = useCreateNewEmployeeMutation();
  const [mutate] = useUploadImageMutation();
  const [updateImage] = useUpdateImageMutation();
  const [updateEmployeeDetail] = useUpdateEmployeeDetailMutation();
  const parseDateString = (dateString: any) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };
  const handleSubmit = async () => {
    debugger;
    const passwordChanged = formManager.values.password !== "";
    const personalInformationData = {
      telephones: formManager.values.telephones !== "",
      nationality: formManager.values.nationality !== "",
      maritalStatus: formManager.values.maritalStatus !== "",
      // religion: formManager.values.religion,
    };
    const bankInformationDetails =
      formManager.values.bankInformation.bankName !== "" ||
      formManager.values.bankInformation.bankAccountNumber !== "" ||
      formManager.values.bankInformation.ifscCode !== "" ||
      formManager.values.bankInformation.panNo !== "";

    const emergencyContactsData =
      formManager.values.emergencyContact.primary.name !== "" ||
      formManager.values.emergencyContact.primary.relationship !== "" ||
      formManager.values.emergencyContact.primary.phone !== "" ||
      formManager.values.emergencyContact.secondary.name !== "" ||
      formManager.values.emergencyContact.secondary.relationship !== "" ||
      formManager.values.emergencyContact.secondary.phone !== "";

    const education = formManager.values.education?.map((edu: any) => ({
      institution: edu.institution,
      degree: edu.degree,
      fieldOfStudy: edu.fieldOfStudy,
      startYear: edu.startYear,
      endYear: edu.endYear,
    }));
    const experience = formManager.values.experience?.map((exp: any) => ({
      jobTitle: exp.jobTitle,
      companyName: exp.companyName,
      startDate: exp.startDate,
      endDate: exp.endDate,
    }));
    if (editedData?.action === "edit") {
      try {
        const payload: any = {
          id: formManager.values.id,
          userName: formManager.values.userName,
          firstName: formManager.values.firstName,
          lastName: formManager.values.lastName,
          role: formManager.values.role,
          email: formManager.values.email,
          birthday: formManager.values.birthday,
          designation: formManager.values.department,
          gender: formManager.values.gender,
          employeeId: formManager.values.employeeId,
          address: formManager.values.address,
          dateOfJoining: formManager.values.joiningDate,
        };
        if (passwordChanged) {
          payload.password = formManager.values.password;
        }
        if (personalInformationData) {
          payload.personalInformation = formManager.values.personalInformation;
        }
        if (emergencyContactsData) {
          payload.emergencyContact = formManager.values.emergencyContact;
        }
        if (bankInformationDetails) {
          payload.bankInformation = formManager.values.bankInformation;
        }

        if (education.length !== 0) {
          payload.education = formManager.values.education;
        }
        if (experience.length !== 0) {
          payload.experience = formManager.values.experience;
        }
        const response = await updateEmployeeDetail(payload).unwrap();
        toast.success(response.message);
        if (response) {
          if (image) {
            const formData = new FormData();
            formData.append("image", image);
            const uploadImg = {
              id: formManager.values.id,
              image: formData,
            } as any;
            await updateImage(uploadImg).unwrap();
          }
        }
      } catch (error: any) {
        console.error("Error applying for leave:", error);
        toast.error(error.data.message);
      }
    } else {
      try {
        const addEmployee: any = {
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
        };
        if (personalInformationData) {
          addEmployee.personalInformation =
            formManager.values.personalInformation;
        }
        if (emergencyContactsData) {
          addEmployee.emergencyContact = formManager.values.emergencyContact;
        }
        if (bankInformationDetails) {
          addEmployee.bankInformation = formManager.values.bankInformation;
        }

        if (education.length !== 0) {
          addEmployee.education = formManager.values.education;
        }
        if (experience.length !== 0) {
          addEmployee.experience = formManager.values.experience;
        }
        const res = await addNewEmployee(addEmployee).unwrap();
        toast.success(res.message);
        console.log(res, "res");

        if (res) {
          if (image) {
            const formData = new FormData();
            formData.append("image", image);
            const uploadImg = {
              id: res.userId,
              image: formData,
            } as any;
            await mutate(uploadImg).unwrap();
          }
        }
      } catch (error: any) {
        console.error("Error applying for leave:", error);
        toast.error(error.data.message);
      }
    }
    onClose();
    refetch();
  };

  const formManager: any = useFormik({
    initialValues: {
      id: editedData?.id || "",
      employeeId: editedData?.employeeId || "",
      userName: editedData?.userName || "",
      firstName: editedData?.firstName || "",
      lastName: editedData?.lastName || "",
      role: editedData?.role || "",
      password: editedData?.password || "",
      birthday: editedData?.birthday
        ? parseDateString(editedData.birthday)
        : null,
      email: editedData?.email || "",
      joiningDate: editedData?.joiningDate
        ? parseDateString(editedData.joiningDate)
        : null,
      department: editedData?.department || "",
      address: editedData?.address || "",
      gender: editedData?.gender || "",
      telephones: editedData?.telephones || [],
      nationality: editedData?.nationality || "",
      maritalStatus: editedData?.maritalStatus || "",
      emergencyContact: {
        primary: {
          name: editedData?.emergencyContact?.primary?.name || "",
          relationship:
            editedData?.emergencyContact?.primary?.relationship || "",
          phone: editedData?.emergencyContact?.primary?.phone || [],
        },
        secondary: {
          name: editedData?.emergencyContact?.secondary?.name || "",
          relationship:
            editedData?.emergencyContact?.secondary?.relationship || "",
          phone: editedData?.emergencyContact?.secondary?.phone || [],
        },
      },
      bankInformation: {
        bankName: editedData?.bankInformation?.bankName || "",
        bankAccountNumber: editedData?.bankInformation?.bankAccountNumber || "",
        ifscCode: editedData?.bankInformation?.ifscCode || "",
        panNo: editedData?.bankInformation?.panNo || "",
      },
      education:
        editedData?.education?.map((edu: any) => ({
          institution: edu.institution || "",
          degree: edu.degree || "",
          fieldOfStudy: edu.fieldOfStudy || "",
          startYear: edu.startYear || "",
          endYear: edu.endYear || "",
        })) || [],

      experience:
        editedData?.experience?.map((exp: any) => ({
          jobTitle: exp.jobTitle || "",
          companyName: exp.companyName || "",
          startDate: exp.startDate || "",
          endDate: exp.endDate || "",
        })) || [],
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  console.log(formManager, editedData);

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
        {editedData.action === "view"
          ? "Employee Profile Info"
          : editedData.action === "edit"
          ? "Edit Employee detail"
          : "New Employee"}
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
            height: "calc(100vh - 116px)",
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
              <img
                src={
                  selectedImageUrl
                    ? selectedImageUrl
                    : editedData.action === "edit" ||
                      editedData.action === "view"
                    ? apiBaseUrl + "/" + editedData.image
                    : Avatar
                }
                alt="Profile Pic"
                height={80}
                width={80}
              />
            </Box>
            {editedData.action !== "view" && (
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
                    {image === "" ? "Upload New Photo" : "Image Uploaded"}
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleImageChange}
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
            )}
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
                disabled={editedData.action === "view"}
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
                disabled={editedData.action === "view"}
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
                disabled={editedData.action === "view"}
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
                disabled={editedData.action === "view"}
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
                label={"Role"}
                options={[
                  { label: "Manager", value: "manager" },
                  { label: "HR", value: "hr" },
                  { label: "Employee", value: "employee" },
                ]}
                value={formManager.values.role}
                onChange={(selectedValue: any) => {
                  formManager.handleChange("role")(selectedValue);
                }}
                helperText={formManager.touched.role && formManager.errors.role}
                name={"role"}
                disabled={editedData.action === "view"}
              />
              {/* <CustomFilledInput
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
              /> */}
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
                disabled={editedData.action === "view"}
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
                disabled={editedData.action === "view"}
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
                disabled={editedData.action === "view"}
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
                disabled={editedData.action === "view"}
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
                disabled={editedData.action === "view"}
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
              disabled={editedData.action === "view"}
            />
          </Grid>
          <EmployeeDetails formManager={formManager} editedData={editedData} />
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
            {editedData.action !== "view" && (
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
            )}
          </Box>
        </DialogActions>
      </form>
    </Drawer>
  );
};
