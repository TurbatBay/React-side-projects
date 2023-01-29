import React, { useState } from "react";

const Tour = ({ id, name, price, info, image, removeButton }) => {
  const [readMore, setReadMore] = useState(true);
  function toggleReadMore() {
    setReadMore((readMore) => !readMore);
  }
  return (
    <article className="single-tour">
      <img src={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        {readMore ? (
          <p>
            {info.substring(0, 200)}...{" "}
            <button onClick={toggleReadMore}>read more</button>
          </p>
        ) : (
          <p>
            {info}
            <button onClick={toggleReadMore}>show less</button>
          </p>
        )}

        <button className="delete-btn" onClick={() => removeButton(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
