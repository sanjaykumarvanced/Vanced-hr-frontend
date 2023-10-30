import {
  Box,
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { themeFonts, themeColors } from "../../configs";

export const AddNewStudentDialog = (props: any) => {
  const { onClose, open, data } = props;
  console.log(data);
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        flexShrink: 0,
        "& .css-1rfs30z-MuiPaper-root-MuiDialog-paper": {
          width: "calc(100% - 520px)",
          borderRadius: "20px",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: themeFonts["Poppins-SemiBold"],
          fontSize: "15px",
          color: themeColors["#0C345D"],
          padding: "20px",
        }}
      >
        Holidays
      </Typography>
      <Divider sx={{ width: "100%" }} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          paddingBottom: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: themeFonts["Poppins-SemiBold"],
            fontSize: "15px",
            color: themeColors["#0C345D"],
            width: "50%",
            paddingLeft: "25px",
          }}
        >
          Name
        </Typography>
        <Typography
          sx={{
            fontFamily: themeFonts["Poppins-SemiBold"],
            fontSize: "15px",
            color: themeColors["#0C345D"],
            width: "50%",
            paddingLeft: "25px",
          }}
        >
          Date
        </Typography>
      </Box>
      <Box
        sx={{
          height: "calc(100Vh - 400px)",
          overflow: "auto",
          marginY: "20px",
        }}
      >
        {data &&
          data.map((val: any, ind: any) => (
            <List
              key={ind}
              sx={{
                paddingX: "30px",
              }}
            >
              <ListItem
                sx={{
                  background: "aliceblue",
                  borderRadius: "5px",
                  border: "1px solid #EDEDED",
                }}
              >
                <ListItemText sx={{ width: "50%" }}>
                  {val.holidayName}
                </ListItemText>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    marginX: "20px",
                  }}
                />
                <ListItemText sx={{ width: "50%" }}>
                  {new Date(val.startDate).toLocaleString("en-us", {
                    month: "short",
                    year: "numeric",
                    day: "numeric",
                  })}
                  {val.startDate !== val.endDate &&
                    ` - ${new Date(val.endDate).toLocaleString("en-us", {
                      month: "short",
                      year: "numeric",
                      day: "numeric",
                    })}`}
                  {/* {val.startDate}-{val.endDate} */}
                </ListItemText>
              </ListItem>
            </List>
          ))}
      </Box>
    </Dialog>
  );
};