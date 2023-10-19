import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Tab,
  Typography,
} from "@mui/material";
import { themeColors, themeFonts } from "../../configs";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { ProfilePicture } from "../../svgs";

export const getStyles = () => {
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
      "&.Mui-selected": {
        background: themeColors["#0C345D"],
        color: themeColors["#FFFFFF"],
      },
    },
    tabPanel: {
      padding: 0,
      position: "relative",
      paddingLeft: "10px",
    },
  };
};

export const TodaysLeavesDetails = () => {
  const [value, setValue] = useState("1");
  const styles = getStyles();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const today = new Date().toLocaleString("en-in", {
    month: "short",
    day: "numeric",
  });
  console.log(today);

  return (
    <Grid
      item
      xs={12}
      sx={{
        background: themeColors["#FFFFFF"],
        boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
        borderRadius: "6px",
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
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              sx={{
                "& span.MuiTabs-indicator": {
                  display: "none",
                },
                "& .MuiTabs-flexContainer": {
                  display: "flex",
                  gap: "10px !important",
                },
              }}
            >
              <Tab sx={styles.tabsButtons} label="ALL" value="1" />
              <Tab sx={styles.tabsButtons} label="Short leave" value="2" />
              <Tab sx={styles.tabsButtons} label="Half day Leave" value="3" />
              <Tab sx={styles.tabsButtons} label="Full day Leave" value="4" />
            </TabList>
          </Box>
        </TabContext>
      </Box>
      <Divider sx={{ width: "100%" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          //   alignItems: "center",
          //   justifyContent: "space-between",
          padding: "13px",
          paddingTop: 0,
          width: "100%",
          gap: "20px",
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
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <TabPanel sx={styles.tabPanel} value="1">
              <List
                // key={ind}
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
                      <ProfilePicture />
                    </Box>
                    Deepak Kumar
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
                    Frontend Developer
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
                    On Half day Leave
                  </ListItemText>
                </ListItem>
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
                      <ProfilePicture />
                    </Box>
                    Deepak Kumar
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
                    Frontend Developer
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
                    On Half day Leave
                  </ListItemText>
                </ListItem>
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
                      <ProfilePicture />
                    </Box>
                    Deepak Kumar
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
                    Frontend Developer
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
                    On Half day Leave
                  </ListItemText>
                </ListItem>
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
            </TabPanel>
            <TabPanel sx={styles.tabPanel} value="2">
              <List
                // key={ind}
                sx={{
                  paddingX: "30px",
                }}
              >
                <ListItem
                  sx={{
                    background: "aliceblue",
                    borderRadius: "5px",
                    border: "1px solid #EDEDED",
                  }}
                >
                  <ListItemText sx={{ width: "50%" }}>njhjk</ListItemText>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{
                      marginX: "20px",
                    }}
                  />
                  <ListItemText sx={{ width: "50%" }}>hjk</ListItemText>
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel sx={styles.tabPanel} value="3">
              Item Three
            </TabPanel>
            <TabPanel sx={styles.tabPanel} value="4">
              Item four
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Grid>
  );
};
