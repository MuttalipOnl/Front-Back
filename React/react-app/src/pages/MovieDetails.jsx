import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import Error from "../components/Error";
import SimilarMovies from "./SimilarMovies";
import Actors from "../components/Actors";
import { UserContext } from "../contexts/UserContext";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "f79bcaf3fa4051108c1e4d7a5be47c53";
const page = 1;
const language = "tr-TR";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addtoWatchList, watchList, removeFromWatchList } =
    useContext(UserContext);

  const isAdded = watchList?.find((i) => i.id == movie?.id);

  console.log(id);
  console.log(movie);
  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/${id}?api_key=${api_key}&language=${language}&append_to_response=credits`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMovie(data);
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
      window.scrollTo(0, 0);
    }
    getMovie();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <>
      <div
        className="tex-white position-relative "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="img-overlay ">
          <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="row">
              <div className="col-md-3 d-none d-lg-block">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie.poster_path
                  }
                  alt={movie.title}
                  className="img-fluid rounded shadow img-thumbnail"
                />
              </div>
              <div className="col-md-9 text-white">
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <h1>{movie.title}</h1>
                  <span className="badge bg-warning">
                    {Math.round(movie.vote_average * 10)}%
                  </span>
                  <span className="badge bg-danger fs-6 ms-2 pointer">
                    {isAdded ? (
                      <i
                        className="bi bi-heart-fill"
                        onClick={() => removeFromWatchList(movie)}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-heart"
                        onClick={() => addtoWatchList(movie)}
                      ></i>
                    )}
                  </span>
                </div>

                <p>
                  {movie.release_date}
                  <i className="bi bi-dot text-white"></i>

                  <span className="texet-white">
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </span>
                  <i className="bi bi-dot text-white"></i>
                  <span className="texet-white"> {movie.runtime} dk</span>
                </p>
                {movie.credits && (
                  <p className="lead">
                    <strong>Özet: </strong>
                    {movie.overview}
                  </p>
                )}
                <div className="d-flex flex-column flex-md-row align-items-start justify-content-between">
                  <p className="d-flex flex-column text-center">
                    <span>Yapımcı: </span>
                    <span>{movie.production_companies[0]?.name}</span>
                  </p>
                  <p className="d-flex flex-column text-center">
                    <span>Yönetmen: </span>
                    <span>{movie.credits.crew[0]?.name}</span>
                  </p>
                  <p className="d-flex flex-column text-center">
                    <span>Senarist: </span>
                    <span> {movie.credits.crew[1]?.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Actors actors={movie.credits.cast} />

      <SimilarMovies moveId={id} />
    </>
  );
};

export default MovieDetails;
