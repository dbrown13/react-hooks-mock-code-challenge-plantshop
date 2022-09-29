import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants} ) {
  const cards = plants.map((plant) => (
    <PlantCard key={plant.id} plants={plant}/>
  ))
  return (
    <ul className="cards">{cards}</ul>
  );
}

export default PlantList;
