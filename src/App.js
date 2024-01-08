import Tours from "./components/Tours";
import Data from "./Data";
import { useState } from "react";

function App() {
  const [tours, setTours] = useState(Data);

  function removeCard(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-refresh" onClick={() => setTours(Data)}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeCard={removeCard}></Tours>
    </div>
  );
}
export default App;
