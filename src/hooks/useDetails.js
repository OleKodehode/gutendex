import { useState } from "react";

export const useDetails = (books) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

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

  return { selectedBook, isDetailsOpen, openDetails, closeDetails };
};
