import {} from "react";
import "../styles/blogandnews.css";
import winebottle_1 from "../images/blog_and_news_4.jpeg";
import winebottle_2 from "../images/blog_and_news_1.jpeg";
import winebottle_3 from "../images/blog_and_news_3.jpeg";
import winebottle_4 from "../images/blog_and_news_2.jpeg";

export const BlogAndNews = () => {
  return (
    <>
    <div id="landing_page_blog_and_news_container">
      <div className="landing_page_blog_and_news_title">Blog & News</div>
      <div id="landing_page_blog_and_news">
        <div className="landing_page_blog_and_news_cards">
          <p className="landing_page_blog_and_news_img_parent_1">
            <img
              className="landing_page_blog_and_news_img"
              src={winebottle_1}
              alt=""
            />
          </p>
          <p>Enjoy a fun new way to get to know wine</p>
        </div>
        <div className="landing_page_blog_and_news_cards">
          <p className="landing_page_blog_and_news_img_parent_2">
            <img
              className="landing_page_blog_and_news_img"
              src={winebottle_2}
              alt=""
            />
          </p>
          <p>Wine and oysters. A rule just waiting to be broken</p>
        </div>
        <div className="landing_page_blog_and_news_cards">
          <p className="landing_page_blog_and_news_img_parent_3">
            <img
              className="landing_page_blog_and_news_img"
              src={winebottle_3}
              alt=""
            />
          </p>
          <p>A brief history of champagne</p>
        </div>
        <div className="landing_page_blog_and_news_cards">
          <p className="landing_page_blog_and_news_img_parent_4">
            <img
              className="landing_page_blog_and_news_img"
              src={winebottle_1}
              alt=""
            />
          </p>
          <p>A brief history of champagne</p>
        </div>
        <div className="landing_page_blog_and_news_cards large_card">
          <p className="landing_page_blog_and_news_img_parent_5">
            <img
              className="landing_page_blog_and_news_img"
              src={winebottle_4}
              alt=""
            />
          </p>
          <p>The wines we have on our own table right now</p>
        </div>
        <div className="landing_page_blog_and_news_cards">
          <p className="landing_page_blog_and_news_img_parent_6">
            <img
              className="landing_page_blog_and_news_img"
              src={winebottle_2}
              alt=""
            />
          </p>
          <p>To drink better, wine lovers need to look beyond the bottle</p>
        </div>
        <div className="landing_page_blog_and_news_cards">
          <p className="landing_page_blog_and_news_img_parent_7">
            <img
              className="landing_page_blog_and_news_img"
              src={winebottle_1}
              alt=""
            />
          </p>
          <p></p>
        </div>
      </div>
      </div>
    </>
  );
};
