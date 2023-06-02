import {
  CSidebar,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CSidebarToggler,
} from "@coreui/react";
import { Link, redirect } from "react-router-dom";
function SideBar() {
  function getRedirectURL() {
    const userType = localStorage.getItem("userType").toLowerCase();
    return `/${userType}`;
  }
  function onLogout() {
    localStorage.clear();
    // localStorage.removeItem("name");
    // localStorage.removeItem("userStatus");
    // localStorage.removeItem("token");
    // localStorage.removeItem("userType");
  }
  return (
    <CSidebar unfoldable className="vh-100 bg-black">
      <CSidebarNav>
        <CNavTitle>Customer Support App</CNavTitle>
        <CNavItem href="#">
          <Link
            to={getRedirectURL()}
            className="text-decoration-none text-white"
          >
            <i className="bi bi-house-door-fill m-3"></i> Home
          </Link>
        </CNavItem>
        <CNavItem href="#">
          <Link
            to="/"
            className="text-decoration-none text-white"
            onClick={onLogout}
          >
            <i className="bi bi-box-arrow-right m-3"></i> Logout
          </Link>
        </CNavItem>
      </CSidebarNav>
      <CSidebarToggler />
    </CSidebar>
  );
}
export default SideBar;
