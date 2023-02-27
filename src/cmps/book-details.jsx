import { bookService } from "../services/book.service";

export function BookDetails({ book, bookSelectToggle, isChecked }) {

  return (
    <div className="book-details-container">
      <span className="book-details-header">
        <h1>{book.title}</h1>
        <input type="checkbox" checked={isChecked} onChange={(ev)=>bookSelectToggle(ev,book)} />
      </span>
      <hr />
      <h2>{book.author}</h2>
      <h4 className="book-desc">{book.description}</h4>
      <h5>Rating: {Math.round(book.rating)}</h5>
      <h5>Price: $ {book.price}</h5>
    </div>
  );
}
