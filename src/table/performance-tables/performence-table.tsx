import {
  Grid,
  Box,
  Typography,
  Button,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
  MenuItem,
  Select,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { apiBaseUrl } from "../../components/consts/api-url.const";
import { themeColors, themeFonts } from "../../configs";
import {
  useDeletePerformanceDetailMutation,
  useGetPerformanceListQuery,
} from "../../components/apis/performanceApi";
import { format } from "date-fns";
import { DeleteIconSvg, DownArrowIcon4, EditIconSvg } from "../../svgs";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { SearchComponents } from "../../components/filter/search-component";
import { AddNewPerformanceDialog } from "../../components/modals/add-new-performance";
import { useGetEmployeeListQuery } from "../../components/apis/employeeListApi";
import { useGetProjectsListQuery } from "../../components/apis/projectApi";
import { toast } from "react-toastify";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 650,
    maxHeight: 140,
    overflow: "auto",
    paddingLeft: "33px",
    paddingRight: "33px",
    paddingTop: "22px",
    paddingBottom: "22px",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    marginTop: "5px !important",
    background: themeColors["#E1F5FF"],
    boxShadow: "0px 6px 6px 0px rgb(0 0 0 / 10%)",
  },
}));
const columns: GridColDef[] = [
  {
    field: "jj",
    headerName: "",
    width: 26,
    minWidth: 10,
  },
  {
    field: "employeeName",
    headerName: "Employee",
    flex: 1,
  },
  {
    field: "projectName",
    headerName: "Project Name",
    flex: 1,
  },
  {
    field: "comments",
    headerName: "Comments",
    flex: 1,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
  },
  {
    field: "addedBy",
    headerName: "Added By",
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
  },
];

export const PerformanceTable = () => {
  const [selectedValue, setSelectedValue] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { data, refetch }: any = useGetPerformanceListQuery();
  const { data: employeeList } = useGetEmployeeListQuery<any>();
  const { data: projectList } = useGetProjectsListQuery<any>();
  const [open, setOpen] = useState<any>({});
  const [editedData, setEditedData] = useState<any>({});
  const [deleteItem] = useDeletePerformanceDetailMutation();
  const handleDelete = async (employee: number) => {
    try {
      const res = await deleteItem({
        employee,
      }).unwrap();
      console.log("Item successfully deleted.");
      toast.success(res.message);
    } catch (error: any) {
      console.log("Error deleting item:", error);
      toast.error(error.data.message);
    }
    refetch();
  };
  const handleClickEditOpen = (data: any, action?: string) => {
    debugger;
    setIsOpen(true);
    setEditedData({ ...data, action });
  };
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  if (!data) {
    return null;
  }
  console.log(data);

  const rows = data.map((item: any) => ({
    id: item._id,
    employeeName: `${item.employee.firstName || ""} ${
      item.employee.lastName || ""
    }`,
    employeeID: item.employee._id,
    addedById: item.addedBy._id,
    addedBy: `${item.addedBy.firstName || ""} ${item.addedBy.lastName || ""}`,
    projectName: item.projectName.projectName,
    projectId: item.projectName._id,
    comments: item.comments,
    date: format(new Date(item.date), "dd/MM/yyyy"),
    image: item.employeeImage.path,
    addedByImage: item.addedByImage.path,
  }));

  const handleTooltipOpen = (id: any) => {
    setOpen((prevState: any) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the specific row ID
    }));
  };
  const handleTooltipClose = (id: any) => {
    console.log(id);

    setOpen(false);
  };
  const handleClose = () => {
    setIsOpen(false);
    setEditedData({});
  };
  const handleOpen = () => {
    debugger;
    setIsOpen(true);
  };
  console.log(open);

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
                fontSize: "16px",
                color: themeColors["#0C345D"],
              }}
            >
              Performance
            </Typography>
          </Box>
          <SearchComponents searchTitle={"Search"} isEmpty={true} />
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
              marginRight: "20px",
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
          <Button
            variant="contained"
            // onClick={handleSubmit}
            // disabled={disable}
            sx={{
              height: 39,
              borderRadius: "6px",
              backgroundColor: themeColors["#0C345D"],
              color: themeColors["#FFFFFF"],
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "15px",
              "&.Mui-disabled": {
                color: themeColors["#FFFFFF"],
                opacity: 0.8,
              },
              marginRight: "13px",
            }}
            onClick={handleOpen}
          >
            Add New
          </Button>
        </Box>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows || []}
            columns={columns.map((col) => ({
              ...col,
              renderCell: (params) =>
                col.field === "employeeName" ? (
                  <Typography
                    sx={{
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "14px",
                      color: themeColors["#000000"],
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={apiBaseUrl + "/" + params.row.image}
                      height={40}
                      width={40}
                      alt="ProfilePicture"
                    />
                    {params.value}
                  </Typography>
                ) : col.field === "addedBy" ? (
                  <Typography
                    sx={{
                      fontFamily: themeFonts["Poppins-Regular"],
                      fontSize: "14px",
                      color: themeColors["#000000"],
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={apiBaseUrl + "/" + params.row.addedByImage}
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
                    <HtmlTooltip
                      placement="bottom-end"
                      open={open[params.row.id] || false}
                      onClose={() => handleTooltipClose(params.row.id)}
                      disableHoverListener
                      disableTouchListener
                      title={
                        <Typography
                          sx={{
                            fontFamily: themeFonts["Poppins-Regular"],
                            fontSize: "14px",
                            color: themeColors["#1966D9"],
                            // display: "flex",
                            // alignItems: "center",
                            // gap: "10px",
                          }}
                        >
                          {params.row.comments}{" "}
                          <Typography
                            component={"span"}
                            sx={{
                              fontFamily: themeFonts["Poppins-Regular"],
                              fontSize: "14px",
                              color: themeColors["#000000"],
                              fontStyle: "italic",
                            }}
                          >
                            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in
                          </Typography>
                        </Typography>
                      }
                    >
                      <Button
                        sx={{
                          height: "20px",
                          minWidth: "20px",
                          padding: "0px ",
                        }}
                        onClick={() => handleTooltipOpen(params.row.id)}
                      >
                        {open[params.row.id] ? (
                          <VisibilityIcon
                            sx={{
                              fill: "#38ACE6",
                              height: "16px",
                              width: "20px",
                            }}
                          />
                        ) : (
                          <VisibilityOffIcon
                            sx={{
                              fill: "#888888",
                              height: "20px",
                              width: "20px",
                            }}
                          />
                        )}
                      </Button>
                    </HtmlTooltip>
                    {/* <Tooltip
                      PopperProps={{
                        disablePortal: true,
                      }}
                      open={open}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      title={
                        <Typography
                          sx={{
                            fontFamily: themeFonts["Poppins-Regular"],
                            fontSize: "14px",
                            color: themeColors["#1966D9"],
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          Good Performance ,
                        </Typography>
                      }
                      sx={{
                        "& .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementBottom.css-1t5uoqk-MuiTooltip-tooltip":
                          {
                            backgroundColor: `${themeColors["#E1F5FF"]} !important`,
                          },
                      }}
                    >
                    
                    </Tooltip> */}
                    <Button
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
                    <Button
                      sx={{
                        height: "20px",
                        minWidth: "20px",
                        padding: "0px ",
                      }}
                      onClick={() => handleDelete(params.row.id)}
                    >
                      <DeleteIconSvg />
                    </Button>
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
      {isOpen && (
        <AddNewPerformanceDialog
          open={isOpen}
          onClose={handleClose}
          refetch={refetch}
          data={data}
          employeeList={employeeList}
          projectList={projectList}
          editedData={editedData}
        />
      )}
    </>
  );
};
