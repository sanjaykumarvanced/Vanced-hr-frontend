import React from "react";
import { ApprovedLeaves } from "../../../table/requested leaves/approved-leaves";

export const HalfDayLeave = ({
  data,
  refetch,
}: {
  data?: any;
  refetch?: any;
}) => {
  const halfDayLeave = "Short Leave";
  return (
    <>
      <ApprovedLeaves
        title={"Half Day Leave"}
        halfDayLeave={halfDayLeave}
        data={data}
        refetch={refetch}
      />
    </>
  );
};
