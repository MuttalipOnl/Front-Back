import { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Movie({ movieObj }) {
  const { theme } = useContext(ThemeContext);
  const textcolor = theme === "dark" ? "light" : "dark";
  return (
    <div className="col ">
      <div
        className={`card movie position-relative h-100 transparent text-${textcolor} border-${textcolor}`}
        style={{ cursor: "pointer" }}
      >
        <Link to={`/movies/${movieObj.id}`}>
          <img
            src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
            alt=""
            className="card-img-top"
          />
        </Link>
        <div className="card-body ">
          <h2 className="h6 card-title">{movieObj.title}</h2>
          <p className="card-text mb-0">{movieObj.description}</p>
          {/* {movieObj.is_new && (
              <span className="position-absolute top-0 end-0 badge bg-danger m-1">
                New
              </span>
            )} */}
        </div>
      </div>
    </div>
  );
}
