import { Grid, Box, Typography, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { themeFonts, themeColors } from "../configs";

import { DeleteIconSvg, EditIconSvg } from "../svgs";
import { apiBaseUrl } from "../components/consts/api-url.const";

import { SingleInputDateRangePicker } from "../components/calendar/calendar";
import { CustomDatePickerCalendar } from "../components/calendar/custom-calendar";
import { CustomDatePicker } from "../components/calendar/custom-date-picker";

const columns: GridColDef[] = [
  {
    field: "jj",
    headerName: "",
    width: 26,
    minWidth: 10,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
  },
  { field: "checkIn", headerName: "Check In", flex: 1 },
  { field: "checkOut", headerName: "Check Out", flex: 1 },
  {
    field: "workingHours",
    headerName: "Working Hours",
    flex: 1,
  },
  { field: "breakTime", headerName: "Break Time", flex: 1 },
  { field: "shift", headerName: "Shift", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
  },
];

export const AttendanceLogTable = () => {

  // const user = useSelector((state: any) => state.authentication.user);
  // const Id = user.map((val: any) => val.id);
  //   const { data }: any = useGetLeaveRequestByIdQuery({ id: Id });
  //   const [isOpen, setIsOpen] = useState(false);
  //   const handleClose = () => {
  //     setIsOpen(false);
  //   };
  //   const handleOpen = (data: any) => {
  //     setIsOpen(true);
  //   };

  //   console.log(data, Id);

  //   if (!data) {
  //     return null;
  //   }

  //   const rows = data.map((item: any) => ({
  //     id: item._id,
  //     leaveType: item.leaveType,
  //     from: format(new Date(item.startDate), "dd/MM/yyyy"),
  //     to: format(new Date(item.endDate), "dd/MM/yyyy"),
  //     noOfDays: item.noOfDays,
  //     reason: item.reason,
  //     approvedBy: item.approvedBy,
  //     status: item.status,
  //     employerImage: item.approvedBy.employerImage.path,
  //   }));
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          boxShadow: "0px 3px 6px 0px rgb(0 0 0 / 16%)",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          paddingLeft: "0px !important",
          paddingTop: "13px",
          background: themeColors["#FFFFFF"],
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              paddingX: "13px !important",
            }}
          >
            <Typography
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#0C345D"],
              }}
            >
              Attendance Log
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingX: "24px !important",
              gap: "20px",
            }}
          >
            <Button
              sx={{
                height: 39,
                borderRadius: "6px",
                backgroundColor: themeColors["#D7D9DB"],
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#0C345D"],
              }}
            >
              Shift Schedule
            </Button>
            <CustomDatePicker
              width={120}
              placeholder={"Oct 2023"}
              fontFamily={"Poppins-SemiBold"}
              color={"#0C345D"}
              fontSize={"15px"}
            />
          </Box>
        </Box>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={[]}
            columns={columns.map((col) => ({
              ...col,
              renderCell: (params) =>
                col.field === "action" ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Button
                      sx={{
                        height: "20px",
                        minWidth: "20px",
                        padding: "0px ",
                      }}
                      // onClick={() => handleClickEditOpen(params.row)}
                    >
                      <EditIconSvg />
                    </Button>
                    <Button
                      sx={{
                        height: "20px",
                        minWidth: "20px",
                        padding: "0px ",
                      }}
                      // onClick={() => handleDelete(params.row.id)}
                    >
                      <DeleteIconSvg />
                    </Button>
                  </Box>
                ) : col.field === "status" ? (
                  <Typography
                    sx={{
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "12px",
                      color:
                        params.value === "Approved"
                          ? themeColors["#42971B"]
                          : params.value === "Pending"
                          ? themeColors["#092ACC"]
                          : params.value === "Declined"
                          ? themeColors["#971B1B"]
                          : "",
                      background:
                        params.value === "Approved"
                          ? themeColors["rgb(128 199 98 / 31%)"]
                          : params.value === "Pending"
                          ? themeColors["rgb(98 111 199 / 31%)"]
                          : params.value === "Declined"
                          ? themeColors["rgb(199 98 98 / 31%)"]
                          : "",
                      borderRadius: "11px",
                      paddingX: "11px",
                      paddingY: "2px",
                    }}
                  >
                    {params.value}
                  </Typography>
                ) : col.field === "approvedBy" ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "5px",
                        overflow: "hidden",
                      }}
                    >
                      {/* <img
                        src={apiBaseUrl + "/" + params.row.employerImage}
                        alt="Employer"
                        height={30}
                        width={30}
                      /> */}
                    </Box>
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: themeFonts["Poppins-Regular"],
                        fontSize: "14px",
                        color: themeColors["#000000"],
                      }}
                    >
                      {/* {params.row.employerName} */}
                    </Typography>
                  </Box>
                ) : (
                  params.value
                ),

              sortable: false,
            }))}
            disableColumnSelector
            disableDensitySelector
            disableColumnFilter
            disableColumnMenu
            hideFooterSelectedRowCount
            pageSizeOptions={[]}
            sx={{
              border: 0,
              paddingY: 2,
            }}
          />
        </Box>
      </Grid>
    </>
  );
};
