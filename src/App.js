import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"



function App() {
  const [pictureDay, setPictureDay] = useState("PLACEHOLDER");

  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log("Play that funky music", err)
  })

  return (
    <div className="App">
      <p>
       
      </p>
    </div>
  );
}

export default App;
