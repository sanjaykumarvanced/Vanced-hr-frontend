import { Grid, Box, Tab } from "@mui/material";
import { useState } from "react";
import { FinanceTabs, MyPayTabs } from "../../../components/consts/consts";
import {
  CustomTab,
  CustomTabs,
  CustomTabsPanel,
} from "../../../components/tabs/custom-tabs";
import { themeColors, themeFonts } from "../../../configs";
import { AttendancePage } from "../../about-me/attendance-section/attendance-page";
import { PerformancePage } from "../../about-me/performance-section/performance-page";
import { SummarySection } from "../summary-section/summary-section";
import TabList from "@mui/lab/TabList";
import { Salary } from "./salary";

export const getStyles = (TodaysLeavesDetails?: any) => {
  return {
    tabsButtons: {
      minHeight: "21px",
      minWidth: "0px",
      padding: 0,
      borderRadius: "3px",
      fontFamily: themeFonts["Poppins-Regular"],
      fontSize: "15px",
      color: themeColors["#7B7B7B"],
      lineHeight: "15px",
      marginBottom: "13px",
      "&.Mui-selected": {
        color: themeColors["#0C345D"],
        fontFamily: themeFonts["Poppins-SemiBold"],
      },
      textTransform: "none",
    },
    tabPanel: {
      padding: 0,
      position: "relative",
      paddingLeft: TodaysLeavesDetails ? "10px" : 0,
    },
  };
};

export const MyPayPage = () => {
  const [value, setValue] = useState("My Salary");
  const styles = getStyles();
  const handleChange = (event: any) => {
    setValue(event);
  };
  return (
    <>
      {/* <Grid
        container
        spacing={3}
        sx={{
          padding: "35px",
          paddingRight: "10px",
          paddingTop: "34px",
          gap: "20px",
        }}
      > */}
      <Grid
        item
        xs={12}
        sx={{
          // background: themeColors["#FFFFFF"],
          // boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
          // borderRadius: "6px",
          paddingBottom: "20px !important",
          paddingX: "0px !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "44px",
            alignItems: "center",
            maxHeight: "34px",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          {/* <TabList onChange={handleChange} value={value}> */}
          {MyPayTabs.map((val) => (
            <>
              <CustomTab
                sx={styles.tabsButtons}
                label={val.label}
                onChange={handleChange}
                value={val.value}
                value1={value}
              />

              {/* <Tab label={val.label} value={val.value} /> */}
            </>
          ))}
          {/* </TabList> */}
        </Box>
      </Grid>

      <Box sx={{ width: "100%" }}>
        {MyPayTabs.map((tabs, ind) => (
          <CustomTabsPanel
            sx={styles.tabPanel}
            value={tabs.value}
            value1={value}
          >
            {value === "My Salary" && <Salary />}
            {value === "My Pay" && <AttendancePage />}
            {value === "Performance" && <PerformancePage />}
          </CustomTabsPanel>
        ))}
      </Box>
      {/* </Grid> */}
    </>
  );
};
