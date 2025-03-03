import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Categories from './pages/Categories/Categories';
import Login from './pages/Login/Login';
import Toys from './pages/gifts/Toys';
import DecorativeItems from './pages/Category/DecorativeItems';
import AboutUs from './pages/About/AboutUs';
import Gifts from './pages/gifts/Gifts';
import Contact from './pages/Contacts/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Layout from './Layout';
import Team from './components/Team/Team';
import Confirmation from './pages/Confirmation/Confirmation'
import Cancellation from './pages/Cancellation/Cancellation'
import OrderDetails from './pages/Order/Orderdetails';
import MyOrders from './pages/Order/MyOrders';
import BambooProducts from './pages/ProductsPage/BambooProducts';
import Checkout from './pages/Order/Checkout';
import Cart from './pages/Order/Cart';
import Error from './pages/404-Page/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      {/* Drop down of categories */}

      <Route path="categories" element={<Categories />}>
        <Route path="decorativeItems" element={<DecorativeItems />} />
      </Route>

      {/* Drop down of Gifts */}

      <Route path="gifts" element={<Gifts />}>
        <Route path="toys" element={<Toys />} />
      </Route>

      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="team" element={<Team />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="confirm" element={<Confirmation />} />
      <Route path="cancel" element={<Cancellation />} />
      <Route path="orderDetails" element={<OrderDetails/>} />
      <Route path="myOrders" element={<MyOrders/>} />
      <Route path="bambooProducts" element={<BambooProducts/>} />
      <Route path="checkout" element={<Checkout/>} />
      <Route path="cart" element={<Cart/>} />
      <Route path="error" element={<Error/>} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
);
