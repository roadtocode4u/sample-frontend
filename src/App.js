import './App.css';

import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [foodData, setFoodData] = useState({});

  useEffect(() => {

    axios.get('http://localhost:5000/food/random').then(res => {
      console.log(res.data);
      setFoodData(res.data);
    })

  }, []); 

  

  return (
    <div>
      <h1>Random Food Item</h1>
      <div>
        <h2>Name: {foodData.name}</h2>
        <h3>Price: {foodData.price}</h3>
        <p>Description: {foodData.description}</p>
        <img src={foodData.image} alt="food" />
      </div>
    </div>
  );
}

export default App;
