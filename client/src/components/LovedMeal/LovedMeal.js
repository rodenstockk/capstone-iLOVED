import React from 'react';
import './LovedMeal.scss'

// import axios from 'axios';
import { Link } from 'react-router-dom';



const LovedMeal = props => {    

    
    return(
      <>
      {/* <Link to={`/rests/${props.lovedMealData.id}`}> */}
        <div className="lovedCard">
            
            <img src={props.lovedMealData.image} className="lovedCard__image"/>
            <h2 className="lovedCard__name">{props.lovedMealData.name}</h2>
            <span className="lovedCard__price">{props.lovedMealData.price}</span>
        </div>
      {/* </Link> */}
      </>
    )
}


export default LovedMeal;