import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { getBooks, getSpecificBooks } from "../services/gutendex";
import sample from "../../sample.json";
import Details from "./Details";

export default function Home() {
  const { results, next, previous, count } = sample;
  const [books, setBooks] = useState(results);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // useEffect(() => {
  //   getBooks()
  //     .then((data) => setBooks(data.results))
  //     .catch((err) => console.error(err));
  // }, []);

  const openDetails = (bookID) => {
    const book = books.find((book) => book.id === bookID);
    if (book) {
      setSelectedBook(book);
      setIsDetailsOpen(true);
    }
  };

  const closeDetails = () => {
    setIsDetailsOpen(false);
    setSelectedBook(null);
  };

  return (
    <main>
      <section className="books-container">
        {books.map((book) => (
          <Cards key={book.id} book={book} openDetails={openDetails} />
        ))}
      </section>
      <section className="flex gap-5 items-center justify-center mt-5">
        {!previous && <button className="nav-btn">Previous</button>}
        {!next && <button className="nav-btn">Next</button>}
      </section>
      <p className="text-lg text-center mt-5">Fetched {count} books</p>
      <Details
        book={selectedBook}
        isOpen={isDetailsOpen}
        closeDetails={closeDetails}
      />
    </main>
  );
}
