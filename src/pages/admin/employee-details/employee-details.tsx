import { Grid, Box } from "@mui/material";
import { useState } from "react";
import { EmployeeDetailTabs } from "../../../components/consts/consts";
import {
  CustomTab,
  CustomTabsPanel,
} from "../../../components/tabs/custom-tabs";
import { themeFonts, themeColors } from "../../../configs";
import { BankInformation } from "./bank-information";
import { Education } from "./education";
import { EmergencyContact } from "./emergency-contact";
import { Experience } from "./experience";
import { PersonalInfo } from "./personal-info";
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
export const EmployeeDetails = ({
  formManager,
  editedData,
}: {
  formManager?: any;
  editedData?: any;
}) => {
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
            {value === "personal_information" && (
              <PersonalInfo formManager={formManager} editedData={editedData} />
            )}
            {value === "emergency_contact" && (
              <EmergencyContact
                formManager={formManager}
                editedData={editedData}
              />
            )}
            {value === "bank_information" && (
              <BankInformation
                formManager={formManager}
                editedData={editedData}
              />
            )}
            {value === "education" && (
              <Education formManager={formManager} editedData={editedData} />
            )}
            {value === "experience" && (
              <Experience formManager={formManager} editedData={editedData} />
            )}
            {value === "documents" && <></>}
            {value === "projects" && <></>}
          </CustomTabsPanel>
        ))}
      </Box>
    </>
  );
};
