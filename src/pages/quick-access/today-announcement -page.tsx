import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { themeColors, themeFonts } from "../../configs";
import { useState } from "react";
import { CustomTabs, CustomTabsPanel } from "../../components/tabs/custom-tabs";
import { AnnouncementTabs } from "../../components/consts/consts";
import { getStyles } from "./todays-leaves-details";
import { Profile } from "../../pngs";
import { BirthdayWishSvg } from "../../svgs";

export const TodaysAnnouncement = () => {
  const [value, setValue] = useState("NewJoinee");
  const styles = getStyles();
  const handleChange = (event: any) => {
    setValue(event);
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        background: themeColors["#FFFFFF"],
        boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
        borderRadius: "6px",
        maxHeight: 615,
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
          Today Announcement
          <Typography
            component="span"
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "15px",
              color: themeColors["#CF30CA"],
              paddingLeft: "3px",
            }}
          >
            (10)
          </Typography>
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {AnnouncementTabs.map((val) => (
            <>
              <CustomTabs
                sx={styles.tabsButtons}
                label={val.label + "(0)"}
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
          maxHeight: "600px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          {AnnouncementTabs.map((tabs, ind) => (
            <CustomTabsPanel
              sx={styles.tabPanel}
              value={tabs.value}
              value1={value}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: "26px",
                }}
              >
                <img src={Profile} alt="pic" />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "15px",
                      color: themeColors["#000000"],
                    }}
                  >
                    Sakshi Rana
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: themeFonts["Poppins-Regular"],
                        fontSize: "10px",
                        color: "rgb(0 0 0 / 50%)",
                        paddingLeft: "3px",
                      }}
                    >
                      ( Created a Post )
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "10px",
                      color: themeColors["#55A232"],
                    }}
                  >
                    (10 min ago)
                  </Typography>
                </Box>
              </Box>

              <List
                sx={{ listStyle: "none", paddingLeft: 0, paddingTop: "18px" }}
              >
                <ListItem
                  sx={{
                    display: "list-item",
                    "&::before": {
                      content: "'(' counter(list-item) ') '",
                      fontFamily: themeFonts["Poppins-SemiBold"],
                      fontSize: "16px",
                      color: themeColors["#0C345D"],
                      paddingRight: "15px",
                    },
                    counterIncrement: "list-item",
                    paddingX: 0,
                    fontFamily: themeFonts["Poppins-Regular"],
                    fontSize: "16px",
                    color: themeColors["#000000"],
                  }}
                >
                  Wishing You a Happy Birthday , a wonderful year and success in
                  all you do
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "16px",
                      color: themeColors["#2D87C2"],
                      paddingLeft: "3px",
                    }}
                  >
                    @ Mamta Verma.
                  </Typography>
                  <Box
                    sx={{
                      padding: "26px",
                      marginLeft: "11px",
                    }}
                  >
                    <BirthdayWishSvg />
                  </Box>
                </ListItem>
                <Divider sx={{ width: "100%" }} />
                <ListItem
                  sx={{
                    display: "list-item",
                    "&::before": {
                      content: "'(' counter(list-item) ') '",
                      fontFamily: themeFonts["Poppins-SemiBold"],
                      fontSize: "16px",
                      color: themeColors["#0C345D"],
                      paddingRight: "15px",
                    },
                    counterIncrement: "list-item",
                    paddingX: 0,
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "14px",
                    color: themeColors["#0C345D"],
                    paddingTop: "24px",
                  }}
                >
                  Welcome Shikha Sen ( New Hr ),
                  <Box
                    sx={{
                      marginLeft: "40px",
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: themeFonts["Poppins-Regular"],
                        fontSize: "14px",
                        color: "rgb(0 0 0 / 50%)",
                        paddingLeft: "3px",
                        paddingTop: "8px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </CustomTabsPanel>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};
