import { Box, Button, Grid, Typography } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { CustomFilledInput } from "../../../components/input";
import { CustomDatePicker } from "../../../components/calendar/custom-date-picker";
import dayjs from "dayjs";

export const Experience = ({
  formManager,
  editedData,
}: {
  formManager?: any;
  editedData?: any;
}) => {
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
      {formManager.values.experience?.map((_: any, index: any) => (
        <Box>
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "12px",
              color: themeColors["#000000"],
              marginBottom: "16px",
            }}
          >
            Experience {index + 1}
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
                  label="Job Title"
                  type="text"
                  placeholder=""
                  name={`experience[${index}].jobTitle`}
                  height="39px"
                  fontSize="14px"
                  border="1px solid rgb(0 0 0 / 30%)"
                  value={formManager.values.experience[index].jobTitle}
                  onChangeValue={formManager.handleChange}
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
                  label="Company Name"
                  type="text"
                  placeholder=""
                  name={`experience[${index}].companyName`}
                  height="39px"
                  fontSize="14px"
                  border="1px solid rgb(0 0 0 / 30%)"
                  value={formManager.values.experience[index].companyName}
                  onChangeValue={formManager.handleChange}
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
                <CustomDatePicker
                  label={"Start Date"}
                  format={"DD/MM/YYYY"}
                  name={`experience[${index}].startDate`}
                  fontFamily="Poppins-Regular"
                  fontSize={"14px"}
                  value={dayjs(formManager.values.experience[index].startDate)}
                  onChange={(selectedValue: any) => {
                    formManager.setFieldValue(
                      `experience[${index}].startDate`,
                      selectedValue.format("YYYY-MM-DD")
                    );
                  }}
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
                  label={"End Date"}
                  format={"DD/MM/YYYY"}
                  name={`experience[${index}].endDate`}
                  fontFamily="Poppins-Regular"
                  fontSize={"14px"}
                  value={dayjs(formManager.values.experience[index].endDate)}
                  onChange={(selectedValue: any) => {
                    formManager.setFieldValue(
                      `experience[${index}].endDate`,
                      selectedValue.format("YYYY-MM-DD")
                    );
                  }}
                  disabled={editedData.action === "view"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      ))}
      {editedData.action !== "view" && (
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
            formManager.setFieldValue("experience", [
              ...formManager.values.experience,
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
      )}
    </Grid>
  );
};
