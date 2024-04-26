import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useCart from "../../hooks/useCArt";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar fixed z-30 opacity-40 bg-base-100 max-w-screen-xl text-blue">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="sidebar menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Our Menu</NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">Order Now</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">
                Cart
                <FaShoppingCart />
              </NavLink>
            </li>
            {user ? (
              <li>
                <button className="btn btn-ghost" onClick={handleLogout}>
                  Logout
                </button>
                <span>{user?.displayName}</span>
              </li>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}

            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Now</NavLink>
          </li>
          <NavLink to="/dashboard/mycart">
            <div className="flex mt-3">
              <FaShoppingCart />
              <div className="badge badge-secondary">+{cart.length || 0}</div>
            </div>
          </NavLink>
          {user ? (
            <li>
              <button className="btn btn-ghost" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/secret">Secret</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
