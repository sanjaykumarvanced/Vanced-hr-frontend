import { Grid, Box, Typography } from "@mui/material";
import { themeFonts, themeColors } from "../../configs";

import { AttendanceLogTable } from "../../table/attendance-log-table";
import { TodayAbsentees } from "./header-section/today-absentees";
import { NotInYetTodaySection } from "./header-section/not-in-yet-today-section";
import { EmployeePresenceInfo } from "./header-section/employee-presence-info";

export const MyTeamPage = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          padding: "35px",
          paddingRight: "10px",
          paddingTop: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingY: "30px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "22px",
              color: themeColors["#000000"],
            }}
          >
            Summary
          </Typography>
        </Box>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            paddingLeft: "0px !important",
            paddingTop: "0px !important",
            gap: "20px",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Grid item xs={3}>
              <TodayAbsentees />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <EmployeePresenceInfo />
            </Grid>
            <Grid item xs={3}>
              <NotInYetTodaySection />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <AttendanceLogTable />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
