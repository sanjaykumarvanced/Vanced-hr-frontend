import { Box, Button, Grid, Typography } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { CustomFilledInput } from "../../../components/input";
import { CustomYearPicker } from "../../../components/calendar/custom-year-pickers";

export const Education = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        background: themeColors["#FFFFFF"],
        boxShadow: "0px 3px 20px 0px rgb(0 0 0 / 10%)",
        borderRadius: "5px",
        padding: "20px",
        gap: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: themeFonts["Poppins-SemiBold"],
            fontSize: "12px",
            color: themeColors["#000000"],
            marginBottom: "16px",
          }}
        >
          Education 1
        </Typography>
        <Grid
          item
          xs={12}
          sx={{
            background: themeColors["rgb(241 241 241 / 55%)"],
            borderRadius: "5px",
            padding: "20px",
            gap: "16px",
            display: "flex",
            flexDirection: "column",
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
                label="Institution Name"
                type="text"
                placeholder=""
                name="institutionName"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                // value={formManager.values.role}
                // onChangeValue={formManager.handleChange}
                // error={
                //   formManager.touched.role && Boolean(formManager.errors.role)
                // }
                // helperText={formManager.touched.role && formManager.errors.role}
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
                label="Degree"
                type="text"
                placeholder=""
                name="degree"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                // value={formManager.values.role}
                // onChangeValue={formManager.handleChange}
                // error={
                //   formManager.touched.role && Boolean(formManager.errors.role)
                // }
                // helperText={formManager.touched.role && formManager.errors.role}
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
                label="Field Of Study"
                type="text"
                placeholder=""
                name="fieldOfStudy"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                // value={formManager.values.role}
                // onChangeValue={formManager.handleChange}
                // error={
                //   formManager.touched.role && Boolean(formManager.errors.role)
                // }
                // helperText={formManager.touched.role && formManager.errors.role}
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
                  <CustomYearPicker
                    label={"Start Year"}
                    name="birthday"
                    fontFamily="Poppins-Regular"
                    fontSize={"14px"}
                    // value={dayjs(formManager.values.birthday)}
                    // onChange={(selectedValue: any) => {
                    //   formManager.setFieldValue(
                    //     "birthday",
                    //     selectedValue.format("YYYY-MM-DD")
                    //   );
                    // }}
                    // helperText={
                    //   formManager.touched.birthday &&
                    //   formManager.errors.birthday
                    // }
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
                  <CustomYearPicker
                    label={"End Year"}
                    name="joiningDate"
                    fontFamily="Poppins-Regular"
                    fontSize={"14px"}
                    // value={dayjs(formManager.values.joiningDate)}
                    // onChange={(selectedValue: any) => {
                    //   formManager.setFieldValue(
                    //     "joiningDate",
                    //     selectedValue.format("YYYY-MM-DD")
                    //   );
                    // }}
                    // helperText={
                    //   formManager.touched.joiningDate &&
                    //   formManager.errors.joiningDate
                    // }
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Button
          // type="submit"
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
            marginTop: "16px",
          }}
          // onClick={handleSubmit}
        >
          Add
        </Button>
      </Box>
    </Grid>
  );
};
