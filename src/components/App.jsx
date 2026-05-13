import React, { useState, useEffect } from "react";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data));
  }, []);

  const addPlant = async (plant) => {
    await fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plant),
    });
    // refresh list
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data));
  };

  const filteredPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>Plantsy <span role="img" className="logo">🌱</span></h1>
      </header>
      <PlantPage 
        plants={filteredPlants} 
        addPlant={addPlant} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
    </div>
  );
}

export default App;



