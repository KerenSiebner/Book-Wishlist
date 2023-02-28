import { useEffect, useState } from "react"
import { HiStar } from 'react-icons/hi'
import { HiOutlineStar } from 'react-icons/hi'

const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? "⭐️" : "\u2606"}
      {/* {marked ? <HiStar className="star yellow"/> : <HiOutlineStar className="star"/>} */}
    </span>
  )
}

export function StarRating({ book, onUpdateBookRating }) {

  function handleClick(e){
    const updatedRating = e.target.getAttribute("data-star-id") || book.rating
    onUpdateBookRating(updatedRating)
  }

  return (
    <div
      onClick={ handleClick }
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={book.rating >= i + 1}
        />
      ))}
    </div>
  )
}
