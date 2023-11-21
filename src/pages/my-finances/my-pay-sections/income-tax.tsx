import { Grid, Box, Typography, Divider} from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { GrossEarningSvg } from "../../../svgs";

export const IncomeTax = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          background: themeColors["#FFFFFF"],
          boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
          borderRadius: "6px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: "13px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "22px",
              color: themeColors["#0C345D"],
            }}
          >
            Income Tax Computation
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: themeFonts["Poppins-Regular"],
              color: "rgb(0 0 0 / 50%)",
            }}
          >
            View complete breakup , deductions and declarations . You can
            analyze how income tax is being calculated and what is the TDS every
            month .
          </Typography>
        </Box>
      </Grid>
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
            flexDirection: "column",
            gap: "32px",
            height: 98,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              paddingX: "36px",
              paddingTop: "17px",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "15px",
                  color: themeColors["#2980BA"],
                  height: 38,
                  textAlign: "center",
                }}
              >
                Net Taxable Income
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  fontSize: "12px",
                  color: themeColors["#000000"],
                  textAlign: "center",
                  paddingY: "13px",
                }}
              >
                INR 3,70,000
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "15px",
                  color: themeColors["#2980BA"],
                  height: 38,
                  textAlign: "center",
                }}
              >
                Gross Income Tax
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  fontSize: "12px",
                  color: themeColors["#000000"],
                  textAlign: "center",
                  paddingY: "13px",
                }}
              >
                INR 0
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "15px",
                  color: themeColors["#2980BA"],
                  height: 38,
                  textAlign: "center",
                }}
              >
                Total Surcharge & cess
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  fontSize: "12px",
                  color: themeColors["#000000"],
                  textAlign: "center",
                  paddingY: "13px",
                }}
              >
                INR 0
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "15px",
                  color: themeColors["#2980BA"],
                  height: 38,
                  textAlign: "center",
                }}
              >
                Net income tax payable
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  fontSize: "12px",
                  color: themeColors["#000000"],
                  textAlign: "center",
                  paddingY: "13px",
                }}
              >
                INR 0
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "15px",
                  color: themeColors["#2980BA"],
                  height: 38,
                  textAlign: "center",
                }}
              >
                Tax Paid Till Now
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  fontSize: "12px",
                  color: themeColors["#000000"],
                  textAlign: "center",
                  paddingY: "13px",
                }}
              >
                INR 0
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "15px",
                  color: themeColors["#2980BA"],
                  height: 38,
                  textAlign: "center",
                }}
              >
                Remaining Tax To be paid
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-SemiBold"],
                  fontSize: "12px",
                  color: themeColors["#000000"],
                  textAlign: "center",
                  paddingY: "13px",
                }}
              >
                INR 0
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
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          background: themeColors["#FFFFFF"],
          boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
          borderRadius: "6px",
          maxHeight: 309,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "31px",
              paddingBottom: "27px",
              paddingTop: "18px",
              paddingLeft: "13px",
              paddingRight: "25px",
              maxWidth: 307,
            }}
          >
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "22px",
                color: themeColors["#0C345D"],
              }}
            >
              Gross Earning from Employment
            </Typography>
            <GrossEarningSvg />
          </Box>

          <Box
            sx={{
              width: "100%",
              borderLeft: "0.5px solid rgb(0 0 0 / 12%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingX: "13px",
                paddingY: "17px",
                width: "100%",
                height: "55px",
                borderBottom: "0.5px solid rgb(0 0 0 / 12%)",
                gap: "36px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "12px",
                  color: themeColors["#8F8F8F"],
                  alignItems: "center",
                  display: "flex",
                  paddingLeft: "20px",
                  "&:before": {
                    content: '" "',
                    display: "block",
                    position: "absolute",
                    left: "-6px",
                    height: "20px",
                    width: "20px",
                    borderRadius: "10px",
                    background: "#275687",
                    boxShadow: "0px 3px 6px 0px rgb(0 0 0 / 16%)",
                  },
                  position: "relative",
                }}
              >
                Income from previous employer
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "12px",
                  color: themeColors["#8F8F8F"],
                  alignItems: "center",
                  display: "flex",
                  paddingLeft: "20px",
                  "&:before": {
                    content: '" "',
                    display: "block",
                    position: "absolute",
                    left: "-6px",
                    height: "20px",
                    width: "20px",
                    borderRadius: "10px",
                    background: "#D6801D",
                    boxShadow: "0px 3px 6px 0px rgb(0 0 0 / 16%)",
                  },
                  position: "relative",
                }}
              >
                Income from current employee ( Imported )
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "12px",
                  color: themeColors["#8F8F8F"],
                  alignItems: "center",
                  display: "flex",
                  paddingLeft: "20px",
                  "&:before": {
                    content: '" "',
                    display: "block",
                    position: "absolute",
                    left: "-6px",
                    height: "20px",
                    width: "20px",
                    borderRadius: "10px",
                    background: "#7FBF65",
                    boxShadow: "0px 3px 6px 0px rgb(0 0 0 / 16%)",
                  },
                  position: "relative",
                }}
              >
                Projected Salary
              </Typography>
            </Box>
            <Box
              sx={{
                height: "161px",
                border: "1px solid #707070",
                borderStyle: "dashed",
                marginX: "20px",
                marginTop: "42px",
                marginBottom: "51px",
                borderRadius: "6px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingX: "16px",
                    paddingTop: "12px",
                    gap: "51px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Salary Breakup
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#000000"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      INR 13,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Total
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#000000"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      INR 13,70,000
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingX: "16px",
                    paddingTop: "12px",
                    gap: "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Apr23
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#000000"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      1,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      May23
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#000000"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      1,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Jun23
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#000000"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      1,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Jul23
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#000000"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      1,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Aug23
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#000000"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      1,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Sep23
                      <Typography
                        sx={{
                          "&:before": {
                            content: '" "',
                            display: "block",
                            position: "absolute",
                            height: "9px",
                            width: "9px",
                            borderRadius: "10px",
                            background: "#7FBF65",
                            boxShadow: "0px 3px 6px 0px rgb(0 0 0 / 16%)",
                          },
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      ></Typography>
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#7FBF65"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      2,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Oct23
                      <Typography
                        sx={{
                          "&:before": {
                            content: '" "',
                            display: "block",
                            position: "absolute",
                            height: "9px",
                            width: "9px",
                            borderRadius: "10px",
                            background: "#7FBF65",
                            boxShadow: "0px 3px 6px 0px rgb(0 0 0 / 16%)",
                          },
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      ></Typography>
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#7FBF65"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      2,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Nov23
                      <Typography
                        sx={{
                          "&:before": {
                            content: '" "',
                            display: "block",
                            position: "absolute",
                            height: "9px",
                            width: "9px",
                            borderRadius: "10px",
                            background: "#7FBF65",
                            boxShadow: "0px 3px 6px 0px rgb(0 0 0 / 16%)",
                          },
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      ></Typography>
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#7FBF65"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      2,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Dec23
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#000000"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      1,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Jan24
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#000000"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      1,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Feb24
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#000000"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      1,70,000
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "15px",
                        color: themeColors["#0C345D"],
                        height: 38,
                        textAlign: "center",
                      }}
                    >
                      Mar24
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["#000000"],
                        textAlign: "center",
                        paddingY: "13px",
                      }}
                    >
                      1,70,000
                    </Typography>
                  </Box>
                </Box>
                <Divider
                  sx={{
                    marginY: "0px",
                    position: "absolute",
                    zIndex: 1,
                    top: "50px",
                    left: 0,
                    width: "100%",
                  }}
                />
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
                  left: "11%",
                  height: "-webkit-fill-available",
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
                  left: "19.7%",
                  height: "-webkit-fill-available",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
