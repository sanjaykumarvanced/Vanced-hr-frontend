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
import { IsLoggedRole } from "../../utils/helpers";
import { Roles } from "../../components/consts/consts";
import { AnnouncementsItem } from "./announcement-items";

export const TodaysAnnouncement = ({ maxHeight }: { maxHeight?: any }) => {
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
          maxHeight: maxHeight ? maxHeight : 775,
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

          {IsLoggedRole("admin") ? (
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
          ) : (
            ""
          )}
        </Box>
        <Divider sx={{ width: "100%" }} />
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "13px",
            width: "100%",
            gap: "20px",
            overflow: "auto",
            maxHeight: "693px",
            height: "100%",
          }}
        > */}
        <AnnouncementsItem IsLoggedRole={IsLoggedRole("admin")} />
        {/* </Box> */}
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
