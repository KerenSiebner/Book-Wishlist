import { bookService } from "../services/book.service"

export function WishList({ selectedBooks, removeBookFromWishlist }) {
  function handleClick(selectedBook) {
    removeBookFromWishlist(selectedBook)
  }

  return (
    <div className="wish-list-container">
      {selectedBooks && (
        <ul>
          {selectedBooks.map((selectedBook, idx) => (
            <li key={idx}>
              <p>{selectedBook.title}</p>
              <button onClick={() => handleClick(selectedBook)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
