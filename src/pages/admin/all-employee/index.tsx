import { Grid, Box, Typography} from "@mui/material";
import { themeFonts, themeColors } from "../../../configs";
import { AllEmployeeListTable } from "../../../table/all-employees-table";
export const AllEmployee = () => {
const AllEmployees ="All Employee"
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
            All Employee
          </Typography>
        </Box>
        <AllEmployeeListTable maxHeight={580} AllEmployees={AllEmployees} />
      </Grid>
    </>
  );
};
