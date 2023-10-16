import React, { useState, useEffect } from "react";
import TopNavBar from "./TopNavBar";
import CategoriesSidebar from "./CategoriesSidebar";
import { CartProvider } from "./CartContext";
import TopBar from "./TopBar";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CartProvider>
      <div>
        <TopNavBar />
        {isSmallScreen ? <TopBar /> : <CategoriesSidebar />}
      </div>
    </CartProvider>
  );
}

export default App;