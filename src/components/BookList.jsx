import Cards from "../components/Cards";

export default function BookList({
  books,
  openDetails,
  toggleFavorite,
  favorites,
}) {
  return (
    <section className="books-container">
      {books.map((book) => (
        <Cards
          key={book.id}
          book={book}
          openDetails={openDetails}
          isFavorite={favorites.includes(book.id)}
          onToggleFavorite={() => toggleFavorite(book.id)}
        />
      ))}
    </section>
  );
}
