import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const textcolor = theme === "dark" ? "light" : "dark";
  return (
    <footer className={`bg-${theme} text-${textcolor} text-center border-top `}>
      <div className="container p-4">
        <section>
          <a
            className={`btn btn-outline-${textcolor} btn-floating m-1`}
            href="#!"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className={`btn btn-outline-${textcolor} btn-floating m-1`}
            href="#!"
            role="button"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            className={`btn btn-outline-${textcolor} btn-floating m-1`}
            href="#!"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </section>
        <div className="text-center p-3">
          © 2026 Copyright:{" "}
          <a href="#!" className={`text-${textcolor}`}>
            MovieApp.com
          </a>
        </div>
      </div>
    </footer>
  );
}
