import React from "react";
import { ApprovedLeaves } from "../../../table/requested leaves/approved-leaves";

export const FullDayLeave = ({
  data,
  refetch,
}: {
  data?: any;
  refetch?: any;
}) => {
  const fullDayLeave = "Full Day Leave";
  return (
    <>
      <ApprovedLeaves
        title={"Full Day Leave"}
        fullDayLeave={fullDayLeave}
        data={data}
        refetch={refetch}
      />
    </>
  );
};
