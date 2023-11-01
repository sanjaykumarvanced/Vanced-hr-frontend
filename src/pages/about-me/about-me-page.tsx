import { Grid, Box } from "@mui/material";
import { themeColors } from "../../configs";
import { AboutMeTabs } from "../../components/consts/consts";
import { CustomTabs, CustomTabsPanel } from "../../components/tabs/custom-tabs";
import { useState } from "react";
import { getStyles } from "../quick-access/todays-leaves-details";
import { LeavePage } from "./leave-section/leave-page";
import { AttendancePage } from "./attendance-section/attendance-page";
import { PerformancePage } from "./performance-section/performance-page";

export const AboutMePage = () => {
  const [value, setValue] = useState("Leave");
  const styles = getStyles();
  const handleChange = (event: any) => {
    setValue(event);
  };
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          padding: "35px",
          paddingRight: "10px",
          paddingTop: "34px",
          gap: "20px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            background: themeColors["#FFFFFF"],
            boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
            borderRadius: "6px",
            padding: "15px !important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              maxHeight: "17px",
            }}
          >
            {AboutMeTabs.map((val) => (
              <>
                <CustomTabs
                  sx={styles.tabsButtons}
                  label={val.label}
                  onChange={handleChange}
                  value={val.value}
                  value1={value}
                />
              </>
            ))}
          </Box>
        </Grid>

        <Box sx={{ width: "100%" }}>
          {AboutMeTabs.map((tabs, ind) => (
            <CustomTabsPanel
              sx={styles.tabPanel}
              value={tabs.value}
              value1={value}
            >
              {value === "Leave" && <LeavePage />}
              {value === "Attendance" && <AttendancePage />}
              {value === "Performance" && <PerformancePage />}
            </CustomTabsPanel>
          ))}
        </Box>
      </Grid>
    </>
  );
};
