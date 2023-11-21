import { Grid, Box, Typography, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { themeColors, themeFonts } from "../configs";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import {
  useGetRequestedLeavesByIdQuery,
  useUpdateRequestedLeavesMutation,
} from "../components/apis/requestedLeavesApi";
import { useSelector } from "react-redux";
import { useGetLeaveRequestByIdQuery } from "../components/apis/leaveRequestApi";

const columns: GridColDef[] = [
  {
    field: "jj",
    headerName: "",
    width: 26,
    minWidth: 10,
  },
  {
    field: "employeeName",
    headerName: "Employee Name",
    flex: 1,
  },
  {
    field: "noOfDays",
    headerName: "No of Days",
    flex: 1,
  },
  {
    field: "reason",
    headerName: "Reason",
    flex: 1,
  },
  {
    field: "status",
    headerName: "status",
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
  },
];

export const ApprovedLeaves = () => {
  const Id = "652d31fc3d93ae86647ec0fe";
  const { data, refetch }: any = useGetRequestedLeavesByIdQuery({
    employerId: Id,
  });
  const [updateLeaveStatus] = useUpdateRequestedLeavesMutation();
  const user = useSelector((state: any) => state.authentication.user);
  const id = user[0].id;
  const { refetch: leaveRefetch }: any = useGetLeaveRequestByIdQuery({
    id: id,
  });
  if (!data) {
    return null;
  }

  const rows = data.map((item: any) => ({
    id: item._id,
    employeeName: `${item.employee.firstName} ${item.employee.lastName}`,
    noOfDays: item.noOfDays,
    reason: item.reason,
    status: item.status,
  }));
  const handleApproved = async (id: any) => {
    try {
      await updateLeaveStatus({
        id,
        status: "Approved",
        employerId: Id,
      });
    } catch (error) {
      console.error("Error approving leave:", error);
    }
    refetch();
    leaveRefetch();
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
                fontSize: "15px",
                color: themeColors["#0C345D"],
              }}
            >
              Approved Leaves
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns.map((col) => ({
              ...col,
              renderCell: (params) =>
                col.field === "action" ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <Button
                      sx={{
                        height: "29px",
                        minWidth: "29px",
                        backgroundColor: themeColors["rgb(128 199 98 / 31%)"],
                        padding: "0px ",
                        color: themeColors["#42971B"],
                      }}
                      onClick={() => handleApproved(params.row.id)}
                    >
                      <DoneIcon />
                    </Button>
                    <Button
                      sx={{
                        height: "29px",
                        minWidth: "29px",
                        backgroundColor: themeColors["rgb(199 98 98 / 31%)"],
                        padding: "0px ",
                        color: themeColors["#971B1B"],
                      }}
                    >
                      <ClearIcon />
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
    </>
  );
};
