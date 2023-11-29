import { Box, Grid, Typography } from "@mui/material";
import { themeColors, themeFonts } from "../../configs";

interface CustomEmployeesProps {
  Title?: any;
  children?: any;
  value?: any;
  from?: any;
  xs?: any;
}

export const AdminCustomComponent = ({
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
        xs={12}
        sx={{
          background: themeColors["#FFFFFF"],
          boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
          borderRadius: "6px",
          padding: "13px",
          minHeight: "153px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
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
            </Typography>{" "}
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: themeFonts["Poppins-SemiBold"],
                color: themeColors["#0C345D"],
                paddingTop: "20px",
              }}
            >
              {value}
            </Typography>
          </Box>

          {children}
        </Box>
      </Grid>
    </>
  );
};
