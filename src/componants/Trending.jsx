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
  document.title = "TMDB | Trending";
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refersHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  };

  // console.log(data);
  useEffect(() => {
    // getTrending();
    refersHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className=" w-screen h-screen cursor-pointer ">
      <div className="w-full flex justify-between items-center">
        <div
          onClick={() => navigate(-1)}
          className="text-gray-400 text-2xl flex"
        >
          <i className="ri-arrow-left-fill"></i>
          <h1>Trending</h1>
        </div>
        <div className="w-[60%]">
          <Topnav />
        </div>
        <div className="flex justify-between gap-10">
          <div className="">
            <Dropdown
              title="Category"
              options={["movie", "tv", "all"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <div>
            <Dropdown
              title="Duration"
              options={["week", "day"]}
              func={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
