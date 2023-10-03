import { Box } from "@mui/material";

export function IconBox({
  IconSrc,
  BgColor,
}: {
  IconSrc: string;
  BgColor?: string;
}) {
  return (
    <>
      <Box
        sx={{
          bgcolor: BgColor,
          borderRadius:"1rem",
          aspectRatio: "1/1",
          padding: "1.6rem",
        }}
      >
        <Box
          component={"img"}
          src={IconSrc}
          sx={{
            objectFit: "cover",
            aspectRatio: "1/1",
          }}
        />
      </Box>
    </>
  );
}
