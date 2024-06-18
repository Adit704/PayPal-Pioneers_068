import {} from "react";
import '../styles/navbar.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div id="landing_page_navbar">
        <div onClick={() => 
          {dispatch({type:"COLOR", payload:"Red"});
          navigate("/catlog");}
        } className="landing_page_navbar_children">Red</div>
        <div className="landing_page_navbar_children" onClick={()=>{
          dispatch({type:"COLOR", payload:"White"});
          navigate("/catlog")
        }}>White</div>
        <div className="landing_page_navbar_children" onClick={()=>{
          dispatch({type:"COLOR", payload:"Rose"});
          navigate("/catlog")
        }}>Rose</div>
        <div className="landing_page_navbar_children" onClick={()=>{
          dispatch({type:"COLOR", payload:"Sparkling"});
          navigate("/catlog")
        }}>Sparkling</div>
        <div className="landing_page_navbar_children" onClick={()=>{
          navigate("/catlog")
        }}>Promotions</div>
        <div className="landing_page_navbar_children" onClick={()=>{
          navigate("/catlog")
        }}>Set & Gifts</div>
      </div>
    </>
  );
};
