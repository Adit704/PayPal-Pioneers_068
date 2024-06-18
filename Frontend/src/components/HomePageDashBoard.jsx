import {} from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { HeroCarausal } from "./HeroCarausal";
import { LandingPageCards } from "./LandingPageCards";
import { Slider } from "./Slider";
import { SetAndGifts } from "./SetAndGifts";
import "../styles/homepagedashboard.css";
import { WineSubscription } from "./WineSubscription";
import { BlogAndNews } from "./BlogAndNews";
import { WeAreOnInstagram } from "./WeAreOnInstagram";
import { Footer } from "./Footer";
import { BestSellers } from "./BestSellers";
import { Link } from "react-router-dom";


export const HomePageDashBoard = () => {
  return (
    <>
      <div id="landing_page_dashboard">
        <Header />
        <Navbar />
        <HeroCarausal />
        <LandingPageCards />
        <Slider />
        <Link to="/catlog"><SetAndGifts /></Link>
        <WineSubscription />
        <BestSellers/>        
        <BlogAndNews />
        <WeAreOnInstagram />
        <Footer />
      </div>
    </>
  );
};
