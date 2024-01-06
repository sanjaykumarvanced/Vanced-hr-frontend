import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AdminCustomComponent } from "../../../components/custom-component/admin-custom-component";
import { TotalEmployees } from "../../../pngs";
import { themeFonts, themeColors } from "../../../configs";
import { LeaveRequestTable } from "../../../table/leave-request-table";
import { useGetAllLeaveRequestsQuery } from "../../../components/apis/allRequestedLeavesApi";
import { useSelector } from "react-redux";

export const LeavesRecords = () => {
  const user = useSelector((state: any) => state.authentication.user);
  const Id = user[0].id;
  const { data, refetch }: any = useGetAllLeaveRequestsQuery();
  const leaveRecords = "Leaves Records";
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
            Leaves
          </Typography>
        </Box>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: "0px !important",
            paddingTop: "0px !important",
            gap: "20px",
          }}
        >
          <AdminCustomComponent
            Title={"Total Present"}
            value={"28 / 35"}
            children={<img src={TotalEmployees} alt="TotalEmployees" />}
          />
          <AdminCustomComponent
            Title={"Approved Leaves"}
            value={6}
            children={<img src={TotalEmployees} alt="TotalEmployees" />}
          />
          <AdminCustomComponent
            Title={"Unplanned Leaves"}
            value={0}
            children={<img src={TotalEmployees} alt="TotalEmployees" />}
          />
          <AdminCustomComponent
            Title={"Leave Requests"}
            value={1}
            children={<img src={TotalEmployees} alt="TotalEmployees" />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            padding: "0px !important",
          }}
        >
          <LeaveRequestTable
            data={data}
            refetch={refetch}
            leaveRecords={leaveRecords}
            userId={Id}
          />
        </Grid>
      </Grid>
    </>
  );
};
