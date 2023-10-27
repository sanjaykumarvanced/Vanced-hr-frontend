import { Grid, Box } from "@mui/material";
import { themeColors } from "../../configs";
import { AboutMeTabs } from "../../components/consts/consts";
import { CustomTabs, CustomTabsPanel } from "../../components/tabs/custom-tabs";
import { useState } from "react";
import { getStyles } from "../quick-access/todays-leaves-details";
import { MyLeaveStats } from "./leave-section/my-leaves-stats";
import { LeaveHistory } from "./leave-section/leave-history";
import { LeaveRequestTable } from "../../table/leave-request-table";

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
            </CustomTabsPanel>
          ))}
        </Box>
      </Grid>
    </>
  );
};
