import { Link } from "react-router-dom"

const Sidenav = () => {
  return (
    <>
        <div className="w-[20%] h-full border-r-2 border-zinc-200  p-3">
        <div className="text-2xl ">
        <i className="text-[#6556CD] ri-movie-line mr-2"></i>
        <span className="text-zinc-400">TMDB.</span>
        </div>
        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="mt-10 mb-5 text-xl font-semibold">New Feeds</h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-fire-line"></i>Trending</Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-edge-new-line"></i>Popular</Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-movie-line"></i>Movies</Link>
        <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-tv-line"></i>Tv Shows</Link>
        <Link to="/people" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-group-line"></i>People</Link>


        </nav>
        <hr className="border border-zinc-400" />
        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="mt-10 mb-5 text-xl font-semibold">Website Information</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-fire-line"></i>About</Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-edge-new-line"></i>Contact</Link>
       


        </nav>



        </div>
    </>
  )
}

export default Sidenav