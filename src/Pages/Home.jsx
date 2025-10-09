import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { getBooks, getSpecificBooks } from "../services/gutendex";
import sample from "../../sample.json";

export default function Home() {
  const { results } = sample;
  const [books, setBooks] = useState(results);

  // useEffect(() => {
  //   getBooks()
  //     .then((data) => setBooks(data.results))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <main>
      {books.map((book) => {
        return <Cards key={book.id} book={book} />;
      })}
    </main>
  );
}
