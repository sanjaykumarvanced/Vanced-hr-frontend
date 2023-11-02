import { Grid, Box, Typography, Divider } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";

export const StatutoryInformation = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        background: themeColors["#FFFFFF"],
        boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
        borderRadius: "6px",
        height: 300,
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
          height: "55px",
        }}
      >
        <Typography
          sx={{
            fontFamily: themeFonts["Poppins-SemiBold"],
            fontSize: "15px",
            color: themeColors["#0C345D"],
          }}
        >
          Statutory Information
        </Typography>
      </Box>

      <Divider sx={{ width: "100%" }} />

      <Box
        sx={{
          height: 245,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            height: 245,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              paddingX: "13px",
              paddingY: "17px",
              gap: "75px",
            }}
          >
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#000000"],
                height: "100%",
                width: 183,
              }}
            >
              ESI Account Information
            </Typography>
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "10px",
                color: themeColors["#2980BA"],
                display: "flex",
                flexDirection: "column",
                maxWidth: "118px",
                height: "100%",
              }}
            >
              ESI Status
              <Typography
                component={"span"}
                sx={{
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  fontSize: "10px",
                  color: themeColors["#000000"],
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                Not Eligible
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              paddingX: "13px",
              gap: "75px",
            }}
          >
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#000000"],
                height: "100%",
                width: 183,
              }}
            >
              LWF Details
            </Typography>
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "10px",
                color: themeColors["#2980BA"],
                display: "flex",
                flexDirection: "column",
                maxWidth: "118px",
                height: "100%",
              }}
            >
              LWF Status
              <Typography
                component={"span"}
                sx={{
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  fontSize: "10px",
                  color: themeColors["#000000"],
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                Disable
              </Typography>
            </Typography>
          </Box>
          <Divider
            sx={{
              marginY: "0px",
              position: "absolute",
              zIndex: 1,
              top: "70px",
              left: 0,
              width: "100%",
            }}
          />
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{
              marginX: "33px",
              marginY: "0px",
              position: "absolute",
              zIndex: 1,
              top: 0,
              left: "31%",
              height: "-webkit-fill-available",
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
};
