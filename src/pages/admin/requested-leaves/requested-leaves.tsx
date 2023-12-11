import { Grid, Box } from "@mui/material";
import { leaveOptions } from "../../../components/consts/consts";
import {
  CustomTabs,
  CustomTabsPanel,
} from "../../../components/tabs/custom-tabs";
import { themeColors } from "../../../configs";
import { useEffect, useState } from "react";
import { getStyles } from "../../quick-access/todays-leaves-details";
import { ShortLeave } from "./short-leaves";
import { FullDayLeave } from "./full-day-leaves";
import { HalfDayLeave } from "./half-day-leave";
import { useSelector } from "react-redux";
import { useGetRequestedLeavesByIdQuery } from "../../../components/apis/requestedLeavesApi";

export const RequestedLeaves = () => {
  const [value, setValue] = useState("SHORT_LEAVE");
  const styles = getStyles();
  const handleChange = (event: any) => {
    setValue(event);
  };
  const user = useSelector((state: any) => state.authentication.user);
  const userId = user[0].id;
  const { data, refetch }: any = useGetRequestedLeavesByIdQuery({
    employerId: userId,
  });
  console.log(data);
  
  const [filteredLeaves, setFilteredLeaves] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredLeaves(
        data && data.filter((item: any) => item.leaveType === value)
      );
    }
  }, [data, value]);
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          padding: "35px",
          paddingRight: "10px",
          paddingTop: "34px",
          gap: "20px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            background: themeColors["#FFFFFF"],
            boxShadow: "0px 5px 6px 0px rgb(0 0 0 / 10%)",
            borderRadius: "6px",
            padding: "15px !important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              maxHeight: "29px",
            }}
          >
            {leaveOptions.map((val) => (
              <>
                <CustomTabs
                  sx={styles.tabsButtons}
                  label={val.label}
                  onChange={handleChange}
                  value={val.value}
                  value1={value}
                />
              </>
            ))}
          </Box>
        </Grid>

        <Box sx={{ width: "100%" }}>
          {leaveOptions.map((tabs, ind) => (
            <CustomTabsPanel
              sx={styles.tabPanel}
              value={tabs.value}
              value1={value}
            >
              {value === "SHORT_LEAVE" && (
                <ShortLeave data={filteredLeaves} refetch={refetch} />
              )}
              {value === "HALF_DAY_LEAVE" && (
                <HalfDayLeave data={filteredLeaves} refetch={refetch} />
              )}
              {value === "FULL_DAY_LEAVE" && (
                <FullDayLeave data={filteredLeaves} refetch={refetch} />
              )}
            </CustomTabsPanel>
          ))}
        </Box>
      </Grid>
    </>
  );
};
