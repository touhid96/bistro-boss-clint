import React from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCArt";
const Dashboard = () => {
  const [cart] = useCart();
  //Todo : load data from the server to have dynamic isAdmin based on data
  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
          {/* Sidebar content here */}
          {!isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaWallet></FaWallet>Payment Histry
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt></FaCalendarAlt>Reserbation
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart
                  <div className="badge badge-secondary">+{cart.length || 0}</div>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaUtensils></FaUtensils>Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt></FaCalendarAlt>Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/mycart">
                  <FaBook></FaBook>Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          )}

          <div className="divider divider-primary"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Go to Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu"> Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Now</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
