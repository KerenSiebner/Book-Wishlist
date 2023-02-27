import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useEffect, useState } from "react";
import { bookService } from "../services/book.service";
import { WishList } from "../cmps/wish-list";
import { BookDetails } from "../cmps/book-details";

export function BookIndex() {
  const [idx, setIdx] = useState(0);
  const [book, setBook] = useState(bookService.getBookByIdx(0));
  const [isChecked, setIsChecked] = useState('')
  const [selectedBooks, setSelectedBooks] = useState(bookService.getSelectedBooks())

  function bookSelectToggle(ev,book) {
    if (ev.target.checked) {bookService.addBookToWishList(book);
    setIsChecked("checked")}
    else {
        bookService.removeBookFromWishList(book);
        setIsChecked('')}
  }

  function prevBook() {
    console.log("idx", idx);
    if (idx === 0) return;
    setIdx(idx - 1);
    setBook(bookService.getBookByIdx(idx));
    if (bookService.getSelectedBookIdx(book)===-1) setIsChecked('')
    else setIsChecked("checked")
  }

  function nextBook() {
    console.log("idx", idx);
    if (idx === bookService.getBooksAmount()) return;
    setIdx(idx + 1);
    setBook(bookService.getBookByIdx(idx));
    if (bookService.getSelectedBookIdx(book)===-1) setIsChecked('')
    else setIsChecked("checked")
  }

  return (
    <div className="book-index-container">
      <button onClick={prevBook} className="arrow-btn">
        {" "}
        <SlArrowLeft className="nav-arrow" />{" "}
      </button>
      <BookDetails book={book} bookSelectToggle={bookSelectToggle} isChecked={isChecked} />
      <button onClick={nextBook} className="arrow-btn">
        {" "}
        <SlArrowRight className="nav-arrow" />{" "}
      </button>
      <WishList selectedBooks={selectedBooks}/>
    </div>
  );
}
