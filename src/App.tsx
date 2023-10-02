import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme/Theme";
import Home from "./pages/Home";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />;
    </ThemeProvider>
  );
}

export default App;
