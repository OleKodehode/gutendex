import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { getBooks, getSpecificBooks } from "../services/gutendex";
import sample from "../../sample.json";

export default function Home() {
  const { results, next, previous, count } = sample;
  const [books, setBooks] = useState(results);

  // useEffect(() => {
  //   getBooks()
  //     .then((data) => setBooks(data.results))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <main>
      <section className="books-container">
        {books.map((book) => {
          return <Cards key={book.id} book={book} />;
        })}
      </section>
      <section className="flex gap-5 items-center justify-center mt-5">
        {!previous && <button className="nav-btn">Previous</button>}
        {!next && <button className="nav-btn">Next</button>}
      </section>
      <p className="text-lg text-center mt-5">Fetched {count} books</p>
    </main>
  );
}
