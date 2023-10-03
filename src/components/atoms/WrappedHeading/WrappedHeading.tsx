import { Box, Typography } from "@mui/material";
export function WrappedHeading({
  heading,
  style,
}: {
  heading: string;
  style?: { x: string };
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: ".8rem",
      }}
    >
      <Box component={"img"} src={"assets/greenArrow.svg"} />
      <Typography
        component={"h1"}
        sx={{
          fontSize: "2.5rem",
          fontWeight: "fontWeightMedium",
          color: "font.dark",
          textAlign: "center",
          ...style,
        }}
      >
        {heading}
      </Typography>
      <Box
        component={"img"}
        src={"assets/greenArrow.svg"}
        sx={{
          transform: "scaleX(-1)",
        }}
      />
    </Box>
  );
}
