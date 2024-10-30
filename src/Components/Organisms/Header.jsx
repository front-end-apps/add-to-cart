import { useState, useEffect } from "react";
import Login from "../Atoms/Login";
import Searchbar from "../Molecules/Searchbar";
import Cart from "../Atoms/Cart";
function Header({ cartItems }) {
  const [searchValue, setSerachValue] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleSearch = (value) => {
    setSerachValue(value);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleToggleSidebar = ()=>{
    setToggleSidebar(!toggleSidebar);
  }

  return (
    <>
      <header className={`app-header ${isMobile && "app-header-mobile"}`}>
        {isMobile ? (
          <nav>
            <div className="mobile-header">
              <div onClick={handleToggleSidebar}>{toggleSidebar ? 'Close' : 'Menu'}</div>
              <a className="brand-logo" href="/">
                Zoto
              </a>
              <Cart totalCartItems={cartItems} />
            </div>
          </nav>
        ) : (
          <div className="z-container">
            <div className="app-header-left">
              <a className="brand-logo" href="/">
                Zoto
              </a>
              <Searchbar onSearch={handleSearch} />
            </div>
            <div className="app-header-right">
              <Login />
              <Cart totalCartItems={cartItems} />
            </div>
          </div>
        )}
      </header>
      {isMobile && (
        <div className={`menu-sidebar ${toggleSidebar ? 'is-active' : ''}`}>
           <Searchbar onSearch={handleSearch} />
          <Login />
        </div>
      )}
    </>
  );
}
export default Header;
