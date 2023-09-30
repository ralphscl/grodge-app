import { Outlet } from "react-router-dom";
// Component
import Header from "./components/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;