import { useEffect, useState } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // If there is a change in favorites, save it to localStorage.
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (bookID) => {
    setFavorites(
      (prev) =>
        prev.includes(bookID)
          ? prev.filter((id) => id !== bookID) // filter out the book if it's in favorites
          : [...prev, bookID] // otherwise, add it
    );
  };

  return { favorites, toggleFavorite };
};
