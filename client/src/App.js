import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "./animation/driver.css";
import "./animation/keyfram.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Footer } from "./shared/Footer/Footer";
import { Navbar } from "./shared/Navbar/Navbar";
import { WP } from "./pages/MultiSignUps/WP";
import { Technetian } from "./pages/MultiSignUps/Technetian";
import { Customer } from "./pages/MultiSignUps/Customer";
import { Products } from "./pages/Products/Products";
import AuthProvider from "./context/AuthContext";
import { AdminOutlet } from "./outlets/AdminOutlet";
import AllUsers from "./private/admin/AllUsers";
import ManageProduct from "./private/admin/ManageProduct";
import ManageTech from "./private/admin/ManageTechWp";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { CustomerOutlet } from "./outlets/CustomerOutlet";
import CheckOut from "./components/CheckOut";
import ProductDetails from "./components/ProductDetails";
import FindWp from "./components/Map/FindWp";
import EmergencyServiceMap from "./components/Map/EmergencyServiceMap";
import Booking from "./components/Map/Booking";
import ShopingCarts from "./components/ShopingCarts";
import PaymentMsg from "./components/PaymentMsg";
import MakeBooking from "./components/MakeBooking";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/creating-new-user" element={<Signup />} />
          <Route path="/creating-new-customer" element={<Customer />} />
          <Route path="/creating-new-technetian" element={<Technetian />} />
          <Route path="/creating-new-wp" element={<WP />} />
          <Route path="/emergency-service" element={<EmergencyServiceMap />} />
          <Route path="/wp-service" element={<FindWp />} />
          <Route path="/buy-products" element={<Products />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/payment-success" element={<PaymentMsg />} />
          <Route
            path="/make/booking/:name/:num/:mail"
            element={<MakeBooking />}
          />
          <Route
            path="/products/:id/:name/:cat/:price/:image"
            element={<ProductDetails />}
          />

          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<AdminOutlet />}>
            <Route path="all/user/list" element={<AllUsers />} />
            <Route path="all/product/manage" element={<ManageProduct />} />
            <Route path="all/tech/manage" element={<ManageTech />} />
          </Route>
          <Route path="/customer" element={<CustomerOutlet />}>
            <Route path="my-carts" element={<ShopingCarts />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
