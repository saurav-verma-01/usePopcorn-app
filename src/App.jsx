import { useEffect, useState } from "react";
import {
  Box,
  WatchedSummary,
  WatchedMoviesList,
  MovieList,
} from "./components/MainComponents";
// import { tempMovieData, tempWatchedData } from "./utils/constants";
import { Main, NavBar } from "./components";
import { Search, NumResults } from "./components/NavBarComponents";
import Loader from "./components/MainComponents/Loader";
import ErrorMsg from "./components/MainComponents/ErrorMsg";
// const OMDB_API = `http://www.omdbapi.com/?apikey=[yourkey]&`;
const API_KEY = "d86a0de9";
const term = "frtyu";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getMoviesData();
  }, []);

  const getMoviesData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${term}`
      );

      // console.log(res);
      if (!res.ok)
        throw new Error("Something Went Wrong, Unable to Fetch Movies");

      const data = await res.json();

      if (data.Response === "False")
        throw new Error("Movie Not Found with the given query");
      // console.log(data);
      setMovies(data.Search);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {loading && <Loader />}
          {!loading && !error && <MovieList movies={movies} />}
          {error && <ErrorMsg msg={error} />}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
