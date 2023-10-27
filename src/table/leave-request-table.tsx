import { Grid, Box, Typography, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { themeFonts, themeColors } from "../configs";
import { useSelector } from "react-redux";
import { useGetLeaveRequestByIdQuery } from "../components/apis/leaveRequestApi";
import { DeleteIconSvg, EditIconSvg } from "../svgs";
import { apiBaseUrl } from "../components/consts/api-url.const";
import { format } from "date-fns";
import { useState } from "react";
import { RequestLeavesDialog } from "../components/modals/request-leaves-modal";

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
  const Id = useSelector((state: any) => state.authentication.user);
  const { data }: any = useGetLeaveRequestByIdQuery({ id: Id });
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = (data: any) => {
    setIsOpen(true);
  };

  console.log(data, Id);

  if (!data) {
    return null;
  }

  // Map your data to rows
  const rows = data.map((item: any) => ({
    id: item._id, // Each row should have a unique identifier
    leaveType: item.leaveType,
    from: format(new Date(item.startDate), "dd/MM/yyyy"), // Format the start date
    to: format(new Date(item.endDate), "dd/MM/yyyy"),
    noOfDays: item.noOfDays,
    reason: item.reason,
    approvedBy: item.approvedBy,
    status: item.status,
    employerImage: item.approvedBy.employerImage.path, // Add the path to the employer's image
    employerName: `Mr. ${item.approvedBy.employer.firstName} ${item.approvedBy.employer.lastName}`,
  }));
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
                fontSize: "15px",
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
            }}
          >
            <Button
              variant="contained"
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
                      <img
                        src={apiBaseUrl + "/" + params.row.employerImage}
                        alt="Employer"
                        height={30}
                        width={30}
                      />
                    </Box>
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
      {isOpen && (
        <RequestLeavesDialog open={isOpen} onClose={handleClose} data={data} />
      )}
    </>
  );
};
