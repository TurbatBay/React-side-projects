import React, { useState } from "react";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review
        // randomHandler={randomHandler}
        // nextHandler={nextHandler}
        // prevHandler={prevHandler}
        />
      </section>
    </main>
  );
}

export default App;
