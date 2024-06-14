import {} from "react";
import '../styles/landingPageCards.css';
import what_would_you_1 from "../images/what_would_you_1.jpeg";
import what_would_you_2 from "../images/what_would_you_2.png";
import what_would_you_3 from "../images/what_would_you_3.png";
import what_would_you_4 from "../images/what_would_you_4.png";

export const LandingPageCards = () => {
  return (
    <>
      <div id="landing_page_what_would_you_like">
        <div className="what_would_you_like_title">
          What would you like ?
        </div>
        <div  className="what_would_you_like_cards">
          <div className="what_would_you_like_cards_children">
            <p>
              <img className="what_would_you_like_cards_img" src={what_would_you_1} alt="what would you like" />
            </p>
            <p className="what_would_you_like_cards_title">white</p>
          </div>
          <div className="what_would_you_like_cards_children">
            <p>
              <img className="what_would_you_like_cards_img" src={what_would_you_2} alt="what would you like" />
            </p>
            <p className="what_would_you_like_cards_title">Red</p>
          </div>
          <div className="what_would_you_like_cards_children">
            <p>
              <img className="what_would_you_like_cards_img" src={what_would_you_3} alt="what would you like" />
            </p>
            <p className="what_would_you_like_cards_title">Rose</p>
          </div>
          <div className="what_would_you_like_cards_children">
            <p>
              <img className="what_would_you_like_cards_img" src={what_would_you_4} alt="what would you like" />
            </p>
            <p className="what_would_you_like_cards_title">Sparkling</p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
