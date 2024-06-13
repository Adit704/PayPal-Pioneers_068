import {} from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { HeroCarausal } from "./HeroCarausal";
import { LandingPageCards } from "./LandingPageCards";
import { Slider } from "./Slider";
import { SetAndGifts } from "./SetAndGifts";
import '../styles/homepagedashboard.css';

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
