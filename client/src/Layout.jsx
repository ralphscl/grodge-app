import { Outlet } from "react-router-dom";
// Component
import Header from "./components/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="p-1">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;