import { useEffect, useState } from "react";

// import { getBooks, getSpecificBooks } from "../services/gutendex";
import sample from "../../sample.json";
import Details from "../components/Details";
import Categories from "../components/Categories";
import { categoriesArray } from "../utils/categoriesArray";
import { useFavorites } from "../hooks/useFavorites";
import { useDetails } from "../hooks/useDetails";
import BookList from "../components/BookList";

export default function Home() {
  const { results, next, previous } = sample;
  const [books, setBooks] = useState(results);
  const [selectedCategory, setSelectedCategory] = useState("All"); //default should be All
  const { favorites, toggleFavorite } = useFavorites();
  const { selectedBook, isDetailsOpen, openDetails, closeDetails } =
    useDetails(books);

  // useEffect(() => {
  //   getBooks()
  //     .then((data) => setBooks(data.results))
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setBooks(results);
    } else {
      const filtered = results.filter((book) =>
        book.subjects?.some((topic) =>
          topic.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );
      setBooks(filtered);
    }
  }, [selectedCategory, results]);

  return (
    <>
      <Categories
        items={["All", ...categoriesArray]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <main>
        <BookList
          books={books}
          openDetails={openDetails}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        <section className="flex gap-5 items-center justify-center mt-5">
          {previous && <button className="nav-btn">Previous</button>}
          {next && <button className="nav-btn">Next</button>}
        </section>
        {books.length === 0 && (
          <h2 className="text-4xl mb-20">Couldn't fetch any books</h2>
        )}
        <p className="text-lg text-center mt-5">Fetched {books.length} books</p>
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
