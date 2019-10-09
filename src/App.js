import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import ImgCard from "./components/Molecules/ImgCard"
import SearchBar from "./components/Molecules/SearchBar"



function App() {
  const [pictureDay, setPictureDay] = useState([]);


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.log(response);
      setPictureDay(response.data)
    })
    .catch(err => {
      console.log("Play that funky music", err)
    })
  }, [])


  return (
    <div className="App">
    <SearchBar date={pictureDay.date}/>
      <ImgCard
       key={pictureDay.hdurl} 
       path={pictureDay.url} 
       detail={pictureDay.title} 
       date= {pictureDay.date}
       info={pictureDay.explanation}
       />
       
    </div>
  );
}

export default App;
