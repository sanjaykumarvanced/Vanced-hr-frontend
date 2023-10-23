import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { themeColors, themeFonts } from "../../configs";
import { useEffect, useState } from "react";
import { CustomTabs, CustomTabsPanel } from "../../components/tabs/custom-tabs";
import { TodaysLeavesTabs } from "../../components/consts/consts";
import { useGetLeavesDetailsQuery } from "../../components/apis/leavesApi";
import { apiBaseUrl } from "../../components/consts/api-url.const";

export const getStyles = (TodaysAnnouncement?: any) => {
  return {
    tabsButtons: {
      minHeight: "29px",
      minWidth: "0px",
      paddingY: 0,
      borderRadius: "3px",
      fontFamily: themeFonts["Poppins-SemiBold"],
      fontSize: "10px",
      color: themeColors["#0C345D"],
      background: themeColors["#E1E1E1"],
      lineHeight: "15px",
      "&.Mui-selected": {
        background: themeColors["#0C345D"],
        color: themeColors["#FFFFFF"],
      },
    },
    tabPanel: {
      padding: 0,
      position: "relative",
      paddingLeft: TodaysAnnouncement ? 0 : "10px",
    },
  };
};

export const TodaysLeavesDetails = () => {
  const [value, setValue] = useState("All");
  const styles = getStyles();
  const handleChange = (event: any) => {
    setValue(event);
  };
  const today = new Date().toLocaleString("en-in", {
    month: "short",
    day: "numeric",
  });
  console.log(today);
  const { data } = useGetLeavesDetailsQuery();
  const [filteredLeaves, setFilteredLeaves] = useState([]);

  useEffect(() => {
    if (data) {
      if (value === "All") {
        setFilteredLeaves(data);
      } else {
        setFilteredLeaves(
          data && data.filter((item: any) => item.leaveType === value)
        );
      }
    }
  }, [data, value]);
  return (
    <Grid
      item
      xs={12}
      sx={{
        background: themeColors["#FFFFFF"],
        boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
        borderRadius: "6px",
         height: 418,
        maxHeight: 418,
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
          maxHeight: 55,
        }}
      >
        <Typography
          sx={{
            fontFamily: themeFonts["Poppins-SemiBold"],
            fontSize: "15px",
            color: themeColors["#0C345D"],
          }}
        >
          On Leave Today
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {TodaysLeavesTabs.map((val) => (
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "13px",
          paddingTop: 0,
          width: "100%",
          gap: "20px",
          overflow: "auto",
        }}
      >
        <Typography
          sx={{
            height: "40px",
            width: "40px",
            background: themeColors["#BEDEFF"],
            textAlign: "center",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            marginTop: "26px",
            alignItems: "center",
            fontSize: "14px",
            fontFamily: themeFonts["Poppins-SemiBold"],
            color: themeColors["#0C345D"],
            minWidth: "40px",
          }}
        >
          {today}
        </Typography>
        <Box sx={{ width: "100%", maxHeight: "350px", overflow: "auto" }}>
          {TodaysLeavesTabs.map((tabs, ind) => (
            <CustomTabsPanel
              sx={styles.tabPanel}
              value={tabs.value}
              value1={value}
            >
              {filteredLeaves && filteredLeaves.length > 0 ? (
                <>
                  <List
                    sx={{
                      padding: "0px",
                      "&:before": {
                        content: '" "',
                        display: "block",
                        position: "absolute",
                        zIndex: 1,
                        left: "-3.5px",
                        height: "-webkit-fill-available",
                        top: "0px",
                        width: "1px",
                        opacity: 1,
                        background: "#B9B9B9",
                      },
                      position: "relative",
                    }}
                  >
                    {filteredLeaves.map((val: any) => (
                      <ListItem
                        sx={{
                          padding: "0px",
                          marginTop: "26px",
                          paddingLeft: "13px",
                          "&:after": {
                            content: '" "',
                            display: "block",
                            position: "absolute",
                            zIndex: 5,
                            left: "-10px",
                            height: "14px",
                            width: "14px",
                            borderRadius: "10px",
                            opacity: 1,
                            border: " 1px solid #B9B9B9",
                            background: themeColors["#FFFFFF"],
                          },
                        }}
                      >
                        <ListItemText
                          sx={{
                            "& .MuiListItemText-primary": {
                              display: "flex",
                              gap: "10px",
                              fontSize: "12px",
                              fontFamily: themeFonts["Poppins-Regular"],
                              color: themeColors["#0C345D"],
                              alignItems: "center",
                            },
                            width: "50%",
                          }}
                        >
                          <Box
                            sx={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "5px",
                              overflow: "hidden",
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              src={apiBaseUrl + "/" + val.image.path}
                              height={30}
                              width={30}
                              alt="USER"
                            />
                          </Box>
                          {val.employee.firstName} {val.employee.lastName}
                        </ListItemText>

                        <ListItemText
                          sx={{
                            "& .MuiListItemText-primary": {
                              fontSize: "12px",
                              fontFamily: themeFonts["Poppins-Regular"],
                              color: "rgb(0 0 0 / 50%)",
                            },
                            width: "50%",
                          }}
                        >
                          {val.employee.designation}
                        </ListItemText>

                        <ListItemText
                          sx={{
                            "& .MuiListItemText-primary": {
                              fontSize: "12px",
                              fontFamily: themeFonts["Poppins-Regular"],
                              color: themeColors["#8BC34A"],
                            },
                            width: "50%",
                          }}
                        >
                          {val.leaveType}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{
                      marginX: "20px",
                      marginY: "0px",
                      position: "absolute",
                      zIndex: 1,
                      top: 0,
                      left: "27%",
                      height: "-webkit-fill-available",
                    }}
                  />
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{
                      marginX: "20px",
                      marginY: "0px",
                      position: "absolute",
                      zIndex: 1,
                      top: 0,
                      left: "60%",
                      height: "-webkit-fill-available",
                    }}
                  />
                </>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "13px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: themeFonts["Poppins-SemiBold"],
                      fontSize: "25px",
                      color: themeColors["#0C345D"],
                    }}
                  >
                    NO LEAVES
                  </Typography>
                </Box>
              )}
            </CustomTabsPanel>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};
