import {} from "react";
import "../styles/landingPageCards.css";
import set_and_gifts_1 from "../images/set_and_gift_3.jpeg";
import set_and_gifts_2 from "../images/set_and_gift_1.jpeg";
import set_and_gifts_3 from "../images/set_and_gift_2.jpeg";

export const SetAndGifts = () => {
  return (
    <>
      <div id="landing_page_set_and_gifts">
        <div className="set_and_gifts_title">Sets and Gifts</div>
        <div className="set_and_gifts_cards">
          <div className="set_and_gifts_cards_children">
            <p className="set_and_gifts_cards_img_parent">
              <img
                className="set_and_gifts_cards_img"
                src={set_and_gifts_1}
                alt="what would you like"
              />
            </p>
            <p className="set_and_gifts_cards_title">Wine Glasses</p>
          </div>
          <div className="set_and_gifts_cards_children">
            <p className="set_and_gifts_cards_img_parent">
              <img
                className="set_and_gifts_cards_img"
                src={set_and_gifts_2}
                alt="what would you like"
              />
            </p>
            <p className="set_and_gifts_cards_title">Wine Sets</p>
          </div>
          <div className="set_and_gifts_cards_children">
            <p className="set_and_gifts_cards_img_parent">
              <img
                className="set_and_gifts_cards_img"
                src={set_and_gifts_3}
                alt="what would you like"
              />
            </p>
            <p className="set_and_gifts_cards_title">Decanters</p>
          </div>
        </div>
      </div>
    </>
  );
};
