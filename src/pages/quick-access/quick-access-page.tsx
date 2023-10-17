import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { themeFonts, themeColors } from "../../configs";
import { DownArrowIcon1 } from "../../svgs";
import SocialDashboard from "./SocialDashboard";

export const QuickAccessPage = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          padding: "35px",
          paddingRight: "10px",
          paddingTop: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingY: "30px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "22px",
              color: themeColors["#000000"],
            }}
          >
            Quick Access
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "15px",
              color: themeColors["#FFFFFF"],
              height: 39,
              background: themeColors["#0C345D"],
            }}
            endIcon={<DownArrowIcon1 />}
          >
            Organization
          </Button>
        </Box>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: "0px !important",
            paddingTop: "0px !important",
            gap: "25px",
          }}
        >
          <Grid
            item
            xs={8}
          >
            <SocialDashboard />
          </Grid>
          <Grid
            item
            xs={7}
          >
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
