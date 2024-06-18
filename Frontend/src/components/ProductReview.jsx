import React, { useState } from 'react';
import '../styles/productReview.css'

export const ProductReview = () => {
  const [nameInput, setNameInput] = useState("");
  const [textArea, setTextArea] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [isClicked, setIscliked] = useState(false)


  const handleUserName = (e) => {
    setNameInput(e.target.value);
  }

  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  }

  const handleRating = (index) => {
    setRating(index);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: nameInput,
      review: textArea,
      rating: rating,
    };
    setReviews([...reviews, newReview]);

    setNameInput("");
    setTextArea("");
    setRating(0);
  }

  return (
    <div>
      <h1 className='Review-header'>Review</h1>
      <form className='reviewForm' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          value={nameInput}
          onChange={handleUserName}
          className='user-name-input'
        />
        <textarea
          placeholder="Your Feedback.."
          value={textArea}
          onChange={handleTextArea}
          className='feedback-text'
        ></textarea>
        <div className='rating=star'>
          {[...Array(5)].map((_, ind) => (
            <span key={ind} onClick={() => handleRating(ind + 1)}>
              <i className="fa-regular fa-star" style={{ color: rating > ind ? "black" : "gray" }}></i>
            </span>
          ))}
        </div>
        <button type="submit" className='review-button'>Submit</button>
      </form>
      <div className="reviews-container">
        <div className='review-border'></div>
        {reviews.map((rev, index) => (
          <div className='input-container'  key={index}>
            <div>
            <h3 className='reviewusername'>{rev.name}</h3>
            </div>
            <div>
            <div className="review">
            <div>
              {[...Array(5)].map((_, ind) => (
                <span key={ind}>
                  <i
                    className="fa-regular fa-star"
                    style={{ color: rev.rating > ind ? "black" : "gray" }}
                  ></i>
                </span>
              ))}
            </div>
            <p>{rev.review}</p>
             </div>
            </div>
            <div>
              <p className='review-helpful'>Helpful?</p>
              <p className='like-and-dislike'>
                <span><i className={`fa-regular fa-thumbs-up ${isClicked ? 'red' : ''}`}></i></span>
                <span><i class="fa-regular fa-thumbs-down"></i></span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
