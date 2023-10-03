import { Box, Typography } from "@mui/material";
import { IconBox } from "../../atoms/IconBox";
import { ReasonType } from "../../../types";

export default function ReasonCard({
  title,
  description,
  iconUrl,
}: ReasonType) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap:"1rem",
        }}
      >
        <IconBox IconSrc={iconUrl} BgColor="primary.light" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "font.main",
              fontWeight: "fontWeightMedium",
              fontSize: "1.25rem",
              alignSelf:"flex-start"
              
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "font.grey",
              fontWeight: "fontWeightRegular",
              fontSize: "1.25rem",
              alignSelf:"flex-start"
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
