import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/Navbar";
import Write from "./pages/Write"
import "../src/style.scss"
import Single from "./pages/Single"
import Home from "./pages/Home"
import Footer from "./components/Footer";


const Layout = () => {
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/post/:id",
        element:<Single />
      },
      {
        path:"Write",
        element:<Write />
      },
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/Login",
    element: <Login />
  },
]);
function App (){
  return(
    <div className="app">
      <div className="container">
      <RouterProvider router={router} />
      </div>
    </div>
  )
}



export default App;