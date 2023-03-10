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
      element: <Contact />,
    },
    {
      path: "/store",
      element: <OurStore title="Our Store"/>,
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
