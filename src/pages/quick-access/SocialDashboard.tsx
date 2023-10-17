import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { themeColors, themeFonts } from "../../configs";
import { HolidaysBackground, Inbox } from "../../pngs";
import { useGetHolidaysDetailsQuery } from "../../components/apis/holidaysDetailsApi";

const SocialDashboard = () => {
  const year = new Date().getFullYear();
  const { data }: any = useGetHolidaysDetailsQuery({ year });
  console.log("data", data, year);
  const upcomingHolidays =
    data &&
    data
      .filter(
        (holiday: { startDate: string }) =>
          new Date(holiday.startDate) >= new Date()
      )
      .sort(
        (a: { startDate: string }, b: { startDate: string }) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );

  const upcomingHoliday = upcomingHolidays && upcomingHolidays[0];
  console.log(
    `${new Date(upcomingHoliday.startDate).toLocaleDateString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })}`,
    "upcomingHoliday"
  );

  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: "0px !important",
        paddingTop: "0px !important",
        gap: "20px",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          background: themeColors["#FFFFFF"],
          boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
          borderRadius: "6px",
          paddingRight: "25px",
          paddingTop: "18px",
          paddingLeft: "13px",
          paddingBottom: "22px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#0C345D"],
              }}
            >
              Inbox
            </Typography>
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#0C345D"],
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              Good Job!
              <Typography
                component="span"
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "12px",
                  color: "rgb(0 0 0 / 50%)",
                }}
              >
                You have no pending actions.
              </Typography>
            </Typography>
          </Box>

          <img src={Inbox} alt="Inbox" height={108} width={132} />
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          background: themeColors["#3551AB"],
          boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
          borderRadius: "6px",
          paddingY: "13px",
          paddingX: "13px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Box>
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#FFFFFF"],
              }}
            >
              Holidays
            </Typography>
          </Box>
          {upcomingHoliday && (
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#FFFFFF"],
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {upcomingHoliday.holidayName}
              <Typography
                component="span"
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "12px",
                  color: "rgb(255 255 255 / 60%)",
                }}
              >
                {new Date(upcomingHoliday.startDate).toLocaleString("en-us", {
                  weekday: "short",
                })}{" "}
                ,{" "}
                {new Date(upcomingHoliday.startDate).toLocaleString("en-us", {
                  month: "short",
                  year: "numeric",
                  day: "numeric",
                })}
                <Chip
                  sx={{
                    background: themeColors["#627AC7"],
                    marginLeft: "6px",
                    height: "auto",
                    "& .MuiChip-label": {
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "10px",
                      color: themeColors["#FFFFFF"],
                    },
                  }}
                  label="Floater Leave"
                />
              </Typography>
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            overflow: "hidden",
            right: 0,
          }}
        >
          <img src={HolidaysBackground} alt="HolidaysBackground" />
        </Box>
        <Button
          variant="text"
          sx={{
            fontFamily: themeFonts["Poppins-Regular"],
            fontSize: "12px",
            color: themeColors["#FFFFFF"],
            height: 13,
            padding: 0,
          }}
        >
          View All
        </Button>
      </Grid>
    </Grid>
  );
};

export default SocialDashboard;