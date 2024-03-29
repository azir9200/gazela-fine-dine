import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AllFood from "../Pages/AllFood/AllFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ShowMenu from "../Pages/Components/ShowMenu/ShowMenu";
import OrderInfo from "../Pages/Components/OrderInfo/OrderInfo";
import ErrorPage from "../Pages/Components/ErrorPage/ErrorPage";
import AllOrder from "../Pages/Components/AllOrder/AllOrder";
import PrivateRoute from "./PrivateRoute";
// import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allFood",
        element: <AllFood></AllFood>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/orderInfo",
        element: (
          <PrivateRoute>
            <OrderInfo></OrderInfo>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "allFood/showmenu/:id",
        element: <ShowMenu></ShowMenu>,
        loader: ({ params }) =>
          fetch(`https://y-4bwgrg4eq-azir-uddins-projects.vercel.app/allDishes/${params.id}`),
      },
      {
        path: "orderInfo/:id",
        element: (
          <PrivateRoute><OrderInfo></OrderInfo> </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://y-4bwgrg4eq-azir-uddins-projects.vercel.app/allDishes/${params.id}`),
      },
      {
        path: "/allOrder",
        element: <AllOrder></AllOrder>,
      },
    ],
  },
]);

export default router;