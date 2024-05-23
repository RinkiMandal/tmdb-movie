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
    document.title = "TMDB | TV";
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setTv((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refersHandler = () => {
    if (tv.length === 0) {
      getTv();
    } else {
      setPage(1);
      setTv([]);
      getTv();
    }
  };

  // console.log(data);
  useEffect(() => {
    // getTrending();
    refersHandler();
  }, [category]);

  return tv.length > 0 ? (
    <div className=" w-screen h-screen cursor-pointer ">
      <div className="w-full flex justify-between items-center">
        <div
          onClick={() => navigate(-1)}
          className="text-gray-400 text-2xl flex"
        >
          <i className="ri-arrow-left-fill"></i>
          <h1>Tv Shows</h1>
        </div>
        <div className="w-[60%]">
          <Topnav />
        </div>
        <div className="flex justify-between gap-10">
          <div className="">
            <Dropdown
              title="Category"
              options={["on_the_air", "top_rated", "Popular", "airing_today"]}
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
        dataLength={tv.length}
        next={getTv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
