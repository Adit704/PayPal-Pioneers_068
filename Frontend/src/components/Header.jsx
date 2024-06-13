import {} from "react";
import "../styles/header.css";
import wineBottle from "../images/winebottle.png";
import { Cart } from "./Cart";
import { useCartDisplay } from "../hooks/cartDisplayHook";
// import { useDispatch } from "react-redux";


export const Header = () => {
  // const dispatch = useDispatch();

  // const handleSearchBar = (e) => {
  //   dispatch({ type: SEARCHBAR, payload: e.target.value });
  // };
  const [visible, cartToggle] = useCartDisplay();

  return (
    <>
      <header id="landing_page_header">
        <div className="landing_page_header_logo_parent">
          <img
            className="landing_page_header_logo"
            src={wineBottle}
            alt="This is logo"
          />
        </div>
        <div className="landing_page_header_search_parent_parent">
          <div className="landing_page_header_search_parent">
            <input
              className="landing_page_header_search"
              placeholder="Search your wine...."
              type="text"
              // onChange={(e) => handleSearchBar(e)}
            />
            <button className="landing_page_header_search_btn">Search</button>
          </div>
          <div className="landing_page_header_icons">
            <button className="landing_page_header_login">Log in </button>
            <button className="landing_page_header_signup">Sign Up</button>
            <button onClick={cartToggle} className="landing_page_header_cart">cart</button>
          </div>
        </div>
        <Cart visible={visible} cartToggle={cartToggle}/>
      </header>
<hr />

    </>
  );
};
