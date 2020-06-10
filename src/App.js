import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import { isCompositeComponent } from "react-dom/test-utils";

const BASE_URL = 'https://api.nasa.gov'
const API_KEY = 'CfPOMjHtK3sV3twOVkKIxxEsq2dro6bLyOcICzVA'

function App() {
  const [cardState, setCardState] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    .then(response => {
      setCardState(response.data);
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  const ApodCard = ({ info }) => (
    <div className="card">
      <div className="image-container">
        <img alt="" src={info.hdurl}></img>
        <h2>{info.copyright}</h2>
      </div>

      <div className="card-info">
        <h1>{info.title}</h1>
        <p>{info.explanation}</p>
        <p>Date: {info.date}</p>
      </div>
    </div>
  )


  return (
    <div className="App">
      <ApodCard info={cardState} />
    </div>
  );
}


export default App;