import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ServiceType } from "../../../types";

export function ServiceCard({
  imageUrl,
  title,
  description,
  serviceID,
}: ServiceType) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
          borderRadius: "1.5rem",
          paddingInline: "1.5rem",
          paddingBlock: "1.5rem",
          boxShadow: "0px 8px 24px #EBF8FE",
          marginBottom:"3rem"
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            component={"img"}
            src={imageUrl}
            sx={{
              marginTop: "-5rem",
              height: "8.125rem",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: "10rem",
            }}
          />
          <Typography
            component={"h2"}
            sx={{
              fontSize: "1.25rem",
              fontWeight: "fontWeightBold",
              color: "font.dark",
            }}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          component={"h3"}
          sx={{
            fontSize: "1.25rem",
            color: "font.grey",
            fontWeight: "fontWeightRegular",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>

        <Typography
          component={Link}
          to={`/about/${serviceID}`}
          sx={{
            fontSize: "1.15rem",
            fontWeight: "fontWeightRegular",
            color: "primary.main",
            justifySelf: "flex-start",
          }}
        >
          رؤية المزيد
        </Typography>
      </Box>
    </>
  );
}
