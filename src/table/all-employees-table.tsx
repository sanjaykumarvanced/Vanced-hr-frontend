import { Grid, Box, Typography, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { themeFonts, themeColors } from "../configs";
import { DeleteIconSvg, EditIconSvg } from "../svgs";
import { apiBaseUrl } from "../components/consts/api-url.const";
import { format } from "date-fns";
import { useGetEmployeeListQuery } from "../components/apis/employeeListApi";

export const AllEmployeeListTable = ({
  maxHeight,
  AllEmployees,
}: {
  maxHeight?: any;
  AllEmployees?: any;
}) => {
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
    { field: "mail", headerName: "Mail", flex: 1 },
    { field: "department", headerName: "Department", flex: 1 },
    { field: "joiningDate", headerName: "Joining Date", flex: 1 },
    {
      field: "action",
      headerName: "Action",
    },
  ];
  if (AllEmployees) {
    columns.splice(4, 0, {
      field: "contactNo",
      headerName: "Contact No.",
      flex: 1,
    });
    columns.splice(6, 0, {
      field: "gender",
      headerName: "Gender",
      flex: 1,
    });
  }
  const { data } = useGetEmployeeListQuery();
  if (!data) {
    return null;
  }

  const rows = data.map((item: any) => {
    const contactNo = item.personalInformation.telephones[0];

    console.log(contactNo);

    return {
      id: item._id,
      employeeName: `${item.firstName} ${item.lastName}`,
      mail: item.email,
      department: item.designation,
      contactNo: contactNo ? contactNo : "-",
      joiningDate: format(new Date(item.dateOfJoining), "dd/MM/yyyy"),
      gender: item.gender,
      image: item.image.path,
    };
  });
  console.log(data);

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          boxShadow: "0px 3px 6px 0px rgb(0 0 0 / 16%)",
          borderRadius: "10px",
          display: "flex",
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
              All Employees
            </Typography>
          </Box>
        </Box>
        <Box sx={{ maxHeight: maxHeight ? maxHeight : 400, width: "100%" }}>
          <DataGrid
            rows={rows || []}
            columns={columns.map((col) => ({
              ...col,
              renderCell: (params) =>
                col.field === "employeeName" ? (
                  <Typography
                    sx={{
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "12px",
                      color: themeColors["#000000"],
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={
                        params.row.image
                          ? apiBaseUrl + "/" + params.row.image
                          : ""
                      }
                      height={40}
                      width={40}
                      alt="ProfilePicture"
                    />

                    {params.value}
                  </Typography>
                ) : col.field === "action" ? (
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
                        "&.Mui-disabled ": {
                          "& svg path": { fill: "rgba(0, 0, 0, 0.26)" },
                        },
                      }}
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
