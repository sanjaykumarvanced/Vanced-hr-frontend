import { Box, Button, Grid, Typography } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { CustomFilledInput } from "../../../components/input";
import { CustomYearPicker } from "../../../components/calendar/custom-year-pickers";
import dayjs from "dayjs";

export const Education = ({ formManager }: { formManager?: any }) => {
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
      {formManager.values.education?.map((_: any, index: any) => (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "12px",
              color: themeColors["#000000"],
              marginBottom: "16px",
            }}
          >
            Education {index + 1}
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
                  name={`education[${index}].institution`}
                  height="39px"
                  fontSize="14px"
                  border="1px solid rgb(0 0 0 / 30%)"
                  value={formManager.values.education[index].institution}
                  onChangeValue={formManager.handleChange}
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
                  name={`education[${index}].degree`}
                  height="39px"
                  fontSize="14px"
                  border="1px solid rgb(0 0 0 / 30%)"
                  value={formManager.values.education[index].degree}
                  onChangeValue={formManager.handleChange}
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
                  name={`education[${index}].fieldOfStudy`}
                  height="39px"
                  fontSize="14px"
                  border="1px solid rgb(0 0 0 / 30%)"
                  value={formManager.values.education[index].fieldOfStudy}
                  onChangeValue={formManager.handleChange}
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
                      name={`education[${index}].startYear`}
                      fontFamily="Poppins-Regular"
                      fontSize={"14px"}
                      value={dayjs(
                        formManager.values.education[index].startYear
                      )}
                      onChange={(selectedValue: any) => {
                        formManager.setFieldValue(
                          `education[${index}].startYear`,
                          selectedValue.format("YYYY-MM-DD")
                        );
                      }}
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
                      name={`education[${index}].endYear`}
                      fontFamily="Poppins-Regular"
                      fontSize={"14px"}
                      value={dayjs(formManager.values.education[index].endYear)}
                      onChange={(selectedValue: any) => {
                        formManager.setFieldValue(
                          `education[${index}].endYear`,
                          selectedValue.format("YYYY-MM-DD")
                        );
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      ))}
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
          "&.Mui-disabled": {
            color: themeColors["#FFFFFF"],
            opacity: 0.8,
          },
          paddingX: "40px",
        }}
        onClick={() => {
          formManager.setFieldValue("education", [
            ...formManager.values.education,
            {
              institution: "",
              degree: "",
              fieldOfStudy: "",
              startYear: "",
              endYear: "",
            },
          ]);
        }}
      >
        Add
      </Button>
    </Grid>
  );
};
