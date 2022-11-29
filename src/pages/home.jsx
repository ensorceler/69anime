import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import PopularAnimeSlider from "../modules/home/PopularAnimeSlider";
import SeasonalAnimeCards from "../modules/home/SeasonalAnimeCards";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <PopularAnimeSlider />
      <SeasonalAnimeCards />
    </div>
  );
}
