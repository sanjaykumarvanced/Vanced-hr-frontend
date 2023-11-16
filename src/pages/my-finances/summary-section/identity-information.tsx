import { Grid, Box, Typography, Divider } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { FlagIconSvg, ProfilePicture } from "../../../svgs";

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
            paddingTop: "26px !important",
            display: "flex",
            flexDirection: "row",
            gap: "6px",
            padding: "13px",
            height: "max-content",
            alignItems: "center",
          }}
        >
          <FlagIconSvg />
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "15px",
              color: themeColors["#000000"],
            }}
          >
            PAN Card
          </Typography>

          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "10px",
              color: themeColors["#27AE60"],
              paddingY: "1px",
              paddingX: "16px",
              background: "rgb(39 174 96 / 27%)",
              borderRadius: "9px",
            }}
          >
            Verified
          </Typography>
        </Box>

        <Box
          sx={{
            width: 669,
            borderLeft: "0.5px solid rgb(0 0 0 / 12%)",
            height: 245,
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
                paddingLeft: "36px !important",
                padding: "20px",
                gap: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-Regular"],
                    fontSize: "10px",
                    color: themeColors["#2980BA"],
                    height: 35,
                    textAlign: "center",
                  }}
                >
                  Photo ID
                </Typography>
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "10px",
                    color: themeColors["#000000"],
                    textAlign: "center",
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
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-Regular"],
                    fontSize: "10px",
                    color: themeColors["#2980BA"],
                    height: 35,
                    textAlign: "center",
                  }}
                >
                  Name
                </Typography>
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "10px",
                    color: themeColors["#000000"],
                    textAlign: "center",
                  }}
                >
                  Udyam Kumar
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-Regular"],
                    fontSize: "10px",
                    color: themeColors["#2980BA"],
                    height: 35,
                    textAlign: "center",
                  }}
                >
                  Date Of Birth
                </Typography>
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "10px",
                    color: themeColors["#000000"],
                    textAlign: "center",
                  }}
                >
                  02/10/1990
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-Regular"],
                    fontSize: "10px",
                    color: themeColors["#2980BA"],
                    height: 35,
                    textAlign: "center",
                  }}
                >
                  Parent's Name
                </Typography>
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "10px",
                    color: themeColors["#000000"],
                    textAlign: "center",
                  }}
                >
                  Ramanuj Sharma
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-Regular"],
                    fontSize: "10px",
                    color: themeColors["#2980BA"],
                    height: 35,
                    textAlign: "center",
                  }}
                >
                  Permanent Account Number
                </Typography>
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "10px",
                    color: themeColors["#000000"],
                    textAlign: "center",
                  }}
                >
                  xxxxxxxxxxx
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  maxWidth: "118px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-Regular"],
                    fontSize: "10px",
                    color: themeColors["#2980BA"],
                    height: 35,
                    textAlign: "center",
                  }}
                >
                  Address Proof
                </Typography>
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "10px",
                    color: themeColors["#000000"],
                    textAlign: "center",
                  }}
                >
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                  (257) 563-7401
                </Typography>
              </Box>
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
