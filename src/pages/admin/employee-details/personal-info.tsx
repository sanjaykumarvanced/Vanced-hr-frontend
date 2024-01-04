import { Button, Grid } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { CustomFilledInput } from "../../../components/input";

export const PersonalInfo = ({ formManager }: { formManager?: any }) => {
  debugger;
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
          type="tel"
          placeholder="9876543210"
          name="telephones"
          height="39px"
          fontSize="14px"
          border="1px solid rgb(0 0 0 / 30%)"
          value={formManager.values.telephones?.join(", ")}
          onChangeValue={(e: any) => {
            const { value } = e.target;
            const telephoneArray = value
              .split(", ")
              .map((item: any) => item.trim());
            formManager.setFieldValue("telephones", telephoneArray);
          }}
        />
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
            label="Nationality *"
            type="text"
            placeholder="INDIAN"
            name="nationality"
            height="39px"
            fontSize="14px"
            border="1px solid rgb(0 0 0 / 30%)"
            value={formManager.values.nationality}
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
            label="Marital Status *"
            type="text"
            placeholder="married"
            name="maritalStatus"
            height="39px"
            fontSize="14px"
            border="1px solid rgb(0 0 0 / 30%)"
            value={formManager.values.maritalStatus}
            onChangeValue={formManager.handleChange}
          />
        </Grid>
      </Grid>

      {/* <Grid
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
        <CustomFilledInput
          autoFocus={true}
          label="Religion"
          type="text"
          placeholder=""
          name="religion"
          height="39px"
          fontSize="14px"
          border="1px solid rgb(0 0 0 / 30%)"
          value={formManager.values.religion}
          onChangeValue={formManager.handleChange}
        />
      </Grid> */}
    </Grid>
  );
};
