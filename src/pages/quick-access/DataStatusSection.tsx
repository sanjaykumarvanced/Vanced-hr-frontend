import { Box, Button, Divider, Grid, Typography} from "@mui/material";
import { themeColors, themeFonts } from "../../configs";
import Chart from "react-google-charts";
import { useGetLeaveBalanceByIdQuery } from "../../components/apis/leaveBalanceApi";
import { useSelector } from "react-redux";

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

export const pieOptions1 = {
  legend: "none",
  pieSliceText: "label",
  slices: {
    0: { offset: 0.1, color: "#F6C863" },
    1: { color: "#FF3C38" },
    2: { color: "#8BC34A" },
  },
  pieSliceBorderColor: "none",
};

export const pieData1 = [
  ["Lang", "Speakers"],
  ["", 12],
  ["", 12],
  ["", 12],
];
export const DataStatusSection = () => {
  const Id = useSelector((state: any) => state.authentication.user);
  const { data }: any = useGetLeaveBalanceByIdQuery({ id: Id });
  console.log(data, Id);

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
                height: 13,
                padding: 0,
              }}
            >
              View All
            </Button>
          </Box>

          <Divider sx={{ width: "100%" }} />

          <Box>
            {data &&
              data.map((val: any) => (
                <Chart
                  chartType="PieChart"
                  data={[
                    ["label", "leaves"],
                    ["7", 7],
                    [`${val.totalLeave}`, val.totalLeave],
                  ]}
                  options={pieLeaveOptions}
                  width={"100%"}
                  height={"360px"}
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
              ))}
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
                width: "max-content",
                alignItems: "center",
                "&::after": {
                  content: '""',
                  width: "11px",
                  height: "11px",
                  right: "-27px",
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
                fontSize: "16px",
                color: themeColors["#000000"],
                display: "flex",
                position: "relative",
                lineHeight: "23px",
                width: "max-content",
                alignItems: "center",
                "&::after": {
                  content: '""',
                  width: "11px",
                  height: "11px",
                  right: "-27px",
                  borderRadius: "100%",
                  position: "absolute",
                  background: themeColors["#EF5261"],
                },
              }}
            >
              Remaining Leaves
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
              variant="contained"
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
                height: 13,
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
              data={pieData1}
              options={pieOptions1}
              width={"100%"}
              height={"360px"}
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
    </>
  );
};
