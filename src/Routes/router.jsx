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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allFood',
        element: <AllFood></AllFood>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/orderInfo',
        element: <OrderInfo></OrderInfo>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "allFood/showmenu/:id",
        element: <ShowMenu></ShowMenu>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allDishes/${params.id}`)
      },
      {
        path: "allFood/showmenu/:id",
        element: <OrderInfo></OrderInfo>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allDishes/${params.id}`)
      },

      // {
      //   path: 'book/:id', 
      //   element: <PrivateRoute><BookService></BookService></PrivateRoute>, 
      //   loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      // },
    ]
  },
]);

export default router;