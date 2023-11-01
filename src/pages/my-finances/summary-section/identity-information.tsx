import { Grid, Box, Typography, Divider } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { ProfilePicture } from "../../../svgs";

export const IdentityInformation = () => {
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
          Identity Information
        </Typography>
      </Box>

      <Divider sx={{ width: "100%" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            paddingTop: "26px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            padding: "13px",
          }}
        >
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "10px",
              color: themeColors["#2980BA"],
            }}
          >
            Salary payment mode
          </Typography>

          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "15px",
              color: themeColors["#000000"],
            }}
          >
            Bank Server
          </Typography>
        </Box>

        <Box
          sx={{
            width: 669,
            borderLeft: "0.5px solid rgb(0 0 0 / 12%)",
          }}
        >
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "36px",
              paddingY: "17px",
              width: "100%",
              height: "55px",
              borderBottom: "0.5px solid rgb(0 0 0 / 12%)",
            }}
          ></Box> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              height: 193,
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                paddingLeft: "36px",
                padding: "20px",
                gap: "25px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "10px",
                  color: themeColors["#2980BA"],
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                Photo ID
                <Typography
                  component={"span"}
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "15px",
                    color: themeColors["#000000"],
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "5px",
                      overflow: "hidden",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ProfilePicture />
                  </Box>
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "10px",
                  color: themeColors["#2980BA"],
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                Name
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
                  Udyam Kumar
                </Typography>
              </Typography>{" "}
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "10px",
                  color: themeColors["#2980BA"],
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                Date Of Birth
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
                  02/10/1990
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "10px",
                  color: themeColors["#2980BA"],
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                Parent's Name
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
                  Ramanuj Sharma
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "10px",
                  color: themeColors["#2980BA"],
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                Permanent Account Number
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
                  xxxxxxxxxxx
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "10px",
                  color: themeColors["#2980BA"],
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                Address Proof
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
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                  (257) 563-7401
                </Typography>
              </Typography>
            </Box>
            <Divider
              sx={{
                marginY: "0px",
                position: "absolute",
                zIndex: 1,
                top: "55px",
                left: 0,
                width: "100%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
