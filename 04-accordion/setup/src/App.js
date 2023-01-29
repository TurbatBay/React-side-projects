import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  // function toggle(id) {

  //   const filteredText = questions.filter(() => questions.id !== id);
  //   return filteredText;
  // }
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion
                key={question.id}
                title={question.title}
                id={question.id}
                info={question.info}
                // toggle={toggle}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
