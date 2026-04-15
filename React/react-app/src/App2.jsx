import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Logo from "./components/Logo";
import SearchForm from "./components/searchForm";
import WatchListButton from "./components/WatchListButton";

import Loading from "./components/Loading";
import Error from "./components/Error";

import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";
import MovieDetails from "./components/MovieDetails";

import { movieList } from "./data";
import { useEffect, useState } from "react";

const api_key = "f79bcaf3fa4051108c1e4d7a5be47c53";
const page = 1;
const query = "batman";
const language = "tr-TR";

export default function App2() {
  const [movies, setMovies] = useState(movieList);
  const [watchListMovies, setwatchListMovies] = useState([]);
  const [isWatchListOpen, setisWatchListOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setsearchQuery] = useState(query);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery}&page=${page}&language=${language}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // console.log(data);
        if (data.results) {
          setMovies(data.results);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }
    getMovies();
  }, [searchQuery]);

  function handleAddtoWatchList(movie) {
    const isAddedToList = watchListMovies.map((i) => i.id).includes(movie.id);

    if (!isAddedToList) {
      setwatchListMovies((movies) => [...movies, movie]);
    }
  }

  function handleRemoveFromWatchList(movie) {
    setwatchListMovies((movies) => movies.filter((i) => i.id !== movie.id));
  }

  function handleSelectedMovie(movie) {
    setSelectedMovie(movie);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header>
        <Logo />
        <SearchForm searchQuery={searchQuery} setsearchQuery={setsearchQuery} />
        <WatchListButton
          movies={watchListMovies}
          onSetisWatchListOpen={setisWatchListOpen}
        />
      </Header>
      <Main>
        {selectedMovie && (
          <MovieDetails
            movieObj={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
        <WatchList
          movies={watchListMovies}
          isWatchListOpen={isWatchListOpen}
          onRemoveFromWatchList={handleRemoveFromWatchList}
        />
        {loading && <Loading />}
        {!loading && !error && (
          <MovieList
            movies={movies}
            onAddToList={handleAddtoWatchList}
            onSelectedMovie={handleSelectedMovie}
          />
        )}
        {error && <Error message={error} />}
      </Main>
      <Footer />
    </>
  );
}
