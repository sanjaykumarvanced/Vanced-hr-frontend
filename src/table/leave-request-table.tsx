import { Grid, Box, Typography, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { themeFonts, themeColors } from "../configs";
import { useSelector } from "react-redux";
import { useGetLeaveRequestByIdQuery } from "../components/apis/leaveRequestApi";
import {  EditIconSvg } from "../svgs";
import { apiBaseUrl } from "../components/consts/api-url.const";
import { format } from "date-fns";
import { useState } from "react";
import { RequestLeavesDialog } from "../components/modals/request-leaves-modal";
import { SingleInputDateRangePicker } from "../components/calendar/calendar";
import { useGetEmployeeListQuery } from "../components/apis/employeeListApi";
import { toCamelCaseFormat } from "../utils/helpers";
import moment from "moment";


const columns: GridColDef[] = [
  {
    field: "jj",
    headerName: "",
    width: 26,
    minWidth: 10,
  },
  {
    field: "leaveType",
    headerName: "Leave Type",
    flex: 1,
  },
  { field: "from", headerName: "From", flex: 1 },
  { field: "to", headerName: "To", flex: 1 },
  {
    field: "noOfDays",
    headerName: "No. of Days",
    flex: 1,
  },
  { field: "reason", headerName: "Reason", flex: 1 },
  { field: "approvedBy", headerName: "Approved By", flex: 1 },
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

export const LeaveRequestTable = () => {
  const user = useSelector((state: any) => state.authentication.user);
  const Id = user[0].id;
  const { data, refetch }: any = useGetLeaveRequestByIdQuery({ id: Id });

  const { data: employeeList } = useGetEmployeeListQuery<any>();
  const [editedData, setEditedData] = useState<any>({});
  const currentDate = moment();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
    setEditedData({});
  };
  const handleOpen = () => {
    setIsOpen(true);
    setEditedData({});
  };

  if (!data) {
    return null;
  }

  const rows = data.map((item: any) => ({
    id: item._id,
    leaveType: toCamelCaseFormat(item.leaveType),
    from: format(new Date(item.startDate), "dd/MM/yyyy"),
    to: format(new Date(item.endDate), "dd/MM/yyyy"),
    noOfDays: item.noOfDays,
    notify: item.notify,
    reason: item.reason,
    approvedBy: item?.approvedBy,
    status: item.status,
    durations: item.durations,
    startTime: item.startTime,
    endTime: item.endTime,
    employerImage: item?.approvedBy?.employer?.employerImage?.path,
    employerName: item?.approvedBy?.employer?.userName,
  }));
  const handleClickEditOpen = (data: any, action?: string) => {
    setIsOpen(true);
    setEditedData({ ...data, action });
  };
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
          marginTop: "20px",
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
                fontSize: "16px",
                color: themeColors["#0C345D"],
              }}
            >
              Leave Request
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
            <SingleInputDateRangePicker placeholder={"Jan 2023 - Dec 2023"} />
            <Button
              sx={{
                height: 39,
                borderRadius: "6px",
                backgroundColor: themeColors["#0C345D"],
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "15px",
                color: themeColors["#FFFFFF"],
                "&:hover": {
                  backgroundColor: "rgb(21 94 158)",
                },
              }}
              onClick={handleOpen}
            >
              Request Leaves
            </Button>
          </Box>
        </Box>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows || []}
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
                      disabled={moment(params.row.from, "DD/MM/YYYY").isBefore(currentDate)}
                      sx={{
                        height: "20px",
                        minWidth: "20px",
                        padding: "0px ",
                        "&.Mui-disabled ": {
                          "& svg path": { fill: "rgba(0, 0, 0, 0.26)" },
                        },
                      }}
                      onClick={() => handleClickEditOpen(params.row, "edit")}
                    >
                      <EditIconSvg />
                    </Button>
                    {/* <Button
                      sx={{
                        height: "20px",
                        minWidth: "20px",
                        padding: "0px ",
                      }}
                      // onClick={() => handleDelete(params.row.id)}
                    >
                      <DeleteIconSvg />
                    </Button> */}
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
                  <>
                    {params.row.approvedBy ? (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "7px",
                        }}
                      >
                        {params.row.employerImage && (
                          <Box
                            sx={{
                              height: "30px",
                              width: "30px",
                              borderRadius: "5px",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={apiBaseUrl + "/" + params.row.employerImage}
                              alt="Employer"
                              height={30}
                              width={30}
                            />
                          </Box>
                        )}
                        <Typography
                          component="span"
                          sx={{
                            fontFamily: themeFonts["Poppins-Regular"],
                            fontSize: "14px",
                            color: themeColors["#000000"],
                          }}
                        >
                          {params.row.employerName}
                        </Typography>
                      </Box>
                    ) : (
                      <Typography
                        sx={{
                          width: "50%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        -
                      </Typography>
                    )}
                  </>
                ) : (
                  params.value
                ),

              sortable: false,
            }))}
            disableColumnSelector
            disableDensitySelector
            disableColumnFilter
            disableColumnMenu
            hideFooter
            pageSizeOptions={[]}
            sx={{
              border: 0,
              paddingY: 2,
            }}
          />
        </Box>
      </Grid>
      {isOpen && (
        <RequestLeavesDialog
          open={isOpen}
          onClose={handleClose}
          refetch={refetch}
          editedData={editedData}
          employeeList={employeeList}
        />
      )}
    </>
  );
};
