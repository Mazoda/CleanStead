import { Box, Grid } from "@mui/material";
import { ServiceType } from "../../../types";
import { ServiceCard } from "../../organisms/ServiceCard";
import { WrappedHeading } from "../../atoms/WrappedHeading";

export function ServicesTemplate({ services }: { services: ServiceType[] }) {
  return (
    <div>
      <Box
        sx={{
          marginBlockStart: "1rem",
          marginBlockEnd: "5rem",
        }}
      >
        <WrappedHeading heading="الخدمات التي نقدمها" />
      </Box>
      <Grid
        container
        columns={{ xs: 2, md: 4, lg: 12 }}
        spacing={{ xs: 4, md: 2 }}
        sx={{
          paddingTop: "2rem",
        }}
      >
        {services
          ? services.map((service: ServiceType) => (
              <Grid item xs={2} md={2} lg={4} key={service.id}>
                <Box
                  sx={{
                    paddingInline: {
                      sm: "1rem",
                      md: "0",
                    },
                  }}
                >
                  <ServiceCard
                    id={service.id}
                    imageUrl={service.imageUrl}
                    title={service.title}
                    description={service.description}
                  ></ServiceCard>
                </Box>
              </Grid>
            ))
          : "no data found"}
      </Grid>
    </div>
  );
}
