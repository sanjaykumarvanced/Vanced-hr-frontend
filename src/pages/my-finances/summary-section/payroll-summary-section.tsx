import { Grid, Box, Typography, Divider, Button } from "@mui/material";
import { themeColors, themeFonts } from "../../../configs";
import { PayrollSummarySvg } from "../../../svgs";

export const PayrollSummarySection = () => {
  return (
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
          Payroll Summary
        </Typography>
      </Box>

      <Divider sx={{ width: "100%" }} />
      <Box
        sx={{
          padding: "13px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            paddingTop: "13px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "26px",
          }}
        >
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "15px",
              color: themeColors["#000000"],
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            Punching : 09:30 AM
            <Typography
              component={"span"}
              sx={{
                fontFamily: themeFonts["Poppins-Regular"],
                fontSize: "10px",
                color: themeColors["#2980BA"],
              }}
            >
              ( Sep 2023 : 1 Sep - 31 Sep )
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "15px",
              color: themeColors["#000000"],
            }}
          >
            Working Days : 31
          </Typography>
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "15px",
              color: themeColors["#000000"],
            }}
          >
            Loss of Pay : 0
          </Typography>
          <Button
            sx={{
              height: 39,
              borderRadius: "6px",
              backgroundColor: themeColors["#0C345D"],
              fontFamily: themeFonts["Poppins-Regular"],
              fontSize: "15px",
              color: themeColors["#FFFFFF"],
              width: 137,
              paddingX: "22px",
              "&:hover": {
                backgroundColor: "rgb(21 94 158)",
              },
              marginBottom: "7px",
            }}
          >
            View Payslip
          </Button>
        </Box>
        <PayrollSummarySvg />
      </Box>
    </Grid>
  );
};
