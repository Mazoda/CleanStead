import { Typography, Box } from "@mui/material";

export function StatusHandler({
  content,
  height,
}: {
  content: string;
  height: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height,
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          fontSize: {
            xs: "1rem",
            sm: "2rem",
          },
          fontWeight: "fontWeightLabelSmall",
        }}
      >
        {content}
      </Typography>
    </Box>
  );
}
