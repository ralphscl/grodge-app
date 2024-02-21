import { Outlet } from "react-router-dom";
// Component
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;