import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const year = 2022;
const season = "fall";

export default function HomePage() {
  const [animeData, setAnimeData] = useState([]);
  async function fetchSeasons() {
    const res = await fetch(
      `https://api.jikan.moe/v4/seasons/${year}/${season}`
    );
    const response = await res.json();

    console.log(response);
    setAnimeData(response.data);
  }

  useEffect(() => {
    fetchSeasons();
  }, []);

  return (
    <div>
      <Navbar />
      <pre>{JSON.stringify(animeData, null, 2)}</pre>
      <Link to="/">Going to main page</Link>
    </div>
  );
}
