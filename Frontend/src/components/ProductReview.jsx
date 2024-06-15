import React, { useState } from 'react'

export const ProductReview = () => {
    const[input, setInput] = useState("");

    const handleUserName = (e) => {
        setInput(e.target.value);
    }

    const handleTextArea = () => {
        setInput(e.target.value);
    }

  return (
    <div>
        <input type="text" placeholder='Enter your Name' onChange={handleUserName} />
        <textarea onChange={handleUserName} placeholder='Your Feeedback..'>

        </textarea>
    </div>
  )
}
