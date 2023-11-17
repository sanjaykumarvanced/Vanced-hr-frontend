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
  Typography,
} from "@mui/material";
import { themeFonts, themeColors } from "../../configs";
import { CloseIconSvg1 } from "../../svgs";
import { CustomFilledInput } from "../input";
import { CustomLabel } from "../label";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  leaveType: Yup.string().required("Leave Type is required"),
  reason: Yup.string().required("Reason is required"),
});

export const AddNewPostDialog = (props: any) => {
  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };
  // const { data } = useGetEmployeeListQuery<any>();
  // const searchEmployee: any =
  //   data && data.map((val: any) => `${val.firstName} ${val.lastName}`);
  // const user = useSelector((state: any) => state.authentication.user);
  // const Id = user.map((val: any) => val.id);
  // const id = "652d31fc3d93ae86647ec0fe";
  // console.log(data, "data", searchEmployee);

  // const { refetch: leaveStatusRefetch }: any = useGetRequestedLeavesByIdQuery({
  //   employerId: id,
  // });
  // const handleSubmit = async () => {
  //   try {
  //     // Make an API request to apply for leave
  //     const response = await createApplyLeaveRequest({
  //       employee: Id,
  //       leaveType: formik.values.leaveType,
  //       notify: formik.values.notify,
  //       startDate: formik.values.startDate,
  //       endDate: formik.values.endDate,
  //       noOfDays: formik.values.noOfDays,
  //       reason: formik.values.reason,
  //     });

  //     // Handle success - You can close the dialog and show a success message
  //     console.log("Leave request submitted successfully", response);

  //     // Close the dialog
  //     onClose();
  //   } catch (error) {
  //     // Handle error - Display an error message or log the error
  //     console.error("Error applying for leave:", error);
  //   }
  //   refetch();
  //   leaveStatusRefetch();
  // };
  const formik = useFormik({
    initialValues: {
      leaveType: "",
      reason: "",
    },
    validationSchema,
    onSubmit: handleClose,
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
          fontSize: "16px",
          color: themeColors["#0A2A4A"],
          m: 0,
          paddingY: "17px",
          paddingX: "27px",
        }}
      >
        Add New Post
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 20,
          top: 19,
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
            paddingX: "27px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Grid item xs={12}>
            <CustomFilledInput
              label="Title"
              placeholder=""
              type="text"
              height="50px"
              fontSize="14px"
              border="1px solid rgb(0 0 0 / 30%)"
              disableValue
              helperText={formik.touched.reason && formik.errors.reason}
            />
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
            <CustomLabel label={"Description"} fontSize="14px" />
            <TextField
              multiline
              rows={7}
              placeholder="Write Your Post Here"
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
                  color: themeColors["#323B4B"],
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
          <Grid
            item
            xs={12}
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
                // onClick={handleUpdateImage}
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
              justifyContent: "end",
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
              // onClick={handleSubmit}
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
              post
            </Button>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
};
