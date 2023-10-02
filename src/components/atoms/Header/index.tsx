import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { getDocument } from "../../../Services/FirebaseService";

const navItems = [
  {
    id: 1,
    name: "الرئيسية",
  },
  {
    id: 2,
    name: "من نحن",
  },
  {
    id: 3,
    name: "الخدمات",
  },
  {
    id: 4,
    name: "اتصل بنا",
  },
];

export const Header = () => {
  return (

      <Box
        component={"header"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBlock: "1.5rem",
        }}
      >
        <Box
          component={Link}
          to={"/"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              width: "30px",
              objectFit: "cover",
              aspectRatio: "1/1",
            }}
            component={"img"}
            src="/src/assets/logo.png"
            alt="Coral Logo"
          ></Box>
          <Typography
            sx={{
              color: "font.dark",
              fontWeight: "fontWeightMedium",
              fontSize: "25px",
            }}
          >
            كلين
          </Typography>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: "fontWeightMedium",
              fontSize: "25px",
            }}
          >
            ستيد
          </Typography>
        </Box>
        {/* من نحن */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {navItems.map((navItem) => (
            <Button
              key={navItem.id}
              component={Link}
              to={``}
              sx={{
                fontWeight: "fontWeightRegular",
                fontSize: "20px",
                color: "font.main",
                display: "block",
                textTransform: "none",
                paddingBlock: 0,
              }}
            >
              {navItem.name}
            </Button>
          ))}
        </Box>
        {/* احجز الان */}
        <Box>
          <Button
            variant="contained"
            onClick={async () => {
              const test = await getDocument("test", "Countries");
              console.log(test);
            }}
            sx={{
              fontWeight: "fontWeightRegular",
              fontSize: "20px",
              color: "bright.main",
              textTransform: "none",
              borderRadius: "10rem",
              boxShadow: "none",
            }}
          >
            احجز الان
          </Button>
        </Box>
      </Box>

  );
};
