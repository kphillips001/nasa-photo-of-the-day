import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardHeader
  } from 'reactstrap';

const NasaCardInfo = props => {
    return (
        <Card>
            <CardHeader>
                <h1>{props.data.title}</h1>
            </CardHeader>  
            <CardBody>           
                <CardText>{props.data.explanation}</CardText>
                <img src={props.data.url} alt='Nasa'/>
                <CardText>Photographer: {props.data.copyright}</CardText>
                <CardText>Current Date: {props.data.date}</CardText>
            </CardBody> 
        </Card>
        
    )
}

export default NasaCardInfo;