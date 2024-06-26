import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../../hooks/AdminRoute";
import SignUp from "../SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import AddItem from "../pages/Dashboard/AddItem";
import AllUsers from "../pages/Dashboard/AllUsers";
import ManageItem from "../pages/Dashboard/ManageItem";
import MyCart from "../pages/Dashboard/MyCart";

import Payment from "../pages/Dashboard/payment/Payment";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Secret from "../shared/Secret";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageitem",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);
