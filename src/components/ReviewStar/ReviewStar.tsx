import React from "react";

export default function ReviewStar({score}) {
    return (
<div className="star-rating">
    {Array.from({ length: 5 }, (_, index) => (
        <>
      <span
        key={index}
        className={`fa fa-star ${index < score ? 'checked' : ''}`}
      ></span>
      
      </>
    ))
}
<span>({score})</span>
  </div>
  )
}