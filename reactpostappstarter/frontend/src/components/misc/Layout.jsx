import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import classes from "./Layout.module.css";
const Layout = () => {
  return (
    <div className={classes.wrapper} >
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
