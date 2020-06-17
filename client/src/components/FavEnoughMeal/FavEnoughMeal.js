import React from 'react';
import EnoughMeal from '../EnoughMeal/EnoughMeal';

import { Link } from 'react-router-dom';



const FavEnoughMeal = props => {    

    
    return(
      <>
            <div className="favMeal">{
                props.favMealData.filter(data => data.enough == true).map((arry, index) =>
                <div to={`/rests/${arry.id}`} onClick = {(e) => props.linkHandler(arry.id, arry.name, e, `/rests/${arry.id}`)}>
                <EnoughMeal
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


export default FavEnoughMeal;