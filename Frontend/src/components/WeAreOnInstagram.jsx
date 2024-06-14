import {} from "react";
import "../styles/weareoninstagram.css";
import we_are_on_instagram_1 from "../images/we_are_on_instagram_1.jpeg";
import we_are_on_instagram_2 from "../images/we_are_on_instagram_2.jpeg";
import we_are_on_instagram_3 from "../images/we_are_on_instagram_3.jpeg";
import we_are_on_instagram_4 from "../images/we_are_on_instagram_4.jpeg";

export const WeAreOnInstagram = () => {
  return (
    <>
      <div id="landing_page_we_are_on_instagram">
        <p className="landing_page_we_are_on_instagram_title">We are on Instagram</p>
        <div className="landing_page_we_are_on_instagram_cards">
        <p className="landing_page_we_are_on_instagram_img_parent"><img className="landing_page_we_are_on_instagram_img" src={we_are_on_instagram_1} alt="" /></p>
        <p className="landing_page_we_are_on_instagram_img_parent"><img className="landing_page_we_are_on_instagram_img" src={we_are_on_instagram_2} alt="" /></p>
        <p className="landing_page_we_are_on_instagram_img_parent"><img className="landing_page_we_are_on_instagram_img" src={we_are_on_instagram_3} alt="" /></p>
        <p className="landing_page_we_are_on_instagram_img_parent"><img className="landing_page_we_are_on_instagram_img" src={we_are_on_instagram_4} alt="" /></p>
      </div>
      </div>
    </>
  );
};
