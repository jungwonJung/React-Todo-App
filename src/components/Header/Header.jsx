import React from "react";
import style from "./Header.module.css";
import { useDarkMode } from "../../context/DakeModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={style.header}>
      <button onClick={toggleDarkMode} className={style.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className={style.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${style.filter} ${
                filter === value && style.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
