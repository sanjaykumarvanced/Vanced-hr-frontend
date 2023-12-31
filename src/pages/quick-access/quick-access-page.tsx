import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import { themeFonts, themeColors } from "../../configs";
import { DownArrowIcon1 } from "../../svgs";
import SocialDashboard from "./SocialDashboard";
import { TodaysLeavesDetails } from "./todays-leaves-details";
import { TodaysAnnouncement } from "./today-announcement -page";
import { DataStatusSection } from "./DataStatusSection";
import { useState } from "react";

export const QuickAccessPage = () => {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          padding: "35px",
          paddingRight: "10px",
          paddingTop: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingY: "30px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "22px",
              color: themeColors["#000000"],
            }}
          >
            Quick Access
          </Typography>
          {/* <Button
            sx={{
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "15px",
              color: themeColors["#FFFFFF"],
              height: 39,
              background: themeColors["#0C345D"],
            }}
            endIcon={<DownArrowIcon1 />}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Button> */}
          <Select
            sx={{
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "14px",
              color: themeColors["#FFFFFF"],
              height: 39,
              background: themeColors["#0C345D"],
              paddingX: "13px",
              cursor: "pointer",
              "& .MuiInputBase-input.MuiOutlinedInput-input.MuiSelect-outlined.MuiSelect-select":
                {
                  position: "relative",
                  padding: 0,
                  width: "125px",
                  overflow: "overlay",
                  zIndex: 1,
                },
              "& svg": {
                position: "absolute",
                right: "13px",
              },
            }}
            IconComponent={() => <DownArrowIcon1 height={10} />}
            defaultValue={"Organization"}
            onChange={handleChange}
            value={selectedValue}
            MenuProps={{
              PaperProps: {
                sx: {
                  "& li.MuiButtonBase-root.MuiMenuItem-root.Mui-selected": {
                    background: "rgb(10 42 74 / 18%) !important",
                  },
                  "& ul.MuiList-root.MuiList-padding.MuiMenu-list": {
                    padding: 0,
                  },
                  "&.MuiPaper-root.MuiPopover-paper.MuiMenu-paper": {
                    marginTop: "7px !important",
                  },
                },
              },
            }}
          >
            <MenuItem value={"Organization"}>Organization</MenuItem>
            <MenuItem value={"Development"}>Development</MenuItem>
          </Select>
        </Box>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "0px !important",
            paddingTop: "0px !important",
            gap: "20px",
          }}
        >
          <Grid
            item
            xs={9}
            sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <SocialDashboard />
            <TodaysAnnouncement />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <TodaysLeavesDetails />
            <DataStatusSection />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
