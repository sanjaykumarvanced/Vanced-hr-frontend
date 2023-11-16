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
    1: { offset: 0.1, color: "#F6C863" },
    2: { offset: 0.1, color: "#2980BA" },
    3: { offset: 0.1, color: "#8BC34A" },
  },
  pieSliceText: "label",
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
  const { data, refetch }: any = useGetLeaveBalanceByIdQuery({ id: Id });
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
                fontSize: "16px",
                color: themeColors["#0C345D"],
              }}
            >
              Leave Balances
            </Typography>
            {/* <Button
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
            </Button> */}
          </Box>

          <Divider sx={{ width: "100%" }} />

          <Box>
            <Chart
              chartType="PieChart"
              data={[
                ["label", "leaves"],
                ["", data && data.remainingLeave],
                ["", data && data.totalLeave],
                ["", data && data.paidLeave],
                ["", data && data.unPaidLeave],
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
            <Box
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                  position: "relative",
                  lineHeight: "23px",
                  display: "flex",
                  alignItems: "center",
                  "&::after": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    right: "-20px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#F6C863"],
                  },
                }}
              >
                Total Leaves
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                }}
              >
                {data && data.totalLeave}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                  position: "relative",
                  lineHeight: "23px",
                  display: "flex",
                  alignItems: "center",
                  "&::after": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    right: "-20px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#EF5261"],
                  },
                }}
              >
                Remaining Leaves
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                }}
              >
                {data && data.remainingLeave}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                  position: "relative",
                  lineHeight: "23px",
                  display: "flex",
                  alignItems: "center",
                  "&::after": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    right: "-20px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#2980BA"],
                  },
                }}
              >
                Paid Leaves
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                }}
              >
                {data && data.paidLeave}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                  position: "relative",
                  lineHeight: "23px",
                  display: "flex",
                  alignItems: "center",
                  "&::after": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    right: "-20px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#8BC34A"],
                  },
                }}
              >
                UnPaid Leaves
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                }}
              >
                {data && data.unPaidLeave}
              </Typography>
            </Box>
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
                fontSize: "16px",
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
                fontSize: "16px",
                color: themeColors["#0C345D"],
              }}
            >
              Projects
            </Typography>
            {/* <Button
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
            </Button> */}
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
           
            <Box
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                  position: "relative",
                  lineHeight: "23px",
                  display: "flex",
                  alignItems: "center",
                  "&::after": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    right: "-20px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#F6C863"],
                  },
                }}
              >
                Total Projects
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                }}
              >
                02
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                  position: "relative",
                  lineHeight: "23px",
                  display: "flex",
                  alignItems: "center",
                  "&::after": {
                    content: '""',
                    width: "11px",
                    height: "11px",
                    right: "-20px",
                    borderRadius: "100%",
                    position: "absolute",
                    background: themeColors["#FF3C38"],
                  },
                }}
              >
                Completed Task
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                }}
              >
                12
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
            <Typography
               sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "14px",
                color: themeColors["#000000"],
                position: "relative",
                lineHeight: "23px",
                display: "flex",
                alignItems: "center",
                "&::after": {
                  content: '""',
                  width: "11px",
                  height: "11px",
                  right: "-20px",
                  borderRadius: "100%",
                  position: "absolute",
                  background: themeColors["#8BC34A"],
                },
              }}
            >
              Pending Task
            </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],                 
                }}
              >
                09
              </Typography></Box>
          </Box>
        </Grid>
      </Grid>
      {isOpen && (
        <RequestLeavesDialog
          open={isOpen}
          onClose={handleClose}
          refetch={refetch}
        />
      )}
    </>
  );
};
