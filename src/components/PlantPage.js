import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then(data => setPlants(data))
  }, [])


  const plantsToDisplay = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
   });

  
  const handleAddNewPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm handleAddNewPlant={handleAddNewPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
