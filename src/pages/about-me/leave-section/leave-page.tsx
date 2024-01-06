import { Grid } from "@mui/material";
import React from "react";
import { LeaveRequestTable } from "../../../table/leave-request-table";
import { LeaveHistory } from "./leave-history";
import { MyLeaveStats } from "./my-leaves-stats";
import { useSelector } from "react-redux";
import { useGetLeaveRequestByIdQuery } from "../../../components/apis/leaveRequestApi";

export const LeavePage = () => {
  const user = useSelector((state: any) => state.authentication.user);
  const Id = user[0].id;
  const { data, refetch }: any = useGetLeaveRequestByIdQuery({ id: Id });
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
        <LeaveRequestTable data={data} refetch={refetch} userId={Id}/>
      </Grid>
    </>
  );
};
