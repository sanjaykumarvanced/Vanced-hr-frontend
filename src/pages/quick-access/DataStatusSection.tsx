import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { themeColors, themeFonts } from "../../configs";
import Chart from "react-google-charts";
import { useGetLeaveBalanceByIdQuery } from "../../components/apis/leaveBalanceApi";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RequestLeavesDialog } from "../../components/modals/request-leaves-modal";

export const pieLeaveOptions = {
  legend: "none",
  slices: {
    0: { offset: 0.1, color: "#EF5261" },
    1: { color: "#F6C863" },
  },
  pieSliceText: "label",
  pieSliceTextStyle: {
    color: "#FFFFFF",
    fontSize: 37,
  },
};

export const pieOptions = {
  legend: "none",
  pieSliceText: "label",
  slices: {
    0: { offset: 0.1, color: "#F6C863" },
    1: { color: "#FF3C38" },
    2: { color: "#8BC34A" },
  },
  pieSliceBorderColor: "none",
};

export const pieData = [
  ["Lang", "Speakers"],
  ["", 12],
  ["", 12],
  ["", 12],
];
export const DataStatusSection = () => {
  const user = useSelector((state: any) => state.authentication.user);
  const Id = user.map((val: any) => val.id);
  const { data }: any = useGetLeaveBalanceByIdQuery({ id: Id });
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = (data: any) => {
    setIsOpen(true);
  };
  console.log(data);

  return (
    <>
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
        <Grid
          item
          xs={6}
          sx={{
            background: themeColors["#FFFFFF"],
            boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
            borderRadius: "6px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "13px",
              width: "100%",
              maxHeight: 55,
            }}
          >
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#0C345D"],
              }}
            >
              Leave Balances
            </Typography>
            <Button
              variant="text"
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "12px",
                color: themeColors["#000000"],
                height: 20,
                padding: 0,
              }}
            >
              View All
            </Button>
          </Box>

          <Divider sx={{ width: "100%" }} />

          <Box>
            <Chart
              chartType="PieChart"
              data={[
                ["label", "leaves"],
                [`${data && data.remainingLeave}`, data && data.remainingLeave],
                [`${data && data.totalLeave}`, data && data.totalLeave],
              ]}
              options={pieLeaveOptions}
              width={"100%"}
              height={"300px"}
              legend_toggle
              chartEvents={[
                {
                  eventName: "error",
                  callback: (chart) => {
                    console.error("Chart error:", chart);
                  },
                },
              ]}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "13px",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "16px",
                color: themeColors["#000000"],
                display: "flex",
                position: "relative",
                lineHeight: "23px",
                alignItems: "center",
              }}
            >
              Total Leaves
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "16px",
                  color: themeColors["#000000"],
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "calc(100% - 29.5%)",
                  "&::before": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    left: "10px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#F6C863"],
                  },
                }}
              >
                {data && data.totalLeave}
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "16px",
                color: themeColors["#000000"],
                display: "flex",
                position: "relative",
                lineHeight: "23px",
                alignItems: "center",
              }}
            >
              Remaining Leaves
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "16px",
                  color: themeColors["#000000"],
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "calc(100% - 44%)",
                  "&::before": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    left: "10px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#EF5261"],
                  },
                }}
              >
                {data && data.remainingLeave}
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "16px",
                color: themeColors["#000000"],
                display: "flex",
                position: "relative",
                lineHeight: "23px",
                alignItems: "center",
              }}
            >
              Paid Leaves
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "16px",
                  color: themeColors["#000000"],
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "calc(100% - 28.2%)",
                  "&::before": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    left: "10px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#2980BA"],
                  },
                }}
              >
                {data && data.paidLeave}
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "16px",
                color: themeColors["#000000"],
                display: "flex",
                position: "relative",
                lineHeight: "23px",
                alignItems: "center",
              }}
            >
              UnPaid Leaves
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "16px",
                  color: themeColors["#000000"],
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "calc(100% - 34.5%)",
                  "&::before": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    left: "10px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#8BC34A"],
                  },
                }}
              >
                {data && data.unPaidLeave}
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingX: "13px",
              paddingY: "34px",
            }}
          >
            <Button
              sx={{
                height: 39,
                borderRadius: "6px",
                backgroundColor: themeColors["#0C345D"],
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "15px",
                color: themeColors["#FFFFFF"],
                "&:hover": {
                  backgroundColor: "rgb(21 94 158)",
                },
              }}
              onClick={handleOpen}
            >
              Request Leaves
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            background: themeColors["#FFFFFF"],
            boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
            borderRadius: "6px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "13px",
              width: "100%",
              maxHeight: 55,
            }}
          >
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#0C345D"],
              }}
            >
              Projects
            </Typography>
            <Button
              variant="text"
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "12px",
                color: themeColors["#000000"],
                height: 20,
                padding: 0,
              }}
            >
              View All
            </Button>
          </Box>

          <Divider sx={{ width: "100%" }} />

          <Box>
            <Chart
              chartType="PieChart"
              data={pieData}
              options={pieOptions}
              width={"100%"}
              height={"300px"}
              legend_toggle
              chartEvents={[
                {
                  eventName: "error",
                  callback: (chart) => {
                    console.error("Chart error:", chart);
                  },
                },
              ]}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "13px",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "16px",
                color: themeColors["#000000"],
                display: "flex",
                position: "relative",
                lineHeight: "23px",
                alignItems: "center",
              }}
            >
              Total Projects
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "16px",
                  color: themeColors["#000000"],
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "calc(100% - 33%)",
                  "&::before": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    left: "10px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#F6C863"],
                  },
                }}
              >
                02
              </Typography>
            </Typography>

            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "16px",
                color: themeColors["#000000"],
                display: "flex",
                position: "relative",
                lineHeight: "23px",
                alignItems: "center",
              }}
            >
              Completed Task
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "16px",
                  color: themeColors["#000000"],
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "calc(100% - 40%)",
                  "&::before": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    left: "10px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#FF3C38"],
                  },
                }}
              >
                12
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "16px",
                color: themeColors["#000000"],
                display: "flex",
                position: "relative",
                lineHeight: "23px",
                alignItems: "center",
              }}
            >
              Pending Task
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "16px",
                  color: themeColors["#000000"],
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "calc(100% - 32%)",
                  "&::before": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    left: "10px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#8BC34A"],
                  },
                }}
              >
                09
              </Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {isOpen && (
        <RequestLeavesDialog open={isOpen} onClose={handleClose} data={data} />
      )}
    </>
  );
};
