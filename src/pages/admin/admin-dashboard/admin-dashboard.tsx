import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { themeFonts, themeColors } from "../../../configs";

import { DownArrowIcon3, GraphSvg } from "../../../svgs";
import { useState } from "react";
import {
  TotalEmployees,
  TotalClients,
  TotalProjects,
  ActiveTasks,
  HolidaysPicture,
} from "../../../pngs";
import { OnTodayLeaveTable } from "../../../table/today-leaves-table";
import { TodaysAnnouncement } from "../../quick-access/today-announcement -page";
import { AllEmployeeListTable } from "../../../table/all-employees-table";
import { ClientsListTable } from "../../../table/clients-list-table";
import { AdminCustomComponent } from "../../../components/custom-component/admin-custom-component";
import { useSelector } from "react-redux";
import { useGetHolidaysDetailsQuery } from "../../../components/apis/holidaysDetailsApi";
import { useGetTotalCountsQuery } from "../../../components/apis/totalCountsApi";
import { selectRange } from "../../../utils/dateRange";
import { useGetNewEmployeeListQuery } from "../../../components/apis/newEmployeeApi";
import { apiBaseUrl } from "../../../components/consts/api-url.const";
import { format, startOfDay, endOfDay, parseISO } from "date-fns";
export const AdminDashboard = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    selectRange[2].value
  );
  const [selectOverView, setSelectOverView] = useState<string>("Week");
  const dates = JSON.parse(selectedValue);
  const startDate = startOfDay(parseISO(dates.startDate));
  const endDate = endOfDay(parseISO(dates.endDate));

  const { data } = useGetNewEmployeeListQuery({
    startDate: startDate,
    endDate: endDate,
  });
  const user = useSelector((state: any) => state.authentication.user);
  const userName = `${user[0].firstName} ${user[0].lastName}`;
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleOverView = (e: any) => {
    setSelectOverView(e.target.value);
  };

  const year = new Date().getFullYear();
  const { data: holidays }: any = useGetHolidaysDetailsQuery({ year });
  const upcomingHolidays =
    holidays &&
    holidays
      .filter(
        (holiday: { startDate: string }) =>
          new Date(holiday.startDate) >= new Date()
      )
      .sort(
        (a: { startDate: string }, b: { startDate: string }) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );
  const upcomingHoliday = upcomingHolidays && upcomingHolidays[0];
  const { data: counts } = useGetTotalCountsQuery<any>();
  const AdminDashboard = "AdminDashboards";

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          padding: "35px",
          paddingRight: "10px",
          paddingTop: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingY: "30px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: themeFonts["Poppins-SemiBold"],
              fontSize: "22px",
              color: themeColors["#000000"],
            }}
          >
            Welcome {userName} !
          </Typography>
        </Box>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: "0px !important",
            paddingTop: "0px !important",
            gap: "20px",
          }}
        >
          <Grid item xs={6}>
            <Grid
              item
              xs={12}
              sx={{
                background: themeColors["#FFFFFF"],
                boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
                borderRadius: "6px",
                height: 535,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "13px",
                  width: "100%",
                  maxHeight: 55,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "16px",
                    color: themeColors["#0C345D"],
                  }}
                >
                  OverView
                </Typography>
                <Select
                  sx={{
                    fontFamily: themeFonts["Poppins-SemiBold"],
                    fontSize: "12px",
                    color: themeColors["#0C345D"],
                    height: 28,
                    background: themeColors["#E1E1E1"],
                    paddingX: "9px",
                    paddingY: "7px",
                    cursor: "pointer",
                    borderRadius: "3px",
                    "& .MuiInputBase-input.MuiOutlinedInput-input.MuiSelect-outlined.MuiSelect-select":
                      {
                        position: "relative",
                        padding: 0,
                        width: "80px",
                        overflow: "overlay",
                        zIndex: 1,
                      },
                    "& svg": {
                      position: "absolute",
                      right: "9px",
                    },
                    "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                  }}
                  IconComponent={() => <DownArrowIcon3 height={10} />}
                  defaultValue={"Month"}
                  onChange={handleOverView}
                  value={selectOverView}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        "& li.MuiButtonBase-root.MuiMenuItem-root.Mui-selected":
                          {
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
                          fontSize: "12px",
                          color: themeColors["#0C345D"],
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={"Today"}>Today</MenuItem>
                  <MenuItem value={"Week"}>Last Week</MenuItem>
                  <MenuItem value={"Month"}>Last Month</MenuItem>
                  <MenuItem value={"Year"}>Last Year</MenuItem>
                </Select>
              </Box>
              <Divider sx={{ width: "100%" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 480,
                }}
              >
                <GraphSvg />
              </Box>
            </Grid>
            <OnTodayLeaveTable minHeight={266} />
            <Grid item xs={12} sx={{ marginTop: "20px" }}>
              <TodaysAnnouncement
                maxHeight={888}
                AdminDashboard={AdminDashboard}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  paddingLeft: "0px !important",
                  paddingTop: "0px !important",
                  gap: "20px",
                }}
              >
                <AdminCustomComponent
                  Title={"Total Employee"}
                  value={counts?.totalEmployees}
                  children={<img src={TotalEmployees} alt="TotalEmployees" />}
                />

                <AdminCustomComponent
                  Title={"Total Clients"}
                  value={counts?.totalClients}
                  children={<img src={TotalClients} alt="TotalClients" />}
                />
                <Grid
                  item
                  xs={12}
                  sx={{
                    background: themeColors["#FFFFFF"],
                    boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
                    borderRadius: "6px",
                    minHeight: 450,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "13px",
                      width: "100%",
                      maxHeight: 55,
                      borderTopRightRadius: "6px",
                      borderTopLeftRadius: "6px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "16px",
                        color: themeColors["#0C345D"],
                      }}
                    >
                      New Employees
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["rgb(255 255 255 / 60%)"],
                      }}
                    >
                      <Select
                        sx={{
                          fontFamily: themeFonts["Poppins-SemiBold"],
                          fontSize: "12px",
                          color: themeColors["#0C345D"],
                          height: 28,
                          background: themeColors["#E1E1E1"],
                          paddingX: "9px",
                          paddingY: "7px",
                          cursor: "pointer",
                          borderRadius: "3px",
                          "& .MuiInputBase-input.MuiOutlinedInput-input.MuiSelect-outlined.MuiSelect-select":
                            {
                              position: "relative",
                              padding: 0,
                              width: "80px",
                              overflow: "overlay",
                              zIndex: 1,
                            },
                          "& svg": {
                            position: "absolute",
                            right: "9px",
                          },
                          "& fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                            {
                              border: "none",
                            },
                        }}
                        IconComponent={() => <DownArrowIcon3 height={10} />}
                        defaultValue={"Month"}
                        onChange={handleChange}
                        value={selectedValue}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              "& li.MuiButtonBase-root.MuiMenuItem-root.Mui-selected":
                                {
                                  background: "rgb(12 52 93 / 14%) !important",
                                },
                              "& ul.MuiList-root.MuiList-padding.MuiMenu-list":
                                {
                                  padding: 0,
                                },
                              "&.MuiPaper-root.MuiPopover-paper.MuiMenu-paper":
                                {
                                  marginTop: "7px !important",
                                  borderRadius: "6px",
                                },
                              "& li": {
                                fontFamily: themeFonts["Poppins-SemiBold"],
                                fontSize: "12px",
                                color: themeColors["#0C345D"],
                              },
                            },
                          },
                        }}
                      >
                        {selectRange?.map((item, index) => (
                          <MenuItem value={item.value}>{item.label}</MenuItem>
                        ))}
                      </Select>
                    </Typography>
                  </Box>
                  <Divider sx={{ width: "100%" }} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "13px",
                      paddingTop: 0,
                      width: "100%",
                      gap: "20px",
                      maxHeight: "380px",
                      overflow: "auto",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <List
                        sx={{
                          padding: "0px",
                          "&:before": {
                            content: '" "',
                            display: "block",
                            position: "absolute",
                            zIndex: 1,
                            left: "7px",
                            height: "-webkit-fill-available",
                            top: "0px",
                            width: "1px",
                            opacity: 1,
                            background: "#B9B9B9",
                          },
                          position: "relative",
                        }}
                      >
                        {data &&
                          data.map((val: any, idx: number) => {
                            const joiningDate = format(
                              new Date(val.dateOfJoining),
                              "dd/MM/yyyy"
                            );
                            const firstName = val.firstName;
                            const lastName = val.lastName;
                            const name = `${firstName || ""} ${lastName || ""}`;
                            return (
                              <>
                                <ListItem
                                  sx={{
                                    padding: "0px",
                                    marginTop: "26px",
                                    paddingLeft: "27px",
                                    "&:after": {
                                      content: '" "',
                                      display: "block",
                                      position: "absolute",
                                      zIndex: 5,
                                      left: "0px",
                                      height: "14px",
                                      width: "14px",
                                      borderRadius: "10px",
                                      opacity: 1,
                                      border: " 1px solid #B9B9B9",
                                      background: themeColors["#FFFFFF"],
                                    },
                                    display: "flex",
                                  }}
                                >
                                  <ListItemText
                                    sx={{
                                      "& .MuiListItemText-primary": {
                                        display: "flex",
                                        gap: "10px",
                                        fontSize: "12px",
                                        fontFamily:
                                          themeFonts["Poppins-Regular"],
                                        color: themeColors["#000000"],
                                        alignItems: "center",
                                      },
                                      width: "50%",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "5px",
                                        overflow: "hidden",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <img
                                        src={apiBaseUrl + "/" + val.image.path}
                                        height={30}
                                        width={30}
                                        alt="USER"
                                      />
                                    </Box>
                                    {name}
                                  </ListItemText>

                                  <ListItemText
                                    sx={{
                                      "& .MuiListItemText-primary": {
                                        fontSize: "10px",
                                        fontFamily:
                                          themeFonts["Poppins-Regular"],
                                        color: themeColors["#2B468B"],
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "4px",
                                      },
                                      width: "50%",
                                      textAlign: "end",
                                    }}
                                  >
                                    {val.designation}
                                    <Typography
                                      component={"span"}
                                      sx={{
                                        fontSize: "8px",
                                        fontFamily:
                                          themeFonts["Poppins-Regular"],
                                        color: themeColors["#8B2B5B"],
                                      }}
                                    >
                                      Joining date : {joiningDate}
                                    </Typography>
                                  </ListItemText>
                                </ListItem>
                              </>
                            );
                          })}
                      </List>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  paddingLeft: "0px !important",
                  paddingTop: "0px !important",
                  gap: "20px",
                }}
              >
                <AdminCustomComponent
                  Title={"Total Projects"}
                  value={counts?.totalProjects}
                  children={<img src={TotalProjects} alt="projects" />}
                />
                <AdminCustomComponent
                  Title={"Active Task"}
                  value={counts?.activeTask}
                  children={<img src={ActiveTasks} alt="ActiveTasks" />}
                />
                <Grid
                  item
                  xs={12}
                  sx={{
                    background: themeColors["#FFFFFF"],
                    boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
                    borderRadius: "6px",
                    minHeight: 450,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "13px",
                      width: "100%",
                      maxHeight: 55,
                      background: themeColors["#2B468B"],
                      borderTopRightRadius: "6px",
                      borderTopLeftRadius: "6px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "16px",
                        color: themeColors["#FFFFFF"],
                      }}
                    >
                      Holidays
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "12px",
                        color: themeColors["rgb(255 255 255 / 60%)"],
                      }}
                    >
                      {new Date(upcomingHoliday?.startDate).toLocaleString(
                        "en-us",
                        {
                          weekday: "short",
                        }
                      )}{" "}
                      ,{" "}
                      {new Date(upcomingHoliday?.startDate).toLocaleString(
                        "en-us",
                        {
                          month: "short",
                          year: "numeric",
                          day: "numeric",
                        }
                      )}
                      {/* Tue , 24 Oct , 2023 */}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      height: 400,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={HolidaysPicture}
                      alt="LogBackground"
                      height={"100%"}
                      width={"100%"}
                    />
                    <Typography
                      sx={{
                        fontFamily: themeFonts["Poppins-SemiBold"],
                        fontSize: "22px",
                        color: themeColors["#2B468B"],
                        position: "absolute",
                        top: "65px",
                        right: "13px",
                      }}
                    >
                      {upcomingHoliday?.holidayName}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item xs={12}> */}
            <AllEmployeeListTable />
            {/* </Grid> */}
            {/* <Grid item xs={12}> */}
            <ClientsListTable minHeight={266} />
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
