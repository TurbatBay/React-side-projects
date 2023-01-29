import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({}) => {
  const [index, setIndex] = useState(2);
  const { name, id, job, image, text } = people[index];

  function checkNumber(number) {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  function prevHandler(id) {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }
  function nextHandler(id) {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }
  function randomHandler(id) {
    let randomPerson = Math.floor(Math.random() * people.length);
    if (randomPerson === index) {
      randomPerson = index + 1;
    }
    setIndex(checkNumber(randomPerson));
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4>{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={() => prevHandler(id)}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() => nextHandler(id)}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={() => randomHandler(id)}>
          Surprise me
        </button>
      </article>
    </main>
  );
};

export default Review;
