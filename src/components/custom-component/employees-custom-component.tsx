import { Box, Grid, Typography } from "@mui/material";
import { themeColors, themeFonts } from "../../configs";

interface CustomEmployeesProps {
  Title?: any;
  children?: any;
  value?: any;
}

export const CustomEmployees = ({
  value,
  children,
  Title,
}: CustomEmployeesProps) => {
  return (
    <>
      <Grid
        item
        xs={6}
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
            paddingTop: "13px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              fontFamily: themeFonts["Poppins-SemiBold"],
              color: "rgb(0 0 0 / 60%)",
              border: "1px solid #707070",
              width: "104px",
              height: "36px",
              padding: "8px",
              borderStyle: "dashed",
              paddingTop: "7px",
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
