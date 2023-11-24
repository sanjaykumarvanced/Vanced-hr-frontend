import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import { themeFonts, themeColors } from "../../configs";
import { CloseIconSvg1 } from "../../svgs";
import { CustomFilledInput } from "../input";
import { CustomLabel } from "../label";
import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useCreateAnnouncementMutation } from "../apis/addAnnouncementsApi";
import { useSelector } from "react-redux";
import { useGetEmployeeListQuery } from "../apis/employeeListApi";
import { useUploadImageMutation } from "../apis/imageApi";

export const AddNewPostDialog = (props: any) => {
  const [postAd] = useCreateAnnouncementMutation();
  const [mutate] = useUploadImageMutation();
  const { data } = useGetEmployeeListQuery();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState<any>("");
  const [image, setImage] = useState<any>("");
  const user = useSelector((state: any) => state.authentication.user);
  const Id = user[0].id;
  const onEditorStateChange = (newEditorState: any) => {
    setEditorState(newEditorState);
  };
  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleReset = () => {
    setTitle("");
    setEditorState(EditorState.createEmpty());
    setImage("");
  };

  const handleImageChange = (e: any) => {
    setImage(e.target.files?.[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const description = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    if (description === "<p></p>\n") {
      handleClose();
    } else {
      const announcement = {
        employee: Id,
        title: title,
        description,
      } as any;
      const res = await postAd(announcement).unwrap();
      if (res) {
        if (image) {
          const formData = new FormData();
          formData.append("image", image);
          const uploadImg = {
            id: res.announcement._id,
            image: formData,
          } as any;
          await mutate(uploadImg).unwrap();
        }
      }
      refetch();
      handleClose();
    }
  };
  const array =
    data &&
    data.map((val: any) => {
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

  const { onClose, open, refetch } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        flexShrink: 0,
        "& .css-1rfs30z-MuiPaper-root-MuiDialog-paper": {
          width: "850px",
          maxWidth: "850px",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontFamily: themeFonts["Poppins-SemiBold"],
          fontSize: "16px",
          color: themeColors["#0A2A4A"],
          m: 0,
          paddingY: "17px",
          paddingX: "27px",
        }}
      >
        Add New Post
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 20,
          top: 19,
          height: "25px",
          width: "25px",
        }}
      >
        <CloseIconSvg1 />
      </IconButton>
      <form onSubmit={handleSubmit}>
        <DialogContent
          dividers
          sx={{
            paddingX: "27px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Grid item xs={12}>
            <CustomFilledInput
              label="Title"
              placeholder=""
              type="text"
              height="50px"
              fontSize="14px"
              border="1px solid rgb(0 0 0 / 30%)"
              color="#2F353B"
              disableValue
              value={title}
              onChangeValue={handleChange}
            />
          </Grid>
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
            <CustomLabel label={"Description"} fontSize="14px" />

            <Editor
              toolbarHidden
              editorState={editorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              onEditorStateChange={onEditorStateChange}
              mention={mentions}
              hashtag={hashtags}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <Button
                variant="outlined"
                component="label"
                sx={{
                  height: 36,
                  color: themeColors["#0C345D"],
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  fontSize: "14px",
                  paddingX: "16px",
                  border: "1px solid #707070",
                  borderStyle: "dashed",
                  paddingY: "10px",
                  borderRadius: 0,
                }}
                // onClick={handleUpdateImage}
              >
                {image === "" ? "Upload New Photo" : "Image Uploaded"}
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </Button>
              <Button
                component="label"
                sx={{
                  height: 36,
                  color: themeColors["#737373"],
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  fontSize: "14px",
                  paddingX: "15px",
                  paddingY: "10px",
                  borderRadius: 0,
                  backgroundColor: themeColors["#D4D4D4"],
                }}
                onClick={handleReset}
              >
                Reset
              </Button>
            </Box>
            {/* <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  color: themeColors["#1B64B8"],
                }}
              >
                ( Allowed PNG , JPG , JPEG ) ( Size : 1.0 MB )
              </Typography>
            </Box> */}
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "end",
            paddingTop: "20px",
            paddingBottom: "26px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                width: 117,
                height: 39,
                borderRadius: "5px",
                border: "1px solid #0C345D",
                color: themeColors["#0C345D"],
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "15px",
                "&:hover": {
                  backgroundColor: themeColors["#0C345D"],
                  color: themeColors["#FFFFFF"],
                },
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              sx={{
                width: 117,
                height: 39,
                borderRadius: "5px",
                backgroundColor: themeColors["#0C345D"],
                color: themeColors["#FFFFFF"],
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "15px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: themeColors["#0C345D"],
                  border: "1px solid #0C345D",
                },
              }}
            >
              Post
            </Button>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
};
