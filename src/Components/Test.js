import React from 'react'
import { useState } from 'react';

export default function Test() {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();

    // 👇️ value of input field
    console.log('handleClick 👉️', message);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        autoComplete="off"
      />

      <h2>Message: {message}</h2>

      <button onClick={handleClick}>Click</button>
    </div>
  );
}




