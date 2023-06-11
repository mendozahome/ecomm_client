import { Children } from 'react'
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Login from './pages/Login/Login';
import Signin from './pages/Signin/Signin';
import Stores from './pages/Stores/Stores';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { Container } from "reactstrap"
import "./App.scss"

import { ToastContainer } from 'react-toastify';
import { Protector } from "./helpers"

const Layout = () =>{
  return (
    <div className="app">
      <Container>
      <Navbar />
      <Outlet />
      <Footer />
      </Container>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/products/:id",
        element:<Products />,
      },
      {
        path:"/product/:id",
        element:<Product />,
      },
      {
        path:"/login",
        element:<Login />,
      },
      {
        path:"/signin",
        element:<Signin />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/stores",
        element:<Stores />,
      },
      {
        path:"/about",
        element:<About />,
      }
    ],
  },
  
]);

function App() {
  return (
    <div >
    <RouterProvider router={router} />
<ToastContainer />
    </div>
  );
}

export default App;
