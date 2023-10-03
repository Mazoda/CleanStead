import { Box } from "@mui/material";
import { ReasonType } from "../../../types";
import { ReasonCard } from "../../organisms/ReasonCard";
import { WrappedHeading } from "../../atoms/WrappedHeading";
export function ChooseUsTemplate({ reasons }: { reasons: ReasonType[] }) {
  return (
    <div>
      <WrappedHeading heading="لماذا تختارنا" />
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          paddingInline: "1rem",
        }}
      >
        <Box
          component={"img"}
          src="./assets/chooseUs.png"
          sx={{
            aspectRatio: "1/1",
            borderRadius:"1rem",
            height: "35.5rem",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
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
      </Box>
    </div>
  );
}
