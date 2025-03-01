import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Newtworks from "./pages/networks";
import Admin from "./pages/admin";
import { Private } from "./routes/Private";
import { ErrorPage } from "./pages/error";

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
    element: <Private><Admin/></Private>
  },
  {
    path: '/admin/networks',
    element: <Private><Newtworks/></Private>
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
])

export { router };