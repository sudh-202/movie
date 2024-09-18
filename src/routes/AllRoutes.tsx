import MovieList from "@/components/MovieList"
import Player from "@/components/Player"
import Player2 from "@/components/Player2"
import SearchList from "@/components/SearchList"
import Trending from "@/components/Trending/Trending"
import TvShowList from "@/components/TvShowList"
import { Route, Routes } from "react-router"

const AllRoutes = () => {
  return (
   <Routes>
    <Route path ="/" element= {<Trending />}/>
    <Route path ="/movies" element= {<MovieList/>} />
    <Route path ="/tvshows" element= {<TvShowList/>} />
    <Route path ="/search/:searchName" element={<SearchList/>}/>
    <Route path="/player/:playerId" element={<Player />} />
    <Route path="/player2/:player2Id" element={<Player2 />} />
   </Routes>
  )
}

export default AllRoutes