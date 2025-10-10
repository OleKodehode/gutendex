import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";
import sample from "../../sample.json";
import { useFavorites } from "../hooks/useFavorites.js";

export default function Favorites() {
  const loadedFavorites = useLoaderData();
  const [books, setBooks] = useState(sample.results);
  const { favorites, toggleFavorite } = useFavorites();

  // Filter books to show favorites - use /books?ids=<favorites> afterwards.
  const favoriteBooks = books.filter((book) => favorites.includes(book.id));

  if (favoriteBooks.length === 0) {
    return (
      <main>
        <h2>Favorites</h2>
        <p>No favorites yet.</p>
        <Link to="/" className="text-sky-600 underline">
          Browse books
        </Link>
      </main>
    );
  }

  return (
    <>
      <main>
        <h2>Favorites</h2>
        <section className="books-container">
          {favoriteBooks.map((book) => (
            <Cards
              key={book.id}
              book={book}
              isFavorite={true}
              onToggleFavorite={() => toggleFavorite(book.id)}
            />
          ))}
        </section>
      </main>
    </>
  );
}
