import {
  Box,
  Button,
  Divider,
  InputAdornment,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { themeColors, themeFonts } from "../../configs";
import { useState } from "react";
import {
  useDeleteAnnouncementMutation,
  useGetAnnouncementListQuery,
} from "../../components/apis/addAnnouncementsApi";
import { apiBaseUrl } from "../../components/consts/api-url.const";
import moment from "moment";
import { CommentsIcon, DeleteIconSvg, Emojis, ThumbsUpIcon } from "../../svgs";

export const AnnouncementsItem = ({
  IsLoggedRole,
  AdminDashboard,
}: {
  IsLoggedRole?: any;
  AdminDashboard?: any;
}) => {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "13px",
          paddingTop: 0,
          width: "100%",
          gap: "20px",
          overflow: "auto",
          maxHeight: AdminDashboard ? "822px" : "693px",
          height: "100%",
        }}
      >
        {data && data.length !== 0 ? (
          <>
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
                          {IsLoggedRole ? (
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
                          ) : (
                            ""
                          )}
                        </Box>

                        <ListItem
                          sx={{
                            fontFamily: themeFonts["Poppins-SemiBold"],
                            fontSize: "14px",
                            color: themeColors["#0C345D"],
                            paddingTop: "24px",
                            paddingBottom: "10px",
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
                        <Box
                          sx={{
                            paddingX: "16px",
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            paddingBottom: "10px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <Button
                              sx={{
                                padding: "0px",
                                height: 30,
                                minWidth: 30,
                              }}
                            >
                              <ThumbsUpIcon />
                            </Button>
                            <Typography
                              sx={{
                                fontFamily: themeFonts["Poppins-Regular"],
                                fontSize: "12px",
                                color: themeColors["#7E7E7E"],
                              }}
                            >
                              Likes
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <Button
                              sx={{
                                padding: "0px",
                                height: 30,
                                minWidth: 30,
                              }}
                            >
                              <CommentsIcon />
                            </Button>
                            <Typography
                              sx={{
                                fontFamily: themeFonts["Poppins-Regular"],
                                fontSize: "12px",
                                color: themeColors["#7E7E7E"],
                              }}
                            >
                              Comments
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Divider sx={{ width: "100%" }} />
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "13px",
                              paddingY: "17px",
                            }}
                          >
                            <Box
                              sx={{
                                height: 40,
                                width: 40,
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
                            <TextField
                              multiline
                              placeholder="Add a comment...."
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="start">
                                    <Button
                                      sx={{
                                        padding: "0px",
                                        height: 30,
                                        minWidth: 30,
                                      }}
                                    >
                                      <Emojis />
                                    </Button>
                                  </InputAdornment>
                                ),
                              }}
                              sx={{
                                "&.MuiFormControl-root.MuiTextField-root": {
                                  width: "100%",
                                },
                                "& .MuiInputBase-colorPrimary.Mui-error": {
                                  color: themeColors["#323B4B"],
                                  border: "1px solid #1C223E6E",
                                  fontSize: 14,
                                },
                                "& .Mui-error": {
                                  fontFamily: themeFonts["Poppins-Bold"],
                                  color: themeColors["#FF3939"],
                                  fontSize: 14,
                                  marginLeft: 0,
                                },
                                "& .MuiOutlinedInput-root.MuiInputBase-colorPrimary":
                                  {
                                    fontFamily: themeFonts["Poppins-Regular"],
                                    color: themeColors["#2F353B"],
                                    fontSize: 14,
                                    paddingY: "10px",
                                  },
                                "& .Mui-error .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: 0,
                                  },
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "1px solid #1C223E6E",
                                  },
                                "& :hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#1C223E6E",
                                },
                              }}
                            />
                            <Button
                              sx={{
                                height: 40,
                                width: 40,
                              }}
                            >
                              Send
                            </Button>
                          </Box>
                          <List
                            sx={{
                              listStyle: "none",
                              padding: 0,
                            }}
                          >
                            <>
                              <ListItem
                                sx={{
                                  fontFamily: themeFonts["Poppins-SemiBold"],
                                  fontSize: "14px",
                                  color: themeColors["#0C345D"],
                                  paddingBottom: "10px",
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                  gap: "8px",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
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
                                        height: 30,
                                        width: 30,
                                        borderRadius: "5px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      <img
                                        src={apiBaseUrl + "/" + val.image.path}
                                        height={30}
                                        width={30}
                                        alt="pic"
                                      />
                                    </Box>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "7px",
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontFamily:
                                            themeFonts["Poppins-SemiBold"],
                                          fontSize: "12px",
                                          color: themeColors["#000000"],
                                        }}
                                      >
                                        {val.employee.firstName}
                                        {val.employee.lastName}
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontFamily:
                                            themeFonts["Poppins-Regular"],
                                          fontSize: "10px",
                                          color: themeColors["#9E9E9E"],
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
                                </Box>
                                <Box>
                                  <Typography
                                    sx={{
                                      fontFamily: themeFonts["Poppins-Regular"],
                                      fontSize: "12px",
                                      color: themeColors["#000000"],
                                    }}
                                  >
                                    <div
                                      className="announcement-description"
                                      dangerouslySetInnerHTML={{
                                        __html: html,
                                      }}
                                    />
                                  </Typography>
                                </Box>
                              </ListItem>
                              <Divider sx={{ width: "100%" }} />
                            </>
                          </List>
                        </Box>
                        <Divider sx={{ width: "100%" }} />
                      </>
                    );
                  })}
              </List>
            </Box>
          </>
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
    </>
  );
};
