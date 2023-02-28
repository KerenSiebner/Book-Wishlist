import { SlArrowLeft } from "react-icons/sl"
import { SlArrowRight } from "react-icons/sl"
import { useEffect, useState } from "react"
import { bookService } from "../services/book.service"
import { BookDetails } from "../cmps/book-details"
import { WishList } from "../cmps/wish-list"

export function BookIndex() {
  const [idx, setIdx] = useState(0)
  const [book, setBook] = useState(bookService.getBookByIdx(0))
  const [isChecked, setIsChecked] = useState("")
  const [selectedBooks, setSelectedBooks] = useState(
    bookService.getSelectedBooks()
  )

  function bookSelectToggle(ev, selectedBook) {
    if (ev.target.checked) {
      bookService.addBookToWishList(selectedBook)
      setIsChecked("checked")
    } else {
      bookService.removeBookFromWishList(selectedBook)
      setIsChecked("")
    }
  }

  function removeBookFromWishlist(bookToRemove) {
    const updatedSelectedBooks =
      bookService.removeBookFromWishList(bookToRemove)
    console.log("updatedSelectedBooks", updatedSelectedBooks)
    setSelectedBooks(updatedSelectedBooks)
    if (bookToRemove === book) setIsChecked("")
  }

  function prevBook() {
    if (idx === 0) return
    const index = idx - 1
    const currBook = bookService.getBookByIdx(idx - 1)
    setCurrBookDisplay(index, currBook)
  }

  function nextBook() {
    if (idx === bookService.getBooksAmount() - 1) return
    const currBook = bookService.getBookByIdx(idx + 1)
    const index = idx + 1
    setCurrBookDisplay(index, currBook)
  }

  function setCurrBookDisplay(index, currBook) {
    setIdx(index)
    setBook(currBook)
    if (bookService.getSelectedBookIdx(currBook) === -1) setIsChecked("")
    else setIsChecked("checked")
  }

  return (
    <div className="book-index-container">
      <button onClick={prevBook} className="arrow-btn">
        {" "}
        <SlArrowLeft className="nav-arrow" />{" "}
      </button>
      <BookDetails
        book={book}
        bookSelectToggle={bookSelectToggle}
        isChecked={isChecked}
      />
      <button onClick={nextBook} className="arrow-btn">
        {" "}
        <SlArrowRight className="nav-arrow" />{" "}
      </button>
      <WishList
        selectedBooks={selectedBooks}
        removeBookFromWishlist={removeBookFromWishlist}
      />
    </div>
  )
}
