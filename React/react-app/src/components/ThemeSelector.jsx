import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="theme-selector pointer btn border ms-1">
      <i
        className={`bi bi-moon-stars${
          theme === "dark" ? " text-white" : " -fill"
        }`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      ></i>
    </div>
  );
}
