import React from 'react';
import './App.css';
//import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import Layout from './components/Layout';
import Home from "./Pages/Home";
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import Compare from './Pages/Compare';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Forgot from './Pages/Forgot';
import SignUp from './Pages/SignUp';
import Resetpassword from './Pages/Resetpassword';
import SingleBlog from './Pages/SingleBlog';
import SingleProduct from './Pages/SingleProduct';

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/store",
      element: <OurStore/>,
    },
    {
      path: "/blogs",
      element: <Blog/>,
    },
    {
      path: "/blog/:id",
      element: <SingleBlog/>
    },
    {
      path: "/:id",
      element: <SingleProduct/>
    },
    {
      path: "/compare-product",
      element: <Compare/>
    },
    {
      path: "/wishlist",
      element: <Wishlist/>
    },
    {
      path: "/cart",
      element: <Cart/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/forgot-password",
      element: <Forgot/>
    },
    {
      path: "/SignUp",
      element: <SignUp/>
    },
    {
      path: "/reset",
      element: <Resetpassword/>
    }
  ]);
  return (
    <div className="app">
      {/* <Header /> */}
      <RouterProvider router={router} />
      <Footer />
    </div>

  );
}

export default App;



















































/* import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/> ,
    },
  {
    path: "/cart",
    element: <Cart/>,
  },
  ]);
  return (
    <div className="App">

        <NavBar />
        <RouterProvider router={router} />

    </div>
  );
}

export default App;
 */
