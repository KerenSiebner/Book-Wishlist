import { bookService } from "../services/book.service";

export function WishList({ selectedBooks }) {
  return (
    <div className="wish-list-container">
      {selectedBooks && (
        <ul>
          {selectedBooks.map((selectedBook) => (
            <li>
              <p>{selectedBook.title}</p>
              <button>X</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
