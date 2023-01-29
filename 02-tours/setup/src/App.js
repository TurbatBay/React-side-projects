import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Tour from "./Tour";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function removeButton(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const getTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("using useEffect");
    getTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={getTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours key={tours.id} tours={tours} removeButton={removeButton} />
    </main>
  );
}
export default App;
