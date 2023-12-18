import { Grid, Typography } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { CustomDatePicker } from "../../../components/calendar/custom-date-picker";

export const TeamTime = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          background: themeColors["#FFFFFF"],
          boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
          borderRadius: "6px",
          padding: "13px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: themeFonts["Poppins-SemiBold"],
            fontSize: "15px",
            color: themeColors["#0C345D"],
          }}
        >
          Team time off calendar
        </Typography>
        <CustomDatePicker
          width={120}
          placeholder={"Oct 2023"}
          fontFamily={"Poppins-SemiBold"}
          color={"#0C345D"}
          fontSize={"15px"}
          disablePast
        />
      </Grid>
    </>
  );
};
