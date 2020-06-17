import React from 'react';
import WillLoveMeal from '../WillLoveMeal/WillLoveMeal';

import { Link } from 'react-router-dom';



const FavWillMeal = props => {    

    
    return(
      <>
            <div className="favMeal">{
                props.favMealData.filter(data => data.willLove == true).map((arry, index) =>
                <div to={`/rests/${arry.id}`} onClick = {(e) => props.linkHandler(arry.id, arry.name, e, `/rests/${arry.id}`)}> 
                <WillLoveMeal
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


export default FavWillMeal;