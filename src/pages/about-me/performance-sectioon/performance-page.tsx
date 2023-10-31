import { Box, Button, Grid, Typography } from "@mui/material";

import { AttendanceLogTable } from "../../../table/attendance-log-table";
import { themeFonts, themeColors } from "../../../configs";
import { PraisesReceivedTable } from "../../../table/performance-tables/praises-received-table";

export const PerformancePage = () => {
  return (
    <>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "15px",
              color: themeColors["#0C345D"],
            }}
          >
            Continuous Feedback
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "10px",
                color: themeColors["#FFFFFF"],
                height: 29,
                background: themeColors["#0C345D"],
                borderRadius: "3px",
                paddingX: "15px",
              }}
            >
              Praises Received
            </Button>
            <Button
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "10px",
                color: themeColors["#224C78"],
                height: 29,
                background: themeColors["#E1E1E1"],
                borderRadius: "3px",
                paddingX: "9px",
              }}
            >
              Feedback Received
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <PraisesReceivedTable />
      </Grid>
    </>
  );
};
