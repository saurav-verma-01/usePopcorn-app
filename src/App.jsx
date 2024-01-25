import { useState } from "react";
import {
  Box,
  WatchedSummary,
  WatchedMoviesList,
  MovieList,
} from "./components/MainComponents";
import { tempMovieData, tempWatchedData } from "./utils/constants";
import { Main, NavBar } from "./components";
import { Search, NumResults } from "./components/NavBarComponents";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
