import { Grid, Box, Typography, Divider, Button } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { FingerPrintSvg } from "../../../svgs";
import { Chart } from "react-google-charts";
import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const data = [
  ["Task", "Hours per Day"],
  ["", 70],
  ["", 3], // Add a data point with value 0 for padding
  ["", 30],
  ["", 3],
];

export const options = {
  pieHole: 0.6,
  legend: "none",
  pieSliceText: "label",
  slices: {
    0: { color: "#F0C419" },
    1: { color: "transparent" },
    2: { color: "#2980BA" },
    3: { color: "transparent" },
  },
  pieSliceBorderColor: "white",
};
export const Timing = () => {
  return (
    <>
      <Grid
        item
        xs={12}
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
            height: "55px",
          }}
        >
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "16px",
              color: themeColors["#0C345D"],
            }}
          >
            Timing ( 16 Oct, 2023 )
          </Typography>
        </Box>

        <Divider sx={{ width: "100%" }} />
        <Box
          sx={{
            padding: "13px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "13px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FingerPrintSvg />
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                }}
              >
                Punching : 09:30 AM
              </Typography>
            </Box>
            <Button
              sx={{
                height: 29,
                borderRadius: "3px",
                background: themeColors["#E1E1E1"],
                paddingX: "17px",
                paddingY: "7px",
                fontFamily: themeFonts["Poppins-Medium"],
                fontSize: "12px",
                color: themeColors["#0C345D"],
              }}
            >
              Punch Out
            </Button>
          </Box>
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "12px",
              color: themeColors["#949494"],
              paddingLeft: "22px",
            }}
          >
            60 min break
          </Typography>
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "14px",
              color: themeColors["#2980BA"],
              paddingLeft: "22px",
            }}
          >
            Today Timing ( 09:30 AM - 07:00 PM )
          </Typography>
          <Box>
            <Chart
              chartType="PieChart"
              width="100%"
              height="227px"
              data={data}
              options={options}
            />
          </Box>
        </Box>
      </Grid>
    </>
  );
};
