import { useEffect, useState } from "react"
import { bookService } from "../services/book.service"
import { StarRating } from "./start-rating"

export function BookDetails({ book, bookSelectToggle, isChecked , onUpdateBookRating, bookRating }) {
  // function getStars() {
  //   let stars = ''
  //   for (let i = 0; i < Math.round(book.rating); i++) {
  //     stars += '<SlStar className="star"/>'
  //   }
  //   return stars
  // }

  // useEffect(()=>{
  //   setRating(parseInt(rating) || 0)
  // },[rating])



  return (
    <div className="book-details-container">
      <span className="book-details-header">
        <h1>{book.title}</h1>
        <input type="checkbox" checked={isChecked} onChange={(ev) => bookSelectToggle(ev, book)} />
      </span>
      <hr />
      <h2>{book.author}</h2>
      <h4 className="book-desc">{book.description}</h4>
      {/* <h5>Rating:<span dangerouslySetInnerHTML={{__html: {getStars}}}></span></h5> */}
      {/* <h5>Rating:     <SlStar className="star"/><SlStar className="star"/><SlStar className="star"/><SlStar className="star"/><SlStar className="star"/></h5> */}
      <div className="rating"><h5>Rating:</h5>  <StarRating book={book} onUpdateBookRating={onUpdateBookRating} /></div>
      <h5>Price: $ {book.price}</h5>
    </div>
  )
}
