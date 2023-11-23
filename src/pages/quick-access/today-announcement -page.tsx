import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { themeColors, themeFonts } from "../../configs";
import { useState } from "react";
import { AddNewPostDialog } from "../../components/modals/add-new-post";
import {
  useDeleteAnnouncementMutation,
  useGetAnnouncementListQuery,
} from "../../components/apis/addAnnouncementsApi";
import { apiBaseUrl } from "../../components/consts/api-url.const";
import moment from "moment";
import { DeleteIconSvg } from "../../svgs";

export const TodaysAnnouncement = () => {
  const { data, refetch } = useGetAnnouncementListQuery<any>();
  const [deleteItem] = useDeleteAnnouncementMutation();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDelete = async (id: number) => {
    try {
      await deleteItem({ id });
      console.log("Item successfully deleted.");
    } catch (error) {
      console.log("Error deleting item:", error);
    }
    refetch();
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
          minHeight: 775,
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
            maxHeight: "693px",
            height: "100%",
          }}
        >
          {data && data.length !== 0 ? (
            <Box sx={{ width: "100%" }}>
              <List
                sx={{
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {data
                  ?.slice()
                  .reverse()
                  .map((val: any, idx: any) => {
                    let html = val.description;
                    return (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            paddingTop: "26px",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
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
                                height={40}
                                width={40}
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
                                (
                                {moment
                                  .utc(val.date)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                                )
                              </Typography>
                            </Box>
                          </Box>
                          <Button
                            sx={{
                              height: "20px",
                              minWidth: "20px",
                              padding: "0px ",
                            }}
                            onClick={() => handleDelete(val._id)}
                          >
                            <DeleteIconSvg />
                          </Button>
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
                            paddingBottom: "26px",
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
                                paddingTop: "18px",
                              }}
                            >
                              <Box
                                sx={{
                                  height: 300,
                                  width: 500,
                                  borderRadius: "6px",
                                  overflow: "hidden",
                                }}
                              >
                                <img
                                  src={apiBaseUrl + "/" + val.announcementImage}
                                  height={300}
                                  width={500}
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
              </List>
            </Box>
          ) : (
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                fontSize: "24px",
                fontFamily: themeFonts["Poppins-SemiBold"],
                color: themeColors["#224C78"],
                textTransform: "capitalize",
              }}
            >
              No Announcements Yet
            </Typography>
          )}
        </Box>
      </Grid>
      {isOpen && (
        <AddNewPostDialog
          open={isOpen}
          onClose={handleClose}
          refetch={refetch}
        />
      )}
    </>
  );
};
