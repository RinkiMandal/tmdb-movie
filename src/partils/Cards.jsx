// import React from 'react'

import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link key={i} className="relative w-[25vh] mr-[5%] mb-[5%]">
          <img
            className=" h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              c.backdrop_path || c.poster_path || c.profile_path
            }`}
            alt=""
          />
          <h1 className="text-lg font-semibold text-zinc-400">
            {c.name || c.title || c.original_title || c.original_name}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
