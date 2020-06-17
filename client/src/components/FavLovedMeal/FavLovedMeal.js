import React from 'react';
import LovedMeal from '../LovedMeal/LovedMeal';

import { Link } from 'react-router-dom';



const FavLovedMeal = props => {    

    
    return(
      <>
            <div className="favMeal">{
                props.favMealData.filter(data => data.iLoved == true).map((arry, index) =>
                <div to={`/rests/${arry.id}`} onClick = {(e) => props.linkHandler(arry.id, arry.name, e, `/rests/${arry.id}`)}> 
                <LovedMeal
                key={index}
                lovedMealData={arry}    
                />
                </div>
                )
                }
            </div>      
      </>
    )
}


export default FavLovedMeal;