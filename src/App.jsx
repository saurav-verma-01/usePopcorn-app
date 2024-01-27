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
import SelectedMovie from "./components/MainComponents/SelectedMovie";
import { API_KEY } from "./utils/constants";
// const OMDB_API = `http://www.omdbapi.com/?apikey=[yourkey]&`;

// const term = "india";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedID, setSelectedID] = useState(null);

  const handleMovieSelect = (id) => {
    setSelectedID((prev) => (id === prev ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedID(null);
  };

  const handleWatched = (movie) => {
    setWatched((prev) => [...prev, movie]);
  };

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    const controller = new AbortController();

    const getMoviesData = async () => {
      if (query.length < 3) {
        setError(false);
        setLoading(false);
        setMovies([]);
        return;
      }

      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal }
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
        // console.error(err.message);
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getMoviesData();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {loading && <Loader />}
          {!loading && !error && (
            <MovieList movies={movies} onSelectMovie={handleMovieSelect} />
          )}
          {error && <ErrorMsg msg={error} />}
        </Box>
        <Box>
          {selectedID ? (
            <SelectedMovie
              selectedID={selectedID}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
