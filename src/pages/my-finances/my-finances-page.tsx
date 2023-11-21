import { Grid, Box } from "@mui/material";
import { FinanceTabs } from "../../components/consts/consts";
import { CustomTabs, CustomTabsPanel } from "../../components/tabs/custom-tabs";
import { themeColors } from "../../configs";
import { useState } from "react";
import { getStyles } from "../quick-access/todays-leaves-details";
import { SummarySection } from "./summary-section/summary-section";
import { MyPayPage } from "./my-pay-sections/my-pay-page";

export const MyFinancesPage = () => {
  const [value, setValue] = useState("Summary");
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
              maxHeight: "29px",
            }}
          >
            {FinanceTabs.map((val) => (
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
          {FinanceTabs.map((tabs, ind) => (
            <CustomTabsPanel
              sx={styles.tabPanel}
              value={tabs.value}
              value1={value}
            >
              {value === "Summary" && <SummarySection />}
              {value === "My Pay" && <MyPayPage />}
              {value === "Manage Tax" && <></>}
            </CustomTabsPanel>
          ))}
        </Box>
      </Grid>
    </>
  );
};
