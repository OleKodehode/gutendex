import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";
import sample from "../../sample.json";
import { useFavorites } from "../hooks/useFavorites.js";
import Details from "../components/Details.jsx";
import BookList from "../components/BookList";
import { useDetails } from "../hooks/useDetails.js";

export default function Favorites() {
  const loadedFavorites = useLoaderData();
  const [books, setBooks] = useState(sample.results);
  const { favorites, toggleFavorite } = useFavorites();
  const { selectedBook, isDetailsOpen, closeDetails, openDetails } =
    useDetails(books);

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
        <BookList
          books={favoriteBooks}
          openDetails={openDetails}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        <Details
          book={selectedBook}
          isOpen={isDetailsOpen}
          closeDetails={closeDetails}
          isFavorite={
            selectedBook ? favorites.includes(selectedBook.id) : false
          }
          onToggleFavorite={() =>
            selectedBook && toggleFavorite(selectedBook.id)
          }
        />
      </main>
    </>
  );
}
