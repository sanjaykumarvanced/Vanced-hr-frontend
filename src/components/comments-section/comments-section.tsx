import { Box, Button, Typography, List, ListItem, Grid } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { themeFonts, themeColors } from "../../configs";
import { ThumbsUpIcon, CommentsIcon } from "../../svgs";
import { apiBaseUrl } from "../consts/api-url.const";
import { useCreateCommentsMutation } from "../apis/addCommentsApi";
import { useSelector } from "react-redux";
import { useGetImageQuery } from "../apis/imageApi";
import { toast } from "react-toastify";
import { Editor } from "react-draft-wysiwyg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useGetEmployeeListQuery } from "../apis/employeeListApi";
import { useCreateLikeMutation } from "../apis/addLikesApi";

export const CommentSection = ({
  data,
  refetch,
}: {
  data?: any;
  refetch?: any;
}) => {
  console.log(data);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const id: string = data && data._id;
  const [addComments] = useCreateCommentsMutation();
  const [addLike] = useCreateLikeMutation();
  const { data: employeeList } = useGetEmployeeListQuery();
  console.log(isOpen, "isOpen");
  const user = useSelector((state: any) => state.authentication.user);
  const UserId = user[0].id;
  const { data: image } = useGetImageQuery({ id: UserId });
  console.log(image, "image");

  const [editorState, setEditorState] = useState<any>(
    EditorState.createEmpty()
  );

  const likeEmployeeID =
    data && data?.likes?.map((val: any) => val.employee._id);

  const [value, setValue] = useState(likeEmployeeID.includes(UserId));
  const [totalLikes, setTotalLikes] = useState(data?.likes?.length);

  useEffect(() => {
    setTotalLikes(data?.likes?.length);
    setValue(likeEmployeeID.includes(UserId));
  }, [UserId, data?.likes?.length, likeEmployeeID]);

  const handleAddLike = async () => {
    // setValue(!value);
    // if (!value === true) {
    //   setTotalLikes(totalLikes + 1);
    // } else {
    //   setTotalLikes(totalLikes - 1);
    // }
    try {
      const res = await addLike({
        id,
        employee: UserId,
        image: image._id,
      }).unwrap();
      refetch();
      //toast.success(res.message);
    } catch (error: any) {
      console.error("Error for add like on post:", error);
      toast.error(error.data.message);
    }
    refetch();
  };

  const onEditorStateChange = (newEditorState: any) => {
    setEditorState(newEditorState);
  };
  const description = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );
  const array =
    employeeList &&
    employeeList.map((val: any) => {
      const firstName = val.firstName;
      const lastName = val.lastName;
      const userName = val.userName;
      const name = `${firstName || ""} ${lastName || ""}`;
      return { text: name, value: userName, url: userName };
    });

  const mentions = {
    separator: " ",
    trigger: "@",
    suggestions: array ? [...array] : [],
  };

  const hashtags = {};
  const handleAddComment = async () => {
    try {
      const res = await addComments({
        id,
        employee: UserId,
        image: image._id,
        text: description,
      }).unwrap();
      toast.success(res.message);
    } catch (error: any) {
      console.error("Error for add comment on post:", error);
      toast.error(error.data.message);
    }
    refetch();
    setEditorState(EditorState.createEmpty());
  };
  return (
    <>
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
            onClick={handleAddLike}
          >
            {value === true ? (
              <ThumbUpIcon fontSize="inherit" />
            ) : (
              <ThumbsUpIcon />
            )}
          </Button>
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "12px",
              color: themeColors["#7E7E7E"],
            }}
          >
            {totalLikes} Likes
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
            onClick={handleOpen}
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
            {data.comment.length} Comments
          </Typography>
        </Box>
      </Box>
      {isOpen === true && (
        <Box>
          {/* <Divider sx={{ width: "100%" }} /> */}
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
                minWidth: 40,
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <img
                src={apiBaseUrl + "/" + image.path}
                height={40}
                width={40}
                alt="pic"
              />
            </Box>
            <Grid
              item
              xs={12}
              sx={{
                paddingRight: "0px !important",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Editor
                toolbarHidden
                editorState={editorState}
                wrapperClassName="wrapper"
                toolbarClassName="toolbar-class"
                onEditorStateChange={onEditorStateChange}
                mention={mentions}
                hashtag={hashtags}
              />
            </Grid>
            <Button
              sx={{
                height: 40,
                width: 40,
              }}
              onClick={handleAddComment}
            >
              Send
            </Button>
          </Box>
          {data.comment?.map((val: any, idx: any) => {
            let html = val.text;
            return (
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
                              fontFamily: themeFonts["Poppins-SemiBold"],
                              fontSize: "12px",
                              color: themeColors["#000000"],
                            }}
                          >
                            {val.employee.firstName}
                            {val.employee.lastName}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: themeFonts["Poppins-Regular"],
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
                    <Box sx={{ paddingLeft: "40px" }}>
                      <div
                        className="comment"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    </Box>
                  </ListItem>
                </>
              </List>
            );
          })}
        </Box>
      )}
    </>
  );
};
