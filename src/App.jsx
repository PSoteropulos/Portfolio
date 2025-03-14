import React, { useEffect } from "react";
import AllRoutes from "/src/router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="psot_portfolio_all_wrap">
      <AllRoutes />
      <ToastContainer />
    </div>
  );
};

export default App;