import React, { useState } from "react";

function NewPlantForm( {handleAddNewPlant} ) {
  const [formData, setFormData] = useState({
      name: "",
      image: "",
      price: "",
    })
    
    function handlePlantChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    }
    
    function handleSubmit(event) {
      event.preventDefault();

      const newPlant = {
        name: formData.name,
        image: formData.image,
        price: formData.price
      }

      fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant)
      })
      .then((response) => response.json())
      .then(data => {
        handleAddNewPlant(data)
        setFormData({
          name:"",
          image:"",
          price:""
        })
      })
  }

  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handlePlantChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handlePlantChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handlePlantChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
