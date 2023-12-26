import { Grid, Box } from "@mui/material";
import { useState } from "react";
import { EmployeeDetailTabs } from "../../../components/consts/consts";
import {
  CustomTab,
  CustomTabsPanel,
} from "../../../components/tabs/custom-tabs";
import { themeFonts, themeColors } from "../../../configs";
import { PersonalInfo } from "./personal-info";
import { EmergencyContact } from "./emergency-contact";
import { BankInformation } from "./bank-information";
import { Education } from "./education";
import { Experience } from "./experience";
export const getStyles = () => {
  return {
    tabsButtons: {
      minHeight: "21px",
      minWidth: "0px",
      padding: 0,
      borderRadius: "3px",
      fontFamily: themeFonts["Poppins-SemiBold"],
      fontSize: "12px",
      color: themeColors["#7B7B7B"],
      lineHeight: "15px",
      "&.Mui-selected": {
        color: themeColors["#0C345D"],
        fontFamily: themeFonts["Poppins-SemiBold"],
      },
      textTransform: "none",
    },
    tabPanel: {
      padding: 0,
      position: "relative",
      paddingLeft: 0,
    },
  };
};
export const EmployeeDetails = () => {
  const [value, setValue] = useState("personal_information");
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
          paddingBottom: "10px !important",
          paddingX: "0px !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            maxHeight: "34px",
          }}
        >
          {EmployeeDetailTabs.map((val, ind) => (
              <CustomTab
                sx={styles.tabsButtons}
                label={val.label}
                onChange={handleChange}
                value={val.value}
                value1={value}
                key={ind}
              />
          ))}
        </Box>
      </Grid>

      <Box sx={{ width: "100%" }}>
        {EmployeeDetailTabs.map((tabs, ind) => (
          <CustomTabsPanel
            sx={styles.tabPanel}
            value={tabs.value}
            value1={value}
            key={ind}
          >
            {tabs.tabContent}
          </CustomTabsPanel>
        ))}
      </Box>
    </>
  );
};
