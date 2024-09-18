//@ts-nocheck

import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom";
import Genres from "./Genres";
import { useContext } from "react";
import { SearchResultContext } from "@/contex/searchResult";
// import { useState } from "react";

const Navbar = () => {
  // const [input, setInput] = useState();
  const navigate = useNavigate();
  const {searchText, setSearchText} = useContext(SearchResultContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setSearchText(e.target.value);
   navigate(`/search/${e.target.value}`);

   if(e.target.value.length === 0){
    navigate(`/movies`)
   }
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
  }

  return (
    <div className="flex justify-between md:px-10 sm:px-5 px-5 items-center gap-3 text-xl my-3">
      <img
        src="./logo.webp"
        alt="logo"
        className="md:h-14 sm:h-9 h-9 opacity-80 cursor-pointer"
        onClick={() => navigate(`/`)}
      />
      <div className="flex gap-3 items-center">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Search"
            className="border-gray-500 rounded-2xl md:w-fit sm:w-[30vw]"
            value ={searchText}
            onChange ={ handleChange }
          />
        </form>
        <div className="md:block hidden ">
            <div  className="flex gap-6  items-center">
               <Genres />
            <Link to = {'/movies'}>
            <div>Movies</div>
            </Link>
            <Link to = {'/tvshows'}>
            <div>TvShows</div>
            </Link>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
