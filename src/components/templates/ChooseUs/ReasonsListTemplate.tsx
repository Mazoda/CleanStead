import { Box } from "@mui/material";
import { ReasonType } from "../../../types";
import { ReasonCard } from "../../organisms/ReasonCard";

export function ReasonsListTemplate({ reasons }: { reasons: ReasonType[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "flex-start", lg: "space-around" },
        alignItems: "center",
        gap: {
          xs: "1rem",
          lg: "1rem",
        },
      }}
    >
      {reasons
        ? reasons.map((reason) => (
            <ReasonCard
              key={reason.id}
              title={reason.title}
              description={reason.description}
              iconUrl={reason.iconUrl}
            />
          ))
        : null}
    </Box>
  );
}
