import React, {useState, useEffect} from "react";
import NasaCardInfo from "./NasaCardInfo";
import axios from "axios";

const NasaCard = () => {
    const [nasaCard, setNasaCard] = useState([]);
    console.log(nasaCard.hdurl);
    console.log(nasaCard.title);
    useEffect(() => {

    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=lXmmqZxt2R0vH5OwmU0GD3jP5OcLMkhUqRBLdhuM")
    .then(response => {
        console.log(response);
        setNasaCard(response.data);
        
    })
    .catch(err =>{
        console.log(err)
    });
    }, []);
    return(
        <div>
            <NasaCardInfo
            key={nasaCard.title}
            data={nasaCard}
             /> 
        </div>
    )

}



export default NasaCard;