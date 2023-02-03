import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        {readMore ? (
          <p>
            {info.substring(0, 200)}
            <button onClick={() => setReadMore(!readMore)}>readmore</button>
          </p>
        ) : (
          <p>
            {info}
            <button onClick={() => setReadMore(!readMore)}>less</button>
          </p>
        )}

        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
