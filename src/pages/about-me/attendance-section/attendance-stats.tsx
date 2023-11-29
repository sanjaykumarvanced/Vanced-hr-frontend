import {
  Grid,
  Box,
  Typography,
  Divider,
  MenuItem,
  Select,
} from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { faker } from "@faker-js/faker";
import { Line } from "react-chartjs-2";
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
import { DownArrowIcon3 } from "../../../svgs";
import { useState } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["1hr", "2hr", "3hr", "4hr", "5hr", "6hr", "7hr", "8hr", "9hr"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 6 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 6 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const AttendanceStats = () => {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

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
            Attendance Stats
          </Typography>
          <Select
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "12px",
              color: themeColors["#0C345D"],
              height: 28,
              background: themeColors["#E1E1E1"],
              paddingX: "9px",
              paddingY: "7px",
              cursor: "pointer",
              "& .MuiInputBase-input.MuiOutlinedInput-input.MuiSelect-outlined.MuiSelect-select":
                {
                  position: "relative",
                  padding: 0,
                  width: "80px",
                  overflow: "overlay",
                  zIndex: 1,
                },
              "& svg": {
                position: "absolute",
                right: "9px",
              },
              "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                },
            }}
            IconComponent={() => <DownArrowIcon3 height={10} />}
            defaultValue={"Week"}
            onChange={handleChange}
            value={selectedValue}
            MenuProps={{
              PaperProps: {
                sx: {
                  "& li.MuiButtonBase-root.MuiMenuItem-root.Mui-selected": {
                    background: "rgb(12 52 93 / 14%) !important",
                  },
                  "& ul.MuiList-root.MuiList-padding.MuiMenu-list": {
                    padding: 0,
                  },
                  "&.MuiPaper-root.MuiPopover-paper.MuiMenu-paper": {
                    marginTop: "7px !important",
                    borderRadius: "6px",
                  },
                  "& li": {
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "12px",
                    color: themeColors["#0C345D"],
                  },
                },
              },
            }}
          >
            <MenuItem value={"Today"}>Today</MenuItem>
            <MenuItem value={"Week"}>Last Week</MenuItem>
            <MenuItem value={"Last Month"}>Last Month</MenuItem>
            <MenuItem value={"Last Year"}>Last Year</MenuItem>
          </Select>
        </Box>

        <Divider sx={{ width: "100%" }} />
        <Box
          sx={{
            padding: "13px",
            height: "333px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Line data={data} />
        </Box>
      </Grid>
    </>
  );
};
