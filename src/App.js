import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  
  const[data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=5iN3mHKJ5c9qFXvEIgfC38JQ1CTgDUhE7S3fhf8j')
      .then(response => {
        console.log(response); 
      })
      .catch(error => {
        console.log(error);
      });
  },[])  
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;