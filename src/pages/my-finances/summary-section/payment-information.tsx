import { Grid, Box, Typography, Divider} from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";

export const PaymentInformation = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        background: themeColors["#FFFFFF"],
        boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
        borderRadius: "6px",
        height: 303,
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
          Payment Information
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
            width: 811,
            borderLeft: "0.5px solid rgb(0 0 0 / 12%)",
          }}
        >
          <Box
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
          >
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#0C345D"],
              }}
            >
              Payment Information
            </Typography>
          </Box>
          <Box
            sx={{
              paddingLeft: "36px !important",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              height: 193,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: "130px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "10px",
                  color: themeColors["#2980BA"],
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                Bank
                <Typography
                  component={"span"}
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "15px",
                    color: themeColors["#000000"],
                  }}
                >
                  HDFC BANK
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "10px",
                  color: themeColors["#2980BA"],
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                Account Number
                <Typography
                  component={"span"}
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "15px",
                    color: themeColors["#000000"],
                  }}
                >
                  783249477621
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "10px",
                  color: themeColors["#2980BA"],
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                IFSC CODE
                <Typography
                  component={"span"}
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "15px",
                    color: themeColors["#000000"],
                  }}
                >
                  HDFC000131
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: "130px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "10px",
                  color: themeColors["#2980BA"],
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                Name of the Account
                <Typography
                  component={"span"}
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "15px",
                    color: themeColors["#000000"],
                  }}
                >
                  Udyam Kumar
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
