import React from 'react';
import './EnoughMeal.scss'

// import axios from 'axios';
// import { Link } from 'react-router-dom';


const EnoughMeal = props => {    

    
    return(
      <div className="enoughCard">
            
        <img src={props.lovedMealData.image} className="enoughCard__image"/>
        <h2 className="enoughCard__name">{props.lovedMealData.name}</h2>
        <span className="enoughCard__price">{props.lovedMealData.price}</span>
      </div>
    )
}


export default EnoughMeal;