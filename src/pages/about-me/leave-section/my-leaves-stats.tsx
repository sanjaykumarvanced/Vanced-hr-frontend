import { Grid, Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import { MyLeaveTabs } from "../../../components/consts/consts";
import {
  CustomTabs,
  CustomTabsPanel,
} from "../../../components/tabs/custom-tabs";
import { themeColors, themeFonts } from "../../../configs";
import { getStyles } from "../../quick-access/todays-leaves-details";
import { useSelector } from "react-redux";
import { useGetLeaveStatsByIdQuery } from "../../../components/apis/leaveStatsApi";

export const MyLeaveStats = () => {
  const [value, setValue] = useState("Weekly");
  const styles = getStyles();
  const handleChange = (event: any) => {
    setValue(event);
  };
  const Id = useSelector((state: any) => state.authentication.user);
  const { data }: any = useGetLeaveStatsByIdQuery({ id: Id });
  console.log(data, Id);
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          background: themeColors["#FFFFFF"],
          boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
          borderRadius: "6px",
          paddingBottom: "26px",
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
              fontSize: "15px",
              color: themeColors["#0C345D"],
            }}
          >
            My Leave Stats
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {MyLeaveTabs.map((val) => (
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
        </Box>

        <Divider sx={{ width: "100%" }} />

        <Box sx={{ width: "100%" }}>
          {MyLeaveTabs.map((tabs, ind) => (
            <CustomTabsPanel
              sx={styles.tabPanel}
              value={tabs.value}
              value1={value}
            >
              <Box
                sx={{
                  border: "1px solid rgb(0 0 0 / 30%)",
                  borderRadius: "6px",
                  marginTop: "26px",
                  marginX: "13px",
                  height: "130px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {data &&
                  data.map((val: any) => {
                    const leaveDays = val.leaveDays ? val.leaveDays : "";
                    const monthName = val.month;
                    const date = new Date(`2023-${monthName}-01`);
                    const abbreviatedMonth = date.toLocaleString("default", {
                      month: "short",
                    });
                    console.log(date);
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          width: 43,
                          gap: "6px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: themeFonts["Poppins-SemiBold"],
                            fontSize: "15px",
                            color: themeColors["#0C345D"],
                            height: "23px",
                          }}
                        >
                          {leaveDays}
                        </Typography>
                        <Divider sx={{ width: "100%" }} />
                        <Typography
                          sx={{
                            fontFamily: themeFonts["Poppins-Regular"],
                            fontSize: "15px",
                            color: themeColors["rgb(0 0 0 / 40%)"],
                          }}
                        >
                          {abbreviatedMonth}
                        </Typography>
                      </Box>
                    );
                  })}
              </Box>
            </CustomTabsPanel>
          ))}
        </Box>
      </Grid>
    </>
  );
};
