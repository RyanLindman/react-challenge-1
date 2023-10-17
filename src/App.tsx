import "./App.css";
import MUICard from "./components/MUICard";
import MUICardBack from "./components/MUICardBack";

import { useState } from "react";

function App() {
  const [] = useState(0);
  const [showBackSide, setShowBackSide] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <>
      {showBackSide ? (
        <MUICardBack selectedRating={selectedRating} />
      ) : (
        <MUICard
          setShowBackSide={setShowBackSide}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
      )}
    </>
  );
}

export default App;
