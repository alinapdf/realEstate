import "./styles/reset.css";
import "./styles/common.scss";
import NavCommon from "./components/nav/navCommon/NavCommon";
import Footer from "./components/footer/Footer.js";
import Home from "./pages/Home.js";
import AboutUs from "./pages/AboutUs.js";

const App = () => {
  return (
    <>
      <NavCommon />
      {/* <Home /> */}
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;
