import { Container } from "@mui/material";

export default function MainContianer({ children }: any, sx: { x: string}) {
  return (
    <Container maxWidth="xl" sx={{ ...sx }}>
      {children}
    </Container>
  );
}
