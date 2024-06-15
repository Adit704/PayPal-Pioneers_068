import {} from "react";
import "../styles/header.css";
import wineBottle from "../images/winebottle.png";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Cart } from "./Cart";
import { useCartDisplay } from "../hooks/cartDisplayHook";
import { useNavigate, Link } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/wishlist");
  };

  const handleSearchBar = (e) => {
    dispatch({ type: SEARCHBAR, payload: e.target.value });
  };
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
              onChange={(e) => handleSearchBar(e)}
            />
            <button className="landing_page_header_search_btn">Search</button>
          </div>
          <div className="landing_page_header_icons">
            <div className="landing_page_header_login">
              <div className="landing_page_header_login_dropdown_parent">
                <FontAwesomeIcon
                  className="landing_page_header_icons_children"
                  icon={faUser}
                />
              </div>

              <div className="landing_page_header_icons_login_dropdown">
                <div className="landing_page_header_icons_login_dropdown_children">
                  <Link to="/login">
                    {" "}
                    <p>Log In</p>
                  </Link>
                  <Link to="/register">
                    {" "}
                    <p>Sign Up</p>
                  </Link>
                </div>
              </div>
            </div>

            <p className="landing_page_header_fav" onClick={handleClick}>
              <FontAwesomeIcon
                className="landing_page_header_icons_children"
                icon={faBookmark}
              />
            </p>
            <p onClick={cartToggle} className="landing_page_header_cart">
              <FontAwesomeIcon
                className="landing_page_header_icons_children"
                icon={faCartShopping}
              />
            </p>
          </div>
        </div>
        <Cart visible={visible} cartToggle={cartToggle} />
      </header>
    </>
  );
};
