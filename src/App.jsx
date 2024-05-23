// import React from 'react'

import { Route, Routes } from "react-router-dom";
import Home from "./componants/Home";
import Trending from "./componants/Trending";
import Popular from "./componants/Popular";
import Movie from "./componants/Movie";
import Tvshows from "./componants/Tvshows";
import People from "./componants/People";



const App = () => {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/people" element={<People />} />





      </Routes>
    </div>
  );
};

export default App;
