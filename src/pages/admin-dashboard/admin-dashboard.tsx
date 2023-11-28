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
import { themeFonts, themeColors } from "../../configs";

import { CustomEmployees } from "../../components/custom-component/employees-custom-component";
import { DownArrowIcon3, HolidaysPictureSvg, GraphSvg } from "../../svgs";
import { useState } from "react";
import {
  TotalEmployees,
  TotalClients,
  TotalProjects,
  ActiveTasks,
  Profile,
} from "../../pngs";
import { OnTodayLeaveTable } from "../../table/today-leaves-table";
import { TodaysAnnouncement } from "../quick-access/today-announcement -page";
import { AllEmployeeListTable } from "../../table/all-employees-table";
import { ClientsListTable } from "../../table/clients-list-table";
export const AdminDashboard = () => {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
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
            Welcome Rajeev Kumar !
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
                  defaultValue={"Last Week"}
                  onChange={handleChange}
                  value={selectedValue}
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
                  <MenuItem value={"Last Week"}>Last Week</MenuItem>
                  <MenuItem value={"Last Month"}>Last Month</MenuItem>
                  <MenuItem value={"Last Year"}>Last Year</MenuItem>
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
              <TodaysAnnouncement minHeight={888} />
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
                <CustomEmployees
                  Title={"Total Employee"}
                  value={"255"}
                  children={<img src={TotalEmployees} alt="TotalEmployees" />}
                  xs={12}
                  from={"admin-dashboard"}
                />

                <CustomEmployees
                  Title={"Total Clients"}
                  value={"40"}
                  children={<img src={TotalClients} alt="TotalClients" />}
                  xs={12}
                  from={"admin-dashboard"}
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
                        defaultValue={"Last Week"}
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
                        <MenuItem value={"Today"}>Today</MenuItem>
                        <MenuItem value={"Last Week"}>This Week</MenuItem>
                        <MenuItem value={"Last Month"}>This Month</MenuItem>
                        <MenuItem value={"Last Year"}>This Year</MenuItem>
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
                                fontFamily: themeFonts["Poppins-Regular"],
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
                                src={Profile}
                                height={30}
                                width={30}
                                alt="USER"
                              />
                            </Box>
                            Sahil Kumar
                          </ListItemText>

                          <ListItemText
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: "10px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#2B468B"],
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                              },
                              width: "50%",
                              textAlign: "end",
                            }}
                          >
                            (Angular Developer)
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: "8px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#8B2B5B"],
                              }}
                            >
                              Joining date : 04/10/2023
                            </Typography>
                          </ListItemText>
                        </ListItem>
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
                                fontFamily: themeFonts["Poppins-Regular"],
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
                                src={Profile}
                                height={30}
                                width={30}
                                alt="USER"
                              />
                            </Box>
                            Sahil Kumar
                          </ListItemText>

                          <ListItemText
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: "10px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#2B468B"],
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                              },
                              width: "50%",
                              textAlign: "end",
                            }}
                          >
                            (Angular Developer)
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: "8px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#8B2B5B"],
                              }}
                            >
                              Joining date : 04/10/2023
                            </Typography>
                          </ListItemText>
                        </ListItem>
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
                                fontFamily: themeFonts["Poppins-Regular"],
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
                                src={Profile}
                                height={30}
                                width={30}
                                alt="USER"
                              />
                            </Box>
                            Sahil Kumar
                          </ListItemText>

                          <ListItemText
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: "10px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#2B468B"],
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                              },
                              width: "50%",
                              textAlign: "end",
                            }}
                          >
                            (Angular Developer)
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: "8px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#8B2B5B"],
                              }}
                            >
                              Joining date : 04/10/2023
                            </Typography>
                          </ListItemText>
                        </ListItem>{" "}
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
                                fontFamily: themeFonts["Poppins-Regular"],
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
                                src={Profile}
                                height={30}
                                width={30}
                                alt="USER"
                              />
                            </Box>
                            Sahil Kumar
                          </ListItemText>

                          <ListItemText
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: "10px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#2B468B"],
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                              },
                              width: "50%",
                              textAlign: "end",
                            }}
                          >
                            (Angular Developer)
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: "8px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#8B2B5B"],
                              }}
                            >
                              Joining date : 04/10/2023
                            </Typography>
                          </ListItemText>
                        </ListItem>
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
                                fontFamily: themeFonts["Poppins-Regular"],
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
                                src={Profile}
                                height={30}
                                width={30}
                                alt="USER"
                              />
                            </Box>
                            Sahil Kumar
                          </ListItemText>

                          <ListItemText
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: "10px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#2B468B"],
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                              },
                              width: "50%",
                              textAlign: "end",
                            }}
                          >
                            (Angular Developer)
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: "8px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#8B2B5B"],
                              }}
                            >
                              Joining date : 04/10/2023
                            </Typography>
                          </ListItemText>
                        </ListItem>{" "}
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
                                fontFamily: themeFonts["Poppins-Regular"],
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
                                src={Profile}
                                height={30}
                                width={30}
                                alt="USER"
                              />
                            </Box>
                            Sahil Kumar
                          </ListItemText>

                          <ListItemText
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: "10px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#2B468B"],
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                              },
                              width: "50%",
                              textAlign: "end",
                            }}
                          >
                            (Angular Developer)
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: "8px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#8B2B5B"],
                              }}
                            >
                              Joining date : 04/10/2023
                            </Typography>
                          </ListItemText>
                        </ListItem>{" "}
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
                                fontFamily: themeFonts["Poppins-Regular"],
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
                                src={Profile}
                                height={30}
                                width={30}
                                alt="USER"
                              />
                            </Box>
                            Sahil Kumar
                          </ListItemText>

                          <ListItemText
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: "10px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#2B468B"],
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                              },
                              width: "50%",
                              textAlign: "end",
                            }}
                          >
                            (Angular Developer)
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: "8px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#8B2B5B"],
                              }}
                            >
                              Joining date : 04/10/2023
                            </Typography>
                          </ListItemText>
                        </ListItem>{" "}
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
                                fontFamily: themeFonts["Poppins-Regular"],
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
                                src={Profile}
                                height={30}
                                width={30}
                                alt="USER"
                              />
                            </Box>
                            Sahil Kumar
                          </ListItemText>

                          <ListItemText
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: "10px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#2B468B"],
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                              },
                              width: "50%",
                              textAlign: "end",
                            }}
                          >
                            (Angular Developer)
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: "8px",
                                fontFamily: themeFonts["Poppins-Regular"],
                                color: themeColors["#8B2B5B"],
                              }}
                            >
                              Joining date : 04/10/2023
                            </Typography>
                          </ListItemText>
                        </ListItem>
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
                <CustomEmployees
                  Title={"Total Projects"}
                  value={"255"}
                  children={<img src={TotalProjects} alt="projects" />}
                  xs={12}
                  from={"admin-dashboard"}
                />
                <CustomEmployees
                  Title={"Active Task"}
                  value={"546"}
                  children={<img src={ActiveTasks} alt="ActiveTasks" />}
                  xs={12}
                  from={"admin-dashboard"}
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
                      Tue , 24 Oct , 2023
                    </Typography>
                  </Box>
                  <Box sx={{ height: 400, overflow: "hidden" }}>
                    <HolidaysPictureSvg />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <AllEmployeeListTable minHeight={580} />
            </Grid>
            <Grid item xs={12}>
              <ClientsListTable minHeight={266} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
