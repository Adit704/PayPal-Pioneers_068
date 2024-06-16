import { useEffect, useState, useCallback } from "react";
import "../styles/header.css";
import wineBottle from "../images/winebottle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Cart } from "./Cart";
import { useCartDisplay } from "../hooks/cartDisplayHook";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const productsData = useSelector((state) => state.products);
  const products = productsData?.data ?? [];
  const [isProduct, setIsProduct] = useState(false);

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    navigate("/wishlist");
  }, [navigate]);

  const handleInputSearch = useCallback(() => {
    if (isProduct) {
      navigate("/catlog");
    }
  }, [isProduct, navigate]);

  useEffect(() => {
    const foundProduct = products.some((product) =>
      product.category.toLowerCase().includes(search.toLowerCase())
    );
    setIsProduct(foundProduct);
  }, [products, search]);

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
              onChange={handleSearchChange}
              value={search}
            />

            <button
              onClick={handleInputSearch}
              className="landing_page_header_search_btn"
            >
              Search
            </button>
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



