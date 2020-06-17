import React from 'react';
import './WillLoveMeal.scss'

// import axios from 'axios';
// import { Link } from 'react-router-dom';


const WillLoveMeal = props => {    

    
    return(
      <div className="willCard">
            
        <img src={props.lovedMealData.image} className="willCard__image"/>
        <h2 className="willCard__name">{props.lovedMealData.name}</h2>
        <span className="willCard__price">{props.lovedMealData.price}</span>
      </div>
    )
}


export default WillLoveMeal;