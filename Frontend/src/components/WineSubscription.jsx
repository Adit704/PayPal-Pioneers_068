import {} from "react";
import "../styles/winesubscription.css";
import Wine_subscription_img from "../images/wine_subscription_img.jpeg";

export const WineSubscription = () => {
  return (
    <>
      <div id="landing_page_wine_subscription">
        <div className="landing_page_wine_subscription_content">
          <p className="landing_page_wine_subscription_title">Wine Subscription</p>
          <p className="landing_page_wine_subscription_description">
            Subscriton is journey through the world of wine. Four bottles at a
            time. Each month, we select wines based on a chosen theme and
            explain how each bottle fits that theme.It's wine education and
            enjoyment in equal measure.
          </p>
          <p className="landing_page_wine_subscription_link">More about subscription</p>
        </div>


        <div className="landing_page_wine_subscription_img_and_content">
            <p className="landing_page_wine_subscription_img_parent"><img className="landing_page_wine_subscription_img" src={Wine_subscription_img} alt="This img belongs to wine subscription section" /></p>
            <div className="landing_page_wine_subscription_img_and_content_content">
                <p>Wine Subscription</p>
                <p>Need a help ?</p>
                <p>Looking for a gift ?</p>
            </div>
        </div>
      </div>
    </>
  );
};
