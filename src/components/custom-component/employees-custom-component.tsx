import { Box, Grid, Typography } from "@mui/material";
import { themeColors, themeFonts } from "../../configs";

interface CustomEmployeesProps {
  Title?: any;
  children?: any;
  value?: any;
  from?: any;
  xs?: any;
}

export const CustomEmployees = ({
  value,
  children,
  Title,
  from,
  xs,
}: CustomEmployeesProps) => {
  return (
    <>
      <Grid
        item
        xs={from === "admin-dashboard" ? xs : 6}
        sx={{
          background: themeColors["#FFFFFF"],
          boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
          borderRadius: "6px",
          padding: "13px",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            fontFamily: themeFonts["Poppins-SemiBold"],
            color: themeColors["#0C345D"],
          }}
        >
          {Title}
        </Typography>
        <Box
          sx={{
            paddingTop: from === "admin-dashboard" ? "0px" : "13px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: from === "admin-dashboard" ? "30px" : "15px",
              fontFamily: themeFonts["Poppins-SemiBold"],
              color:
                from === "admin-dashboard"
                  ? themeColors["#0C345D"]
                  : "rgb(0 0 0 / 60%)",
              border: from === "admin-dashboard" ? 0 : "1px solid #707070",
              width: from === "admin-dashboard" ? "auto" : "104px",
              height: "36px",
              padding: from === "admin-dashboard" ? 0 : "8px",
              borderStyle: from === "admin-dashboard" ? "none" : "dashed",
              paddingTop: from === "admin-dashboard" ? "20px" : "7px",
            }}
          >
            {value}
          </Typography>
          {children}
        </Box>
      </Grid>
    </>
  );
};
