import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Organisms/Header";
import Footer from "./Components/Organisms/Footer";
import Home from "./pages/Home";
import ComingSoon from "./Components/Atoms/ComingSoon";
import BrandPage from "./pages/BrandPage";
import { useState, useEffect } from "react";
import NotFound from "./Components/NotFound";
import { Helmet } from "react-helmet";
import featureImage from "../src/images/featured.png"

function App() {
  const [cartItems, setCartItems] = useState([]);

  const updateCartItem = (selectedItems) => {
    setCartItems(selectedItems);
  };

  // useEffect(() => {
  //   console.log('Cart Items:==>>', cartItems);
  // }, [cartItems]);

  return (
    <Router>
      <Helmet>
        <title>Zoto App</title>
        <meta name="description" content="Created by Zotola Group for Zoto" />
        <meta property="og:title" content="Zoto App" />
        <meta
          property="og:description"
          content="Created by Zotola Group for Zoto."
        />
        <meta property="og:image" content={featureImage} />
        <meta property="og:url" content="https://zotola.web.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zoto App" />
        <meta
          name="twitter:description"
          content="Created by Zotola Group for Zoto"
        />
        <meta name="twitter:image" content={featureImage} />
        <meta name="twitter:url" content="https://zotola.web.app/" />

        <link rel="canonical" href="https://zotola.web.app/" />
      </Helmet>
      <div className="App">
        <main className="main">
          <Header cartItems={cartItems} />
          <Routes>
            <Route
              path="/"
              element={<Home updateCartItem={updateCartItem} />}
            />
            <Route path="/brand/:brandURL" element={<BrandPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
