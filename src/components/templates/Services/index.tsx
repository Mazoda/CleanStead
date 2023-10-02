import { Box, Grid, Typography } from "@mui/material";
import { ServiceType } from "../../../types";
import { Service } from "../../organisms/Service";

export function Services({ services }: { services: ServiceType[] }) {
  return (
    <>
      <Box
        sx={{
          marginBlock: "3rem",
          display: "flex",
          flexDirection: "column",
          gap: "2.75rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box display={"flex"} gap={".8rem"} marginBottom={"4rem"}>
          <Box component={"img"} src={"/src/assets/greenArrow.svg"} />
          <Typography
            component={"h1"}
            sx={{
              fontSize: "2.5rem",
              fontWeight: "fontWeightMedium",
              color: "font.dark",
              textAlign: "center",
            }}
          >
            الخدمات التي نقدمها
          </Typography>
          <Box
            component={"img"}
            src={"/src/assets/greenArrow.svg"}
            sx={{
              transform: "scaleX(-1)",
            }}
          />
        </Box>
        <Grid
          container
          columns={{ xs: 6, sm: 6, md: 12 }}
          spacing={{ xs: 4}}
        >
          {services
            ? services.map((service: ServiceType) => (
                <Grid item xs={6} sm={3} md={4} key={service.serviceID}>
                  <Service
                    serviceID={service.serviceID}
                    imageUrl={service.imageUrl}
                    title={service.title}
                    description={service.description}
                  ></Service>
                </Grid>
              ))
            : "no data found"}
        </Grid>
      </Box>
    </>
  );
}
