import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/admin";
import Login from "./pages/login";
import Newtworks from "./pages/networks/inedex";
import Admin from "./pages/home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Admin/>
  },
  {
    path: '/admin/newtworks',
    element: <Newtworks/>
  },
])

export { router };