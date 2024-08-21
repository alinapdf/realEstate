import "./styles/reset.css";
import "./styles/common.scss";
import NavCommon from "./components/nav/navCommon/NavCommon";
import Footer from "./components/footer/Footer.js";
import Home from "./pages/Home.js";
import AboutUs from "./pages/AboutUs.js";
import Properties from "./pages/Properties.js";
import PropertyDetails from "./pages/PropertyDetails.js";
import Service from "./pages/Service.js";

const App = () => {
  return (
    <>
      <NavCommon />
      {/* <Home /> */}
      {/* <AboutUs /> */}
      {/* <Properties /> */}
      {/* <PropertyDetails /> */}
      <Service />
      <Footer />
    </>
  );
};

export default App;
