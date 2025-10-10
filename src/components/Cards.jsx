export default function Cards({ book, openDetails }) {
  const { title, authors, formats, id } = book;

  return (
    <>
      <div className="book-card" onClick={() => openDetails(id)}>
        <img src={formats["image/jpeg"]} alt="" />
        <h3 className="text-lg">{title}</h3>
        <p className="italic">by {authors[0]?.name}</p>
        <div className="favorite">
          <button className="text-3xl">♡</button>
        </div>
      </div>
    </>
  );
}
