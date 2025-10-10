import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) {
      navigate("/"); // Back to home if not already there - Clears search
    } else {
      navigate(`/?search=${encodeURIComponent(searchInput)}`);
    }
    setSearchInput("");
  };
  return (
    <nav className="flex fixed top-0 left-0 w-full justify-between items-center h-20 px-5 bg-sky-400 dark:bg-sky-600 gap-3 sm:gap-4 md:gap-8 z-10">
      <Link
        to="/"
        className="text-xl md:text-3xl text-nowrap hover:no-underline"
      >
        <h1 className="text-zinc-900 dark:text-zinc-200">Book Finder</h1>
      </Link>
      <article
        id="search-bar"
        className="flex justify-between items-center bg-zinc-300 rounded-2xl px-2 sm:gap-2 md:gap-5 lg:gap-10 py-2.5 border-1 border-zinc-700 w-full"
      >
        <img src="/search.svg" alt="" className="hidden sm:block" />
        <form onSubmit={handleSearch} className="flex gap-2 w-full">
          <input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for books..."
            className="text-zinc-900 focus:outline-0 caret-indigo-700  w-full"
          />
          <button
            type="submit"
            className="text-zinc-900 rounded px-2 py-1 hover:bg-zinc-400 hidden md:block"
          >
            Search
          </button>
        </form>
      </article>
      <article>
        <Link to="/favorites" className="px-2 text-2xl">
          <p className="hidden md:block dark:text-zinc-200 text-zinc-900 hover:-translate-y-0.5 hover:text-red-500 text-nowrap hover:no-underline">
            ♡ Favorites
          </p>
          <p className="md:hidden dark:text-zinc-200 text-zinc-900 hover:-translate-y-0.5 hover:text-red-500">
            ♡
          </p>
        </Link>
      </article>
    </nav>
  );
}
