import React from "react";
import { LeaveRequestTable } from "../../../table/leave-request-table";
import { Grid } from "@mui/material";
import { LeaveHistory } from "../leave-section/leave-history";
import { MyLeaveStats } from "../leave-section/my-leaves-stats";
import { Timing } from "./timig";
import { AttendanceStats } from "./attendance-stats";

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
          <LeaveHistory />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <LeaveRequestTable />
      </Grid>
    </>
  );
};
