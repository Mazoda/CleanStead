import { Outlet } from "react-router-dom";
import { Header } from "../components/atoms/Header";
import MainContianer from "../components/MainContainer";

export default function RootLayout() {
  return (
    <>
      <MainContianer>
        <Header />
        <main>
          <Outlet />
        </main>
      </MainContianer>
    </>
  );
}
