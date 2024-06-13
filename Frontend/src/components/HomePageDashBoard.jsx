import {} from "react";
import { Header } from "./Header";
import { HeroCarausal } from "./HeroCarausal";
import { LandingPageCards } from "./LandingPageCards";
import { Slider } from "./Slider";
import { SetAndGifts } from "./SetAndGifts";
import '../styles/homepagedashboard.css';
import { Navbar } from "./Navbar";

export const HomePageDashBoard = () => {
  return (
    <>
      <div id="landing_page_dashboard">
        <Header />
        <Navbar />
        <HeroCarausal />
        <LandingPageCards />
        <Slider />
        <SetAndGifts />
      </div>
    </>
  );
};
