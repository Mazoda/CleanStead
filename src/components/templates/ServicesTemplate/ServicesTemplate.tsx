import { Grid } from "@mui/material";
import { ServiceType } from "../../../types";
import { ServiceCard } from "../../organisms/ServiceCard";
import { WrappedHeading } from "../../atoms/WrappedHeading";

export function ServicesTemplate({ services }: { services: ServiceType[] }) {
  return (
    <div>
      <WrappedHeading heading="الخدمات التي نقدمها" />
      <Grid
        container
        columns={{ xs: 6, sm: 6, md: 12 }}
        spacing={{ xs: 4 }}
        sx={{
          paddingBlock: "1rem",
        }}
      >
        {services
          ? services.map((service: ServiceType) => (
              <Grid item xs={6} sm={3} md={4} key={service.serviceID}>
                <ServiceCard
                  serviceID={service.serviceID}
                  imageUrl={service.imageUrl}
                  title={service.title}
                  description={service.description}
                ></ServiceCard>
              </Grid>
            ))
          : "no data found"}
      </Grid>
    </div>
  );
}
