// import React from 'react'

import { Link } from "react-router-dom";
import axios from "../utilis/axios";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Loading from "./Loading";

const HorizontalCards = () => {
  const [trending, setTrending] = useState(null);
  // for filter
  const [category, setCategory] = useState("all");

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    getTrending();
  }, [category]);
  // console.log(trending);

  return trending ? (
    <div className="w-full h-[40vh] p-5">
      <div className="mb-5 flex justify-between">
        <h1 className="text-3xl font-semibold text-zinc-400">Trending...</h1>
        <Dropdown
          title="Filter"
          options={["tv", "movie", "all"]}
          func={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="w-[100%] flex overflow-y-hidden">
        {trending.map((d, i) => (
          <div key={i} className="min-w-[20%] h-fit mb-5 bg-zinc-900 mr-5">
            <img
              className="w-full h-[45%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <h1 className="text-lg font-semibold text-white">
              {d.name || d.title || d.original_title || d.original_name}
            </h1>
            <p className="text-xs text-white mb-3 mt-3 ">
              {d.overview.slice(0, 100)}....
              <Link className="text-blue-500 text-xs">more</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default HorizontalCards;
