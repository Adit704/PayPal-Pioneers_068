import {} from "react";
import '../styles/navbar.css';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id="landing_page_navbar">
        <div onClick={() => navigate("/productpage")} className="landing_page_navbar_children">Red</div>
        <div className="landing_page_navbar_children">White</div>
        <div className="landing_page_navbar_children">Rose</div>
        <div className="landing_page_navbar_children">Sparkling</div>
        <div className="landing_page_navbar_children">Promotions</div>
        <div className="landing_page_navbar_children">Set & Gifts</div>
      </div>
    </>
  );
};
