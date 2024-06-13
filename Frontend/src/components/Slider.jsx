import {} from "react";
import "../styles/slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

export const Slider = () => {
  return (
    <>
      <hr />
      <div className="landing_page_slider_parent">
        <div id="landing_page_slider">
          <p className="landing_page_slider_children">
            {" "}
            <FontAwesomeIcon icon={faStarOfLife} /> MORE BOTTLE LESS PRICE
          </p>
          <p className="landing_page_slider_children">
            {" "}
            <FontAwesomeIcon icon={faStarOfLife} /> REWARDS ON EVERY ORDER
          </p>
          <p className="landing_page_slider_children">
            {" "}
            <FontAwesomeIcon icon={faStarOfLife} /> SENDING THE ORDER ON THE
            SAME DAY
          </p>
          <p className="landing_page_slider_children">
            {" "}
            <FontAwesomeIcon icon={faStarOfLife} /> FREE SHIPPING
          </p>
          <p className="landing_page_slider_children">
            {" "}
            <FontAwesomeIcon icon={faStarOfLife} /> MORE BOTTLE LESS PRICE
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};
