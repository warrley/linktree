import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Newtworks from "./pages/networks";
import Admin from "./pages/admin";

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