import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites.js";
import Details from "../components/Details.jsx";
import BookList from "../components/BookList";
import { useDetails } from "../hooks/useDetails.js";
import { getSpecificBooks } from "../services/gutendex";

export default function Favorites() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const { selectedBook, isDetailsOpen, closeDetails, openDetails } =
    useDetails(books);

  // initial fetch of favorites
  useEffect(() => {
    if (favorites.length === 0) {
      setBooks([]);
      return;
    }
    setLoading(true);
    getSpecificBooks(favorites)
      .then((data) => setBooks(data.results))
      .catch((err) => console.error("Failed to fetch favorites:", err))
      .finally(() => setLoading(false));
  }, []); // fetch only once - Allow the user to re-add a favorite to their list if they miss-clicked or change their mind before leaving favorites

  if (loading) {
    return (
      <main>
        <h2 className="text-center text-3xl -mt-20 mb-5">Favorite Books</h2>
        <p className="text-center animate-pulse text-lg">
          Loading favorite books...
        </p>
      </main>
    );
  }

  // Filter books to show favorites - use /books?ids=<favorites> afterwards.
  if (books.length === 0) {
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
      <h2 className="text-center text-3xl -mt-20 mb-5">Favorite Books</h2>
      <main className="w-full">
        <BookList
          books={books}
          openDetails={openDetails}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        <Details
          book={selectedBook}
          isOpen={isDetailsOpen}
          closeDetails={closeDetails}
          isFavorite={
            selectedBook ? favorites.includes(String(selectedBook.id)) : false
          }
          onToggleFavorite={() =>
            selectedBook && toggleFavorite(selectedBook.id)
          }
        />
      </main>
    </>
  );
}
