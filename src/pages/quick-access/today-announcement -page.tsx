import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { themeColors, themeFonts } from "../../configs";
import { useState } from "react";
import { Profile } from "../../pngs";
import { BirthdayWishSvg } from "../../svgs";
import { AddNewPostDialog } from "../../components/modals/add-new-post";
import { useGetAnnouncementListQuery } from "../../components/apis/addAnnouncementsApi";
import { apiBaseUrl } from "../../components/consts/api-url.const";
import moment from "moment";

export const TodaysAnnouncement = () => {
  const { data } = useGetAnnouncementListQuery<any>();

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = (data: any) => {
    setIsOpen(true);
  };

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          background: themeColors["#FFFFFF"],
          boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
          borderRadius: "6px",
          minHeight: 888,
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
              fontSize: "16px",
              color: themeColors["#0C345D"],
            }}
          >
            Announcement
            {/* <Typography
              component="span"
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "16px",
                color: themeColors["#CF30CA"],
                paddingLeft: "3px",
              }}
            >
              (10)
            </Typography> */}
          </Typography>
          <Button
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "12px",
              color: themeColors["#224C78"],
              height: 29,
              background: themeColors["#E1E1E1"],
              borderRadius: "3px",
              paddingX: "13px",
            }}
            onClick={handleOpen}
          >
            Add New Post
          </Button>
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
            maxHeight: "800px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <List
              sx={{
                listStyle: "none",
                paddingLeft: 0,
                paddingTop: "18px",
              }}
            >
              {data &&
                data.map((val: any, idx: any) => {
                  let html = val.description;
                  return (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          paddingTop: "26px",
                        }}
                      >
                        <Box
                          sx={{
                            height: 38,
                            width: 38,
                            borderRadius: "5px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={apiBaseUrl + "/" + val.image.path}
                            height={38}
                            width={38}
                            alt="pic"
                          />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: themeFonts["Poppins-SemiBold"],
                              fontSize: "16px",
                              color: themeColors["#000000"],
                            }}
                          >
                            {val.employee.firstName} {val.employee.lastName}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: themeFonts["Poppins-Regular"],
                              fontSize: "14px",
                              color: themeColors["#55A232"],
                            }}
                          >
                            {moment
                              .utc(val.date)
                              .local()
                              .startOf("seconds")
                              .fromNow()}
                            {/* (10 min ago) */}
                          </Typography>
                        </Box>
                      </Box>
                      <ListItem
                        sx={{
                          // display: "list-item",
                          // "&::before": {
                          //   content: "'(' counter(list-item) ') '",
                          //   fontFamily: themeFonts["Poppins-SemiBold"],
                          //   fontSize: "16px",
                          //   color: themeColors["#0C345D"],
                          //   paddingRight: "15px",
                          // },
                          // counterIncrement: "list-item",
                          fontFamily: themeFonts["Poppins-SemiBold"],
                          fontSize: "14px",
                          color: themeColors["#0C345D"],
                          paddingTop: "24px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                          gap: "8px",
                        }}
                      >
                        {val.title}

                        <Typography
                          component="span"
                          sx={{
                            fontFamily: themeFonts["Poppins-Regular"],
                            fontSize: "14px",
                            color: themeColors["#000000"],
                          }}
                        >
                          <div
                            className="announcement-description"
                            dangerouslySetInnerHTML={{ __html: html }}
                          />
                        </Typography>
                        {val.announcementImage && (
                          <Box
                            sx={{
                              paddingY: "18px",
                            }}
                          >
                            <Box
                              sx={{
                                height: 252,
                                width: 384,
                                borderRadius: "6px",
                                overflow: "hidden",
                              }}
                            >
                              <img
                                src={apiBaseUrl + "/" + val.announcementImage}
                                height={252}
                                width={384}
                                alt="img"
                              />
                            </Box>
                          </Box>
                        )}
                      </ListItem>
                      <Divider sx={{ width: "100%" }} />
                    </>
                  );
                })}
              {/* <ListItem
                    sx={{
                      // display: "list-item",
                      // "&::before": {
                      //   content: "'(' counter(list-item) ') '",
                      //   fontFamily: themeFonts["Poppins-SemiBold"],
                      //   fontSize: "16px",
                      //   color: themeColors["#0C345D"],
                      //   paddingRight: "15px",
                      // },
                      // counterIncrement: "list-item",
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
                       <div dangerouslySetInnerHTML={{ __html: html }} />
                      </Typography>
                    </Box>
                  </ListItem> */}
            </List>
          </Box>
        </Box>
      </Grid>
      {isOpen && (
        <AddNewPostDialog
          open={isOpen}
          onClose={handleClose}
          // refetch={refetch}
        />
      )}
    </>
  );
};
