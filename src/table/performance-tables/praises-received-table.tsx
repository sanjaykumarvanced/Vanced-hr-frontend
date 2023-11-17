import { Grid, Box, Typography, Button, Select, MenuItem } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CustomDatePicker } from "../../components/calendar/custom-date-picker";
import { apiBaseUrl } from "../../components/consts/api-url.const";
import { themeColors, themeFonts } from "../../configs";
import { EditIconSvg, DeleteIconSvg, DownArrowIcon4 } from "../../svgs";
import { useState } from "react";

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
  { field: "projectName", headerName: "Project Name", flex: 1 },
  { field: "comments", headerName: "Comments", flex: 1 },
  {
    field: "Added By",
    headerName: "Working Hours",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
  },
];

export const PraisesReceivedTable = () => {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
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
              Praises Received
              <Typography
                component={"span"}
                sx={{
                  fontFamily: themeFonts["Poppins-Regular"],
                  fontSize: "16px",
                  color: themeColors["#808080"],
                  paddingLeft: "3px",
                }}
              >
                ( This section contains the praises received by me . )
              </Typography>
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
            <Select
              sx={{
                fontFamily: themeFonts["Poppins-SemiBold"],
                fontSize: "14px",
                color: themeColors["#0C345D"],
                height: 39,
                background: themeColors["#E1E1E1"],
                paddingX: "12px",
                paddingY: "9px",
                cursor: "pointer",
                borderRadius: "6px",
                "& .MuiInputBase-input.MuiOutlinedInput-input.MuiSelect-outlined.MuiSelect-select":
                  {
                    position: "relative",
                    padding: 0,
                    width: "132px",
                    overflow: "overlay",
                    zIndex: 1,
                  },
                "& svg": {
                  position: "absolute",
                  right: "12px",
                },
                "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                  {
                    border: "none",
                  },
              }}
              IconComponent={() => <DownArrowIcon4 height={10} />}
              defaultValue={"Monthly Report"}
              onChange={handleChange}
              value={selectedValue}
              MenuProps={{
                PaperProps: {
                  sx: {
                    "& li.MuiButtonBase-root.MuiMenuItem-root.Mui-selected": {
                      background: "rgb(12 52 93 / 14%) !important",
                    },
                    "& ul.MuiList-root.MuiList-padding.MuiMenu-list": {
                      padding: 0,
                    },
                    "&.MuiPaper-root.MuiPopover-paper.MuiMenu-paper": {
                      marginTop: "7px !important",
                      borderRadius: "6px",
                    },
                    "& li": {
                      fontFamily: themeFonts["Poppins-SemiBold"],
                      fontSize: "14px",
                      color: themeColors["#0C345D"],
                    },
                  },
                },
              }}
            >
              <MenuItem value={"Monthly Report"}>Monthly Report</MenuItem>
              <MenuItem value={"Yearly Report"}>Yearly Report</MenuItem>
            </Select>
            <CustomDatePicker
              width={120}
              placeholder={"Oct 2023"}
              fontFamily={"Poppins-SemiBold"}
              color={"#0C345D"}
              fontSize={"14px"}
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
                      {/* //   {params.row.employerName} */}
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
