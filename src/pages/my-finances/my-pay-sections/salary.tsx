import { Grid, Box, Typography, Divider, Button } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { CompensationImg } from "../../../pngs";

export const Salary = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        gap: "20px",
      }}
    >
      <Grid item xs={4}>
        <Grid
          item
          xs={12}
          sx={{
            background: themeColors["#FFFFFF"],
            boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
            borderRadius: "6px",
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
              Current Compensation
            </Typography>
            <Button
              variant="contained"
              sx={{
                height: 29,
                borderRadius: "3px",
                backgroundColor: themeColors["#E1E1E1"],
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "10px",
                color: themeColors["#0C345D"],
                paddingX: "13px",
                "&:hover": {
                  backgroundColor: "rgb(21 94 158)",
                },
              }}
            >
              Monthly PayCycle
            </Button>
          </Box>

          <Divider sx={{ width: "100%" }} />
          <Box
            sx={{
              padding: "13px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "21px",
                color: themeColors["#0C345D"],
                display: "flex",
                gap: "16px",
                height: "max-content",
                alignItems: "center",
              }}
            >
              INR :
              <Typography
                component={"span"}
                sx={{
                  fontSize: "15px",
                  fontFamily: themeFonts["Poppins-Regular"],
                  color: "rgb(0 0 0 / 60%)",
                  border: "1px solid #707070",
                  width: "143px",
                  height: "36px",
                  padding: "8px",
                  borderStyle: "dashed",
                  paddingTop: "7px",
                }}
              >
                1,50,000
              </Typography>
            </Typography>

            <img src={CompensationImg} alt="pic" />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Grid
          item
          xs={12}
          sx={{
            background: themeColors["#FFFFFF"],
            boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
            borderRadius: "6px",
            height: 411,
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
              Salary TimeLine
            </Typography>
          </Box>

          <Divider sx={{ width: "100%" }} />
          <Box
            sx={{
              paddingY: "17px",
              paddingX: "13px",
              paddingBottom: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "14px",
                color: themeColors["#FFFFFF"],
                width: "100%",
                height: "46px",
                background: themeColors["#0C345D"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Your Income and Tax liability is being computed as per new tax
              regime .
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              height: 292,
            }}
          >
            <Box
              sx={{
                paddingTop: "26px !important",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                padding: "13px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  fontSize: "14px",
                  color: themeColors["#000000"],
                }}
              >
                Salary Revision
              </Typography>
            </Box>

            <Box
              sx={{
                width: 811,
                // borderLeft: "0.5px solid rgb(0 0 0 / 12%)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "255px",
                  overflow: "auto",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      padding: "20px",
                      paddingTop: "26px 1important",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "14px",
                        color: themeColors["#000000"],
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      Effective Apr 01, 2023
                      <Typography
                        component={"span"}
                        sx={{
                          fontFamily: themeFonts["Poppins-SemiBold"],
                          fontSize: "10px",
                          color: themeColors["#279CAE"],
                          paddingY: "1px",
                          paddingX: "16px",
                          background: "rgb(39 156 174 / 24%)",
                          borderRadius: "9px",
                        }}
                      >
                        Current
                      </Typography>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "40px",
                      borderBottom: "1px solid #B9B9B9",
                    }}
                  >
                    <Box sx={{ paddingRight: "44px", paddingLeft: "20px" }}>
                      <Typography
                        sx={{
                          fontFamily: themeFonts["Poppins-Regular"],
                          fontSize: "10px",
                          color: themeColors["#2980BA"],
                        }}
                      >
                        Regular Salary
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: themeFonts["Poppins-SemiBold"],
                          fontSize: "15px",
                          color: themeColors["#000000"],
                        }}
                      >
                        INR : 1,50,000
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        borderLeft: "1px solid #B9B9B9",
                        paddingLeft: "44px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: themeFonts["Poppins-Regular"],
                          fontSize: "10px",
                          color: themeColors["#2980BA"],
                        }}
                      >
                        Total Salary
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: themeFonts["Poppins-SemiBold"],
                          fontSize: "15px",
                          color: themeColors["#000000"],
                        }}
                      >
                        INR : 1,50,000
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      padding: "20px",
                      paddingTop: "26px 1important",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "14px",
                        color: themeColors["#000000"],
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      Effective Apr 01, 2022
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "40px",
                      borderBottom: "1px solid #B9B9B9",
                    }}
                  >
                    <Box sx={{ paddingRight: "44px", paddingLeft: "20px" }}>
                      <Typography
                        sx={{
                          fontFamily: themeFonts["Poppins-Regular"],
                          fontSize: "10px",
                          color: themeColors["#2980BA"],
                        }}
                      >
                        Regular Salary
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: themeFonts["Poppins-SemiBold"],
                          fontSize: "15px",
                          color: themeColors["#000000"],
                        }}
                      >
                        INR : 1,50,000
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        borderLeft: "1px solid #B9B9B9",
                        paddingLeft: "44px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: themeFonts["Poppins-Regular"],
                          fontSize: "10px",
                          color: themeColors["#2980BA"],
                        }}
                      >
                        Total Salary
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: themeFonts["Poppins-SemiBold"],
                          fontSize: "15px",
                          color: themeColors["#000000"],
                        }}
                      >
                        INR : 1,50,000
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
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
                left: "19.5%",
                height: "-webkit-fill-available",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
