import { Grid } from "@mui/material";
import { LeaveRequestTable } from "../../../table/leave-request-table";
import { PayrollSummarySection } from "./payroll-summary-section";
import { PaymentInformation } from "./payment-information";
import { IdentityInformation } from "./identity-information";

export const SummarySection = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Grid item xs={6}>
          <PayrollSummarySection />
        </Grid>
        <Grid item xs={12}>
          <PaymentInformation />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Grid item xs={7}>
          <IdentityInformation />
        </Grid>
        <Grid item xs={5}>
          <PaymentInformation />
        </Grid>
      </Grid>
    </>
  );
};
