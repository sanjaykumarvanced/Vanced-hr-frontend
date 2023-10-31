import { Grid } from "@mui/material";

import { RemoteClock, WorkingImg } from "../../../pngs";
import { ArrivalClock, EmployeesSvg } from "../../../svgs";
import { CustomEmployees } from "../../../components/custom-component/employees-custom-component";

export const EmployeePresenceInfo = () => {
  return (
    <>
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
        <CustomEmployees
          Title={"Employees on time today :"}
          value={"4"}
          children={<EmployeesSvg />}
        />
        <CustomEmployees
          Title={"Late arrivals today :"}
          value={"2"}
          children={<ArrivalClock />}
        />
      </Grid>
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
        <CustomEmployees
          Title={"Work from home / on duty today :"}
          value={"0"}
          children={<img src={WorkingImg} alt="working" />}
        />
        <CustomEmployees
          Title={"Remote clock-ins today :"}
          value={"0"}
          children={<img src={RemoteClock} alt="remote" />}
        />
      </Grid>
    </>
  );
};
