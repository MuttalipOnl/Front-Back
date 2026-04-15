import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Movie from "../components/Movie";
import { movieList } from "../data";
import MovieList from "../components/MovieList";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "f79bcaf3fa4051108c1e4d7a5be47c53";
const page = 1;
const language = "tr-TR";

const SimilarMovies = ({ moveId }) => {
  const [movies, setMovies] = useState(movieList);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/${moveId}/similar?api_key=${api_key}&page=${page}&language=${language}`
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
  }, [moveId]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return <MovieList movies={movies} title="Benzer Filmler" />;
};

export default SimilarMovies;
