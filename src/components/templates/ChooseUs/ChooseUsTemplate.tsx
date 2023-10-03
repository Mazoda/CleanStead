import { Box } from "@mui/material";
import { ReasonType } from "../../../types";
import { WrappedHeading } from "../../atoms/WrappedHeading";
import { ReasonsListTemplate } from "./ReasonsListTemplate";
export function ChooseUsTemplate({ reasons }: { reasons: ReasonType[] }) {
  return (
    <div>
      <Box
        sx={{
          marginBlockStart: "1rem",
          marginBlockEnd: "2.875rem",
        }}
      >
        <WrappedHeading heading="لماذا تختارنا" />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: "2rem", lg: "1rem" },
        }}
      >
        <Box
          component={"img"}
          src="assets/chooseUs.png"
          sx={{
            width: "80%",
            maxWidth: { lg: "35rem" },
            borderRadius: "1rem",
            objectFit: "cover",
            aspectRatio: "1/1",
          }}
        />
        <ReasonsListTemplate reasons={reasons} />
      </Box>
    </div>
  );
}
