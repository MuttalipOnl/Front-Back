import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { movieList } from "../data";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router";
import Pagination from "../components/Pagination";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "f79bcaf3fa4051108c1e4d7a5be47c53";
const page = 1;
const language = "tr-TR";

const SearchResults = () => {
  const [movies, setMovies] = useState(movieList);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(0);

  const query = searchParams.get("q");
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}/search/movie?api_key=${api_key}&query=${query}&page=${page}&language=${language}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // console.log(data);
        if (data.results) {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }
    getMovies();
  }, [searchParams]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <>
      <MovieList movies={movies} title={`Arama Sonuçarı: ${query}`} />
      <Pagination
        page={page}
        setSearchParams={setSearchParams}
        query={query}
        totalPages={totalPages}
      />
    </>
  );
};

export default SearchResults;
