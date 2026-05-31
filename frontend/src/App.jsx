import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ShopPage from "./components/Shop/ShopPage";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />}
        />
        <Route
          path="/shop"
          element={<ShopPage handleOrderPopup={handleOrderPopup} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
