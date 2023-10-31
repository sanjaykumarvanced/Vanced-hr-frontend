
import { Grid } from "@mui/material";
import { Timing } from "./timig";
import { AttendanceStats } from "./attendance-stats";
import { TodayActivity } from "./today-activity";
import { AttendanceLogTable } from "../../../table/attendance-log-table";

export const AttendancePage = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Grid item xs={9}>
          <Timing />
        </Grid>
        <Grid item xs={9}>
          <AttendanceStats />
        </Grid>
        <Grid item xs={10}>
          <TodayActivity />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <AttendanceLogTable />
      </Grid>
    </>
  );
};
