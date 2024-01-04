import { Grid } from "@mui/material";
import { themeColors } from "../../../configs";
import { CustomFilledInput } from "../../../components/input";
export const BankInformation = ({ formManager }: { formManager?: any }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        background: themeColors["#FFFFFF"],
        boxShadow: "0px 3px 20px 0px rgb(0 0 0 / 10%)",
        borderRadius: "5px",
        padding: "20px",
        gap: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          paddingRight: "0px !important",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            paddingRight: "0px !important",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <CustomFilledInput
            autoFocus={true}
            label="Bank Name*"
            type="text"
            placeholder=""
            name="bankInformation.bankName"
            height="39px"
            fontSize="14px"
            border="1px solid rgb(0 0 0 / 30%)"
            value={formManager.values.bankInformation.bankName}
            onChangeValue={formManager.handleChange}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            paddingRight: "0px !important",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <CustomFilledInput
            autoFocus={true}
            label="Account No. *"
            type="text"
            placeholder=""
            name="bankInformation.bankAccountNumber"
            height="39px"
            fontSize="14px"
            border="1px solid rgb(0 0 0 / 30%)"
            value={formManager.values.bankInformation.bankAccountNumber}
            onChangeValue={formManager.handleChange}
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          paddingRight: "0px !important",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            paddingRight: "0px !important",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <CustomFilledInput
            autoFocus={true}
            label="IFSC Code *"
            type="text"
            placeholder=""
            name="bankInformation.ifscCode"
            height="39px"
            fontSize="14px"
            border="1px solid rgb(0 0 0 / 30%)"
            value={formManager.values.bankInformation.ifscCode}
            onChangeValue={formManager.handleChange}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            paddingRight: "0px !important",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <CustomFilledInput
            autoFocus={true}
            label="PAN No. *"
            type="text"
            placeholder=""
            name="bankInformation.panNo"
            height="39px"
            fontSize="14px"
            border="1px solid rgb(0 0 0 / 30%)"
            value={formManager.values.bankInformation.panNo}
            onChangeValue={formManager.handleChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
