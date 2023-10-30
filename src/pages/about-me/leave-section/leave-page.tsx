import { Grid } from "@mui/material";
import React from "react";
import { LeaveRequestTable } from "../../../table/leave-request-table";
import { LeaveHistory } from "./leave-history";
import { MyLeaveStats } from "./my-leaves-stats";

export const LeavePage = () => {
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
        <Grid item xs={6}>
          <MyLeaveStats />
        </Grid>
        <Grid item xs={8}>
          <LeaveHistory />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <LeaveRequestTable />
      </Grid>
    </>
  );
};
