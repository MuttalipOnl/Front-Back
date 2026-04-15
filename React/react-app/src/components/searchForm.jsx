import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function SearchForm() {
  const [searchQuery, setsearchQuery] = useState("");
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const textcolor = theme === "dark" ? "light" : "dark";

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setsearchQuery("");
    }
  }
  return (
    <form className="d-flex mb-2 mb-lg-0" onSubmit={handleSubmit}>
      <input
        type="search"
        className={`form-control me-1 bg-${theme} text-${textcolor} ${
          theme === "dark" ? "dark-placeholder" : ""
        }`}
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setsearchQuery(e.target.value)}
      />
      <button className={`btn btn-${theme} border`} type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}
