// import React from 'react'

import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "../partils/Dropdown";
import { useEffect, useState } from "react";
import axios from "../utilis/axios";
import Cards from "../partils/Cards";
import Loading from "../partils/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
    document.title = "TMDB | Movie";
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovie((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refersHandler = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setmovie([]);
      getMovie();
    }
  };

  // console.log(data);
  useEffect(() => {
    // getTrending();
    refersHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className=" w-screen h-screen cursor-pointer ">
      <div className="w-full flex justify-between items-center">
        <div
          onClick={() => navigate(-1)}
          className="text-gray-400 text-2xl flex"
        >
          <i className="ri-arrow-left-fill"></i>
          <h1>Movie</h1>
        </div>
        <div className="w-[60%]">
          <Topnav />
        </div>
        <div className="flex justify-between gap-10">
          <div className="">
            <Dropdown
              title="Category"
              options={["Popular", "top_rated", "Upcoming", "now_playing"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          {/* <div>
            <Dropdown
              title="Duration"
              options={["week", "day"]}
            //   func={(e) => setDuration(e.target.value)}
            />
          </div> */}
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movie} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
