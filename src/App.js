import {useState} from 'react';
import Forecast from "./components/Forecast/Forecast";
import React from "react";
import './App.css'



function App() {
  const [gif, setGif] = useState();
  const [location, setLocation] = useState()

  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage: `url(${gif})`}}>
        <h1>React Weather App</h1>
        <h2>{location}</h2>
      </header>
      <main>
        <Forecast setGif={setGif} setLocation={setLocation}/>
      </main>
      <footer>
        Page created by Kirill Selivanov
      </footer>
    </div>
  );
}

export default App;
