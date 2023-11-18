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
import { themeColors, themeFonts } from "../../../configs";
import { useSelector } from "react-redux";
import { useGetLeaveHistoryByIdQuery } from "../../../components/apis/leaveHistoryApi";

export const LeaveHistory = () => {
  const user = useSelector((state: any) => state.authentication.user);
  const Id = user[0].id;
  const { data }: any = useGetLeaveHistoryByIdQuery({ id: Id });
  console.log(data, Id);
  return (
    <Grid
      item
      xs={12}
      sx={{
        background: themeColors["#FFFFFF"],
        boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
        borderRadius: "6px",
        height: 234,
        maxHeight: 234,
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
          Leave History
        </Typography>
        {/* <Button
          variant="text"
          sx={{
            fontFamily: themeFonts["Poppins-Regular"],
            fontSize: "12px",
            color: themeColors["#0C345D"],
            textDecoration: "underline",
            height: 17,
            padding: 0,
          }}
        >
          Clear History
        </Button> */}
      </Box>

      <Divider sx={{ width: "100%" }} />

      <Box
        sx={{
          width: "100%",
          maxHeight: "175px",
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
                left: "80px",
                height: "-webkit-fill-available",
                top: "0px",
                width: "1px",
                opacity: 1,
                background: "#B9B9B9",
              },
              position: "relative",
            }}
          >
            {data &&
              data.map((val: any) => {
                const leaveDate = new Date(val.leaveDate).toLocaleString(
                  "en-in",
                  {
                    month: "short",
                    day: "numeric",
                  }
                );
                const today = new Date().toISOString();

                return (
                  <>
                    {val.leaveDate < today ? (
                      <ListItem
                        sx={{
                          padding: "0px",
                          paddingLeft: "13px",
                          marginBottom: "19px",
                        }}
                      >
                        <ListItemText
                          sx={{
                            maxWidth: "max-content",
                            marginRight: "50px",
                            marginY: 0,
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
                              alignItems: "center",
                              fontSize: "14px",
                              fontFamily: themeFonts["Poppins-SemiBold"],
                              color: themeColors["#0C345D"],
                              minWidth: "40px",
                              margin: 0,
                              padding: "4px",
                              lineHeight: "14px",
                            }}
                          >
                            {leaveDate}
                          </Typography>
                        </ListItemText>
                        <ListItemText
                          sx={{
                            "& .MuiListItemText-primary": {
                              display: "flex",
                              gap: "10px",
                              fontSize: "14px",
                              fontFamily: themeFonts["Poppins-Regular"],
                              color: themeColors["#000000"],
                              alignItems: "center",
                              "&:after": {
                                content: '" "',
                                display: "block",
                                position: "absolute",
                                zIndex: 5,
                                left: "-30px",
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
                          {val.leaveType}
                        </ListItemText>

                        <ListItemText
                          sx={{
                            "& .MuiListItemText-primary": {
                              fontSize: "14px",
                              fontFamily: themeFonts["Poppins-Regular"],
                              color: themeColors["#000000"],
                            },
                            width: "35%",
                          }}
                        >
                          {val.reason}
                        </ListItemText>
                      </ListItem>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
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
              left: "35%",
              height: "-webkit-fill-available",
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
};
