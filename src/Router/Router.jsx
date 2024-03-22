import {
    createBrowserRouter
 
  } from "react-router-dom";
import Layout from "../assets/Layout/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
           path:"/menu",
           element:<Menu></Menu>
        }
      ]
    },
  ]);



export default router;