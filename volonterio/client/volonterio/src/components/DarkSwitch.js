import React, { useState, useEffect } from "react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");


  useEffect(() => setMounted(true), []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="text-gray-300 rounded-full outline-none focus:outline-none">
          <span className="sr-only">Світлий режим</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="text-gray-500 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20">
          <span className="sr-only">Темний режим</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;



