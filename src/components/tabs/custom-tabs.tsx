import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab } from "@mui/material";
import { themeColors } from "../../configs";
interface CustomSelectProps {
  label?: string;
  value?: any;
  onChange?: any;
  children?: any;
  sx?: any;
  className?: any;
  value1?: any;
}
export const CustomTabs = ({
  label,
  value,
  onChange,
  value1,
  sx,
}: CustomSelectProps) => {
  return (
    <TabContext value={value1}>
      <Box>
        <TabList
          onChange={(event, newValue) => onChange(newValue)}
          sx={{
            "& span.MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiTabs-flexContainer": {
              display: "flex",
              gap: "10px !important",
            },
            alignItems: "center",
          }}
        >
          <Tab label={label} value={value} sx={sx} />
        </TabList>
      </Box>
    </TabContext>
  );
};
export const CustomTabsPanel = ({
  value,
  children,
  sx,
  value1,
}: CustomSelectProps) => {
  return (
    <TabContext value={value1}>
      <TabPanel value={value} sx={sx}>
        {children}
      </TabPanel>
    </TabContext>
  );
};

export const CustomTab = ({
  label,
  value,
  onChange,
  value1,
  sx,
}: CustomSelectProps) => {
  return (
    <TabContext value={value1}>
      <Box>
        <TabList
          onChange={(event, newValue) => onChange(newValue)}
          sx={{
            "& span.MuiTabs-indicator": {
              backgroundColor: themeColors["#0C345D"],
            },
            "& .MuiTabs-flexContainer": {
              display: "flex",
              gap: "10px !important",
            },
            alignItems: "center",
          }}
        >
          <Tab label={label} value={value} sx={sx} />
        </TabList>
      </Box>
    </TabContext>
  );
};
