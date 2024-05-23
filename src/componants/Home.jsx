// import React from 'react'

import { useEffect, useState } from "react";
import Sidenav from "../partils/Sidenav";
import Topnav from "./Topnav";
import axios from "../utilis/axios";
import Header from "./Header";
import HorizontalCards from "../partils/HorizontalCards";
import Loading from "../partils/Loading";
// import { data } from "autoprefixer";

const Home = () => {
  document.title = "TMDB | HOMEPAGE";
  const [wallpaper, setWallpaper] = useState(null);

  //   header ke wallpepar ka function...
  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomIndex = Math.floor(Math.random() * data.results.length);
      let randomdata = data.results[randomIndex];
      setWallpaper(randomdata);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  // console.log(wallpaper);

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
        <Topnav />
        <Header data={wallpaper} />
        <HorizontalCards />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
