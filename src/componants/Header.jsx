// import React from 'react';

import { Link } from "react-router-dom";

const Header = ({ data }) => {
  //   console.log(data);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        }) no-repeat center center / cover`,
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[10%]"
    >
      <h1 className="text-5xl font-bold text-white">
        {data.name || data.title || data.original_title || data.original_name}
      </h1>
      <p className="text-xs text-white mt-3 w-1/2">
        {data.overview.slice(0, 200)}....
        <Link className="text-blue-500 text-xs">more</Link>
      </p>
      <p className=" text-white mt-3 text-sm">
        {data.first_air_date || "No Information"}
        {data.media_type}
      </p>
      <Link className="bg-blue-600 text-white p-3 rounded mt-3">
        Watch Trailler
      </Link>
    </div>
  );
};

export default Header;
