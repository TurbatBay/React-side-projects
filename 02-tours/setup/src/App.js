import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  function removeTour(id) {
    const newTours = tours.filter((newTour) => newTour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const FETCHED_URL = await fetch(url);
      const FETCHED_DATA = await FETCHED_URL.json();
      setTours(FETCHED_DATA);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  //RETURN
  if (isLoading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    );
  }
}

export default App;
