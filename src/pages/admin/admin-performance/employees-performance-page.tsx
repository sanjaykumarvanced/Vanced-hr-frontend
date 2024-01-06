import { Box, Grid, Typography } from "@mui/material";
import { themeFonts, themeColors } from "../../../configs";
import { PerformanceTable } from "../../../table/performance-tables/performence-table";

export const EmployeesPerformancePage = () => {
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
        <Grid
          item
          xs={12}
          sx={{
            padding: "0 !important",
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
              Performance
            </Typography>
          </Box>
          <PerformanceTable />
        </Grid>
      </Grid>
    </>
  );
};
