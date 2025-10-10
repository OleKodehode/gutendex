export default function Cards({
  book,
  openDetails,
  isFavorite,
  onToggleFavorite,
}) {
  const { title, authors, formats, id } = book;

  return (
    <>
      <div className="book-card" onClick={() => openDetails(id)}>
        <img src={formats["image/jpeg"]} alt={`Book cover of ${title}`} />
        <h3 className="text-lg">{title}</h3>
        <p className="italic">by {authors[0]?.name}</p>
        <div
          className={`favorite ${isFavorite ? "favorited" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
        >
          <button className="text-2xl">{isFavorite ? "❤️" : "♡"}</button>
        </div>
      </div>
    </>
  );
}
