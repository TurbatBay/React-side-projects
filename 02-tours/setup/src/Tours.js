import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeButton }) => {
  return (
    <section>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeButton={removeButton} />;
      })}
    </section>
  );
};

export default Tours;
