import "./styles/reset.css";
import "./styles/common.scss";
import NavCommon from "./components/nav/navCommon/NavCommon";
import Footer from "./components/footer/Footer.js";
import Home from "./pages/Home.js";
import AboutUs from "./pages/AboutUs.js";
import Properties from "./pages/Properties.js";
import PropertyDetails from "./pages/PropertyDetails.js";
import Service from "./pages/Service.js";
import Contacts from "./pages/Contacts.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.js";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavCommon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* <Home /> */}
          {/* <AboutUs /> */}
          {/* <Properties /> */}
          {/* <PropertyDetails /> */}
          {/* <Service /> */}
          {/* <Contacts /> */}
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
