import axios from "../utilis/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  // console.log(query);

  const getSearch = async () => {
    try {
      // const d = await axios.get(`/search/multi`)   itna api se milega aage ka niche add krna hoga khud se
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center ">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search Anything..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className=" z-[999] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-700 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-300"
          >
            <img
              className="w-[10vh] h-[10vh] rounded mr-5 object-cover shadow-lg "
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : "https://static.vecteezy.com/system/resources/previews/019/787/070/non_2x/no-photos-and-no-phones-forbidden-sign-on-transparent-background-free-png.png"
              }
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
