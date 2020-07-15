import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import ApodCard from './ApodCard'

const BASE_URL = 'https://api.nasa.gov'
const API_KEY = 'CfPOMjHtK3sV3twOVkKIxxEsq2dro6bLyOcICzVA'

function App() {
  const [cardState, setCardState] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    .then(response => {
      setCardState(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div className="App">
      <ApodCard info={cardState} />
    </div>
  );
}

export default App;