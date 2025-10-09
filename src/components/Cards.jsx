export default function Cards({ book }) {
  const { title, authors, formats } = book;

  return (
    <>
      <div className="book-card">
        <img src={formats["image/jpeg"]} alt="" />
        <h3 className="text-lg">{title}</h3>
        <p className="italic">by {authors[0]?.name}</p>
        <div className="border-2 border-zinc-200 w-full text-center rounded-2xl mt-2 py-2">
          <button className="text-3xl">♡</button>
        </div>
      </div>
    </>
  );
}
