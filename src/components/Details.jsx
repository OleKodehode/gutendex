import { convertLanguageCode } from "../utils/languageMap";

export default function Details({
  book,
  isOpen,
  closeDetails,
  onToggleFavorite,
}) {
  if (!book || !isOpen) return null;

  const { title, authors, formats, download_count, languages, bookshelves } =
    book;

  // Format the languages from language code to written languages (i.e "en" => English).
  // if there is multiple languages then map it out
  const formattedLanguages =
    languages.length > 1
      ? languages.map(
          (language, index) =>
            `${convertLanguageCode(language)}${
              index === languages.length - 1 ? "." : ", "
            }`
        )
      : `${convertLanguageCode(languages[0])}.`;

  const categories = bookshelves.map((entry) =>
    entry.replace("Category: ", "")
  );

  const closeOnBackdropClick = (e) => {
    // For closing the dialog if you click outside the content itself

    if (e.target === e.currentTarget) closeDetails();
  };

  /* 
  details trenger:
  Tittel                                /
  Bilde                                 /
  Forfatter                             /
  Antall Nedlastninger                  /
  Kategori                              /
  Språk                                 /
  Lenke til boka i digitalt format      /
  knapp for å legge til i favoritter    
  */
  return (
    <dialog open={isOpen} onClick={closeOnBackdropClick}>
      <div className="details-container">
        <button
          onClick={closeDetails}
          className="self-end mt-4 bg-slate-500 text-zinc-200 px-4 py-1.5 rounded-xl hover:bg-slate-700 hover:-translate-y-0.5 hover:cursor-pointer"
        >
          X
        </button>
        <h2 className="text-xl font-bold clamp-title">{title}</h2>
        <img src={formats["image/jpeg"]} alt="" />
        <div className="flex flex-col gap-1 md:flex-row md:gap-10">
          <p className="dark:text-zinc-300">
            Author: {authors?.length > 0 ? authors[0].name : "Unknown Author"}
          </p>
          <p>Number of downloads: {download_count}</p>
          {formats["text/html"] && (
            <a href={formats["text/html"]} target="_blank">
              Link to book
            </a>
          )}
        </div>
        <div className="flex flex-col gap-3 italic md:flex-row md:gap-10 md:justify-center">
          {categories.length > 0 && (
            <p className="md:w-2/6">
              {categories.length > 1 ? (
                <span className="block">Categories:</span>
              ) : (
                "Category:"
              )}{" "}
              {categories.join(", ")}
            </p>
          )}
          <p>
            Languages: {formattedLanguages}
            {}
          </p>
        </div>
        <div className="favorite" onClick={onToggleFavorite}>
          <button className="text-3xl">♡</button>
        </div>
      </div>
    </dialog>
  );
}
