import {
  Grid,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { PunchInIcon, PunchOutIcon } from "../../../svgs";

export const TodayActivity = () => {
  const today = new Date().toLocaleString("en-in", {
    month: "short",
    day: "numeric",
  });
  return (
    <Grid
      item
      xs={12}
      sx={{
        background: themeColors["#FFFFFF"],
        boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
        borderRadius: "6px",
        height: 390,
        maxHeight: 390,
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
          Today Activity
        </Typography>
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
        <Box
          sx={{
            width: "100%",
            maxHeight: "310px",
            overflow: "auto",
            paddingTop: "30px",
            paddingX: "13px",
          }}
        >
          <Box
            sx={{
              padding: 0,
              position: "relative",
            }}
          >
            <List
              sx={{
                padding: "0px",
                "&:before": {
                  content: '" "',
                  display: "block",
                  position: "absolute",
                  zIndex: 1,
                  left: "-6px",
                  height: "-webkit-fill-available",
                  top: "-6px",
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
                  paddingLeft: "13px",
                  marginBottom: "19px",
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiListItemText-primary": {
                      display: "flex",
                      fontSize: "12px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#000000"],
                      flexDirection: "column",
                      alignItems: "flex-start",
                      "&:after": {
                        content: '" "',
                        display: "block",
                        position: "absolute",
                        zIndex: 5,
                        left: "-26px",
                        height: "14px",
                        width: "14px",
                        borderRadius: "10px",
                        opacity: 1,
                        border: " 1px solid #B9B9B9",
                        background: themeColors["#FFFFFF"],
                      },
                    },
                    position: "relative",
                  }}
                >
                  Punch In at
                  <Typography
                    sx={{
                      fontSize: "9px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#2980BA"],
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <PunchInIcon />
                    (09:30AM)
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0px",
                  paddingLeft: "13px",
                  marginBottom: "19px",
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiListItemText-primary": {
                      display: "flex",
                      fontSize: "12px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#000000"],
                      flexDirection: "column",
                      alignItems: "flex-start",
                      "&:after": {
                        content: '" "',
                        display: "block",
                        position: "absolute",
                        zIndex: 5,
                        left: "-26px",
                        height: "14px",
                        width: "14px",
                        borderRadius: "10px",
                        opacity: 1,
                        border: " 1px solid #B9B9B9",
                        background: themeColors["#FFFFFF"],
                      },
                    },
                    position: "relative",
                  }}
                >
                  Punch out at
                  <Typography
                    sx={{
                      fontSize: "9px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#C28111"],
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <PunchOutIcon />
                    (11:30AM)
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0px",
                  paddingLeft: "13px",
                  marginBottom: "19px",
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiListItemText-primary": {
                      display: "flex",
                      fontSize: "12px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#000000"],
                      flexDirection: "column",
                      alignItems: "flex-start",
                      "&:after": {
                        content: '" "',
                        display: "block",
                        position: "absolute",
                        zIndex: 5,
                        left: "-26px",
                        height: "14px",
                        width: "14px",
                        borderRadius: "10px",
                        opacity: 1,
                        border: " 1px solid #B9B9B9",
                        background: themeColors["#FFFFFF"],
                      },
                    },
                    position: "relative",
                  }}
                >
                  Punch In at
                  <Typography
                    sx={{
                      fontSize: "9px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#2980BA"],
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <PunchInIcon />
                    (09:30AM)
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0px",
                  paddingLeft: "13px",
                  marginBottom: "19px",
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiListItemText-primary": {
                      display: "flex",
                      fontSize: "12px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#000000"],
                      flexDirection: "column",
                      alignItems: "flex-start",
                      "&:after": {
                        content: '" "',
                        display: "block",
                        position: "absolute",
                        zIndex: 5,
                        left: "-26px",
                        height: "14px",
                        width: "14px",
                        borderRadius: "10px",
                        opacity: 1,
                        border: " 1px solid #B9B9B9",
                        background: themeColors["#FFFFFF"],
                      },
                    },
                    position: "relative",
                  }}
                >
                  Punch out at
                  <Typography
                    sx={{
                      fontSize: "9px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#C28111"],
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <PunchOutIcon />
                    (11:30AM)
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0px",
                  paddingLeft: "13px",
                  marginBottom: "19px",
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiListItemText-primary": {
                      display: "flex",
                      fontSize: "12px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#000000"],
                      flexDirection: "column",
                      alignItems: "flex-start",
                      "&:after": {
                        content: '" "',
                        display: "block",
                        position: "absolute",
                        zIndex: 5,
                        left: "-26px",
                        height: "14px",
                        width: "14px",
                        borderRadius: "10px",
                        opacity: 1,
                        border: " 1px solid #B9B9B9",
                        background: themeColors["#FFFFFF"],
                      },
                    },
                    position: "relative",
                  }}
                >
                  Punch In at
                  <Typography
                    sx={{
                      fontSize: "9px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#2980BA"],
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <PunchInIcon />
                    (09:30AM)
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{
                  padding: "0px",
                  paddingLeft: "13px",
                  marginBottom: "19px",
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiListItemText-primary": {
                      display: "flex",
                      fontSize: "12px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#000000"],
                      flexDirection: "column",
                      alignItems: "flex-start",
                      "&:after": {
                        content: '" "',
                        display: "block",
                        position: "absolute",
                        zIndex: 5,
                        left: "-26px",
                        height: "14px",
                        width: "14px",
                        borderRadius: "10px",
                        opacity: 1,
                        border: " 1px solid #B9B9B9",
                        background: themeColors["#FFFFFF"],
                      },
                    },
                    position: "relative",
                  }}
                >
                  Punch out at
                  <Typography
                    sx={{
                      fontSize: "9px",
                      fontFamily: themeFonts["Poppins-Regular"],
                      color: themeColors["#C28111"],
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <PunchOutIcon />
                    (11:30AM)
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
