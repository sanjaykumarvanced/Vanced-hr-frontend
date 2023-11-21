import { Grid, Box } from "@mui/material";
import { useState } from "react";
import { MyPayTabs } from "../../../components/consts/consts";
import {
  CustomTab,
  CustomTabsPanel,
} from "../../../components/tabs/custom-tabs";
import { themeColors, themeFonts } from "../../../configs";
import { Salary } from "./salary";
import { IncomeTax } from "./income-tax";

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

      <Grid
        item
        xs={12}
        sx={{
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
          
          {MyPayTabs.map((val) => (
            <>
              <CustomTab
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
        {MyPayTabs.map((tabs, ind) => (
          <CustomTabsPanel
            sx={styles.tabPanel}
            value={tabs.value}
            value1={value}
          >
            {value === "My Salary" && <Salary />}
            {value === "Pay Slips" && <></>}
            {value === "Income Tax" && <IncomeTax />}
          </CustomTabsPanel>
        ))}
      </Box>
    </>
  );
};
