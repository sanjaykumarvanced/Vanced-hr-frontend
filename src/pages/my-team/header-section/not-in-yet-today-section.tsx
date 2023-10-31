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
  import {
    ProfilePicture,
  } from "../../../svgs";
  
  export const NotInYetTodaySection = () => {
    const today = new Date().toLocaleString("en-in", {
      month: "short",
      day: "numeric",
    });
    return (
      <Grid
        item
        xs={12}
        sx={{
          background: themeColors["#0C345D"],
          boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
          borderRadius: "6px",
          height: 352,
          maxHeight: 352,
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
              color: themeColors["#FFFFFF"],
            }}
          >
           Not In yet Today
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
              maxHeight: "245px",
              overflow: "auto",
              marginTop: "30px",
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
                    top: "0px",
                    width: "1px",
                    opacity: 1,
                    background: "rgb(254 254 254 / 50%)",
                  },
                  position: "relative",
                }}
              >
                <ListItem
                  sx={{
                    padding: "0px",
                    marginBottom: "25px",
                    paddingLeft: "13px",
                    "&:after": {
                      content: '" "',
                      display: "block",
                      position: "absolute",
                      zIndex: 5,
                      left: "-13px",
                      height: "14px",
                      width: "14px",
                      borderRadius: "10px",
                      opacity: 1,
                      border: "1px solid rgb(255 255 255 / 50%)",
                      background: themeColors["#0C345D"],
                    },
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiListItemText-primary": {
                        display: "flex",
                        gap: "10px",
                        fontSize: "14px",
                        fontFamily: themeFonts["Poppins-Regular"],
                        color: themeColors["#FFFFFF"],
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
                      {/* <img
                        src={apiBaseUrl + "/" + val.image.path}
                        height={30}
                        width={30}
                        alt="USER"
                      /> */}
                      <ProfilePicture />
                    </Box>
                    Durgesh Sharma
                  </ListItemText>
                </ListItem>
                <ListItem
                  sx={{
                    padding: "0px",
                    marginBottom: "25px",
                    paddingLeft: "13px",
                    "&:after": {
                      content: '" "',
                      display: "block",
                      position: "absolute",
                      zIndex: 5,
                      left: "-13px",
                      height: "14px",
                      width: "14px",
                      borderRadius: "10px",
                      opacity: 1,
                      border: "1px solid rgb(255 255 255 / 50%)",
                      background: themeColors["#0C345D"],
                    },
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiListItemText-primary": {
                        display: "flex",
                        gap: "10px",
                        fontSize: "14px",
                        fontFamily: themeFonts["Poppins-Regular"],
                        color: themeColors["#FFFFFF"],
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
                      {/* <img
                        src={apiBaseUrl + "/" + val.image.path}
                        height={30}
                        width={30}
                        alt="USER"
                      /> */}
                      <ProfilePicture />
                    </Box>
                    Durgesh Sharma
                  </ListItemText>
                </ListItem>
                <ListItem
                  sx={{
                    padding: "0px",
                    marginBottom: "25px",
                    paddingLeft: "13px",
                    "&:after": {
                      content: '" "',
                      display: "block",
                      position: "absolute",
                      zIndex: 5,
                      left: "-13px",
                      height: "14px",
                      width: "14px",
                      borderRadius: "10px",
                      opacity: 1,
                      border: "1px solid rgb(255 255 255 / 50%)",
                      background: themeColors["#0C345D"],
                    },
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiListItemText-primary": {
                        display: "flex",
                        gap: "10px",
                        fontSize: "14px",
                        fontFamily: themeFonts["Poppins-Regular"],
                        color: themeColors["#FFFFFF"],
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
                      {/* <img
                        src={apiBaseUrl + "/" + val.image.path}
                        height={30}
                        width={30}
                        alt="USER"
                      /> */}
                      <ProfilePicture />
                    </Box>
                    Durgesh Sharma
                  </ListItemText>
                </ListItem>
                <ListItem
                  sx={{
                    padding: "0px",
                    marginBottom: "25px",
                    paddingLeft: "13px",
                    "&:after": {
                      content: '" "',
                      display: "block",
                      position: "absolute",
                      zIndex: 5,
                      left: "-13px",
                      height: "14px",
                      width: "14px",
                      borderRadius: "10px",
                      opacity: 1,
                      border: "1px solid rgb(255 255 255 / 50%)",
                      background: themeColors["#0C345D"],
                    },
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiListItemText-primary": {
                        display: "flex",
                        gap: "10px",
                        fontSize: "14px",
                        fontFamily: themeFonts["Poppins-Regular"],
                        color: themeColors["#FFFFFF"],
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
                      {/* <img
                        src={apiBaseUrl + "/" + val.image.path}
                        height={30}
                        width={30}
                        alt="USER"
                      /> */}
                      <ProfilePicture />
                    </Box>
                    Durgesh Sharma
                  </ListItemText>
                </ListItem>
                <ListItem
                  sx={{
                    padding: "0px",
                    marginBottom: "25px",
                    paddingLeft: "13px",
                    "&:after": {
                      content: '" "',
                      display: "block",
                      position: "absolute",
                      zIndex: 5,
                      left: "-13px",
                      height: "14px",
                      width: "14px",
                      borderRadius: "10px",
                      opacity: 1,
                      border: "1px solid rgb(255 255 255 / 50%)",
                      background: themeColors["#0C345D"],
                    },
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiListItemText-primary": {
                        display: "flex",
                        gap: "10px",
                        fontSize: "14px",
                        fontFamily: themeFonts["Poppins-Regular"],
                        color: themeColors["#FFFFFF"],
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
                      {/* <img
                        src={apiBaseUrl + "/" + val.image.path}
                        height={30}
                        width={30}
                        alt="USER"
                      /> */}
                      <ProfilePicture />
                    </Box>
                    Durgesh Sharma
                  </ListItemText>
                </ListItem>
                <ListItem
                  sx={{
                    padding: "0px",
                    marginBottom: "25px",
                    paddingLeft: "13px",
                    "&:after": {
                      content: '" "',
                      display: "block",
                      position: "absolute",
                      zIndex: 5,
                      left: "-13px",
                      height: "14px",
                      width: "14px",
                      borderRadius: "10px",
                      opacity: 1,
                      border: "1px solid rgb(255 255 255 / 50%)",
                      background: themeColors["#0C345D"],
                    },
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiListItemText-primary": {
                        display: "flex",
                        gap: "10px",
                        fontSize: "14px",
                        fontFamily: themeFonts["Poppins-Regular"],
                        color: themeColors["#FFFFFF"],
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
                      {/* <img
                        src={apiBaseUrl + "/" + val.image.path}
                        height={30}
                        width={30}
                        alt="USER"
                      /> */}
                      <ProfilePicture />
                    </Box>
                    Durgesh Sharma
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  };
  