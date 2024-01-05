import { Box, Button, Grid, Typography } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { CustomFilledInput } from "../../../components/input";

export const EmergencyContact = ({
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
      <Box>
        <Typography
          sx={{
            fontFamily: themeFonts["Poppins-SemiBold"],
            fontSize: "12px",
            color: themeColors["#000000"],
            marginBottom: "16px",
          }}
        >
          Primary
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
                label="Name"
                type="text"
                placeholder=""
                name="emergencyContact.primary.name"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.emergencyContact.primary.name}
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
                label="Relationship"
                type="text"
                placeholder=""
                name="emergencyContact.primary.relationship"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.emergencyContact.primary.relationship}
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
              alignItems: "flex-end",
              position: "relative",
              gap: "15px",
            }}
          >
            <CustomFilledInput
              autoFocus={true}
              label="Telephone No.*"
              type="tex"
              placeholder="9876543210"
              name="emergencyContact.primary.phone"
              height="39px"
              fontSize="14px"
              border="1px solid rgb(0 0 0 / 30%)"
              value={formManager.values.emergencyContact.primary.phone?.join(
                ", "
              )}
              onChangeValue={(e: any) => {
                const { value } = e.target;
                const telephoneArray = value
                  .split(", ")
                  .map((item: any) => item.trim());
                formManager.setFieldValue(
                  "emergencyContact.primary.phone",
                  telephoneArray
                );
              }}
              disabled={editedData.action === "view"}
            />
            {editedData.action !== "view" && (
              <Button
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
                Add
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: themeFonts["Poppins-SemiBold"],
            fontSize: "12px",
            color: themeColors["#000000"],
            marginBottom: "16px",
          }}
        >
          Secondary
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
                label="Name"
                type="text"
                placeholder=""
                name="emergencyContact.secondary.name"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={formManager.values.emergencyContact.secondary.name}
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
                label="Relationship"
                type="text"
                placeholder=""
                name="emergencyContact.secondary.relationship"
                height="39px"
                fontSize="14px"
                border="1px solid rgb(0 0 0 / 30%)"
                value={
                  formManager.values.emergencyContact.secondary.relationship
                }
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
              alignItems: "flex-end",
              position: "relative",
              gap: "15px",
            }}
          >
            <CustomFilledInput
              autoFocus={true}
              label="Telephone No.*"
              type="tex"
              placeholder="9876543210"
              name="emergencyContact.secondary.phone"
              height="39px"
              fontSize="14px"
              border="1px solid rgb(0 0 0 / 30%)"
              value={formManager.values.emergencyContact.secondary.phone?.join(
                ", "
              )}
              onChangeValue={(e: any) => {
                const { value } = e.target;
                const telephoneArray = value
                  .split(", ")
                  .map((item: any) => item.trim());
                formManager.setFieldValue(
                  "emergencyContact.secondary.phone",
                  telephoneArray
                );
              }}
              disabled={editedData.action === "view"}
            />
            {editedData.action !== "view" && (
              <Button
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
              >
                Add
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
