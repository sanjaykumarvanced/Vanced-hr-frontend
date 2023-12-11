import React from "react";
import { ApprovedLeaves } from "../../../table/requested leaves/approved-leaves";

export const ShortLeave = ({
  data,
  refetch,
}: {
  data?: any;
  refetch?: any;
}) => {
  const shortLeave = "Short Leave";
  return (
    <>
      <ApprovedLeaves title={"Short Leave"} shortLeave={shortLeave} data={data} refetch={refetch} />
    </>
  );
};
