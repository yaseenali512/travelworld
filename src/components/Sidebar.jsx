import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* <p>countries list</p> */}
      {/* works like {children} */}
      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by TravelWorld Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
