import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=5iN3mHKJ5c9qFXvEIgfC38JQ1CTgDUhE7S3fhf8j')
    .then(response => {
      console.log(response.data);
      setData(response.data);
    })
    .catch(error => {
      console.log(error); 
    })
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Card; 