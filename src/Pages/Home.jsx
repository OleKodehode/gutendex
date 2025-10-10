import { useEffect, useState } from "react";

import {
  getBooks,
  getSearchBooks,
  getNextBooks,
  getPrevBooks,
} from "../services/gutendex";

import Details from "../components/Details";
import Categories from "../components/Categories";
import { categoriesArray } from "../utils/categoriesArray";
import { useFavorites } from "../hooks/useFavorites";
import { useDetails } from "../hooks/useDetails";
import BookList from "../components/BookList";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); //default should be All
  const [totalBooks, setTotalBooks] = useState(0); // set to count from the API.
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const { selectedBook, isDetailsOpen, openDetails, closeDetails } =
    useDetails(books);

  const itemsPerPage = 32; // Gutendex should provide 32 books per page
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = startIndex + books.length - 1;

  useEffect(() => {
    const query = searchParams.get("search") || "";
    setCurrentPage(1);
    setLoading(true);
    setSelectedCategory("All");

    if (query) {
      getSearchBooks(query)
        .then((data) => {
          setBooks(data.results);
          setTotalBooks(data.count);
          setNextUrl(data.next);
          setPrevUrl(data.previous);
        })
        .catch((err) => console.error("Search Failed:", err))
        .finally(() => setLoading(false));
    } else {
      getBooks(
        selectedCategory === "All" ? null : selectedCategory.toLowerCase()
      )
        .then((data) => {
          setBooks(data.results);
          setTotalBooks(data.count);
          setNextUrl(data.next);
          setPrevUrl(data.previous);
        })
        .catch((err) => console.error("Fetch Failed:", err))
        .finally(() => setLoading(false));
    }
  }, [selectedCategory, searchParams]);

  const handleNext = () => {
    if (nextUrl) {
      setCurrentPage((prev) => prev + 1);
      setLoading(true);
      getNextBooks(nextUrl)
        .then((data) => {
          setBooks(data.results);
          setNextUrl(data.next);
          setPrevUrl(data.previous);
        })
        .catch((err) => console.error("Next page failed to load:", err))
        .finally(() => setLoading(false));
    }
  };

  const handlePrev = () => {
    if (prevUrl) {
      setCurrentPage((prev) => prev - 1);
      setLoading(true);
      getPrevBooks(prevUrl)
        .then((data) => {
          setBooks(data.results);
          setNextUrl(data.next);
          setPrevUrl(data.previous);
        })
        .catch((err) => console.error("Previous page failed to load:", err))
        .finally(() => setLoading(false));
    }
  };

  return (
    <>
      <Categories
        items={["All", ...categoriesArray]}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => {
          setSelectedCategory(category);
          setSearchParams({});
        }}
      />
      <main>
        {loading ? (
          <p className="text-center text-2xl animate-pulse">Loading Books...</p>
        ) : (
          <>
            <BookList
              books={books}
              openDetails={openDetails}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
            <section className="flex gap-5 items-center justify-center mt-5">
              {prevUrl && (
                <button className="nav-btn" onClick={handlePrev}>
                  Previous
                </button>
              )}
              {nextUrl && (
                <button className="nav-btn" onClick={handleNext}>
                  Next
                </button>
              )}
            </section>
            {books.length === 0 ? (
              <h2 className="text-center text-3xl">
                Sorry, we couldn't find any books
              </h2>
            ) : (
              <p className="text-lg text-center mt-5">
                Showing {startIndex} to {endIndex} out of {totalBooks} books
              </p>
            )}
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
          </>
        )}
      </main>
    </>
  );
}
