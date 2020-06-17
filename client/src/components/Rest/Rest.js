import React from 'react';
import './Rest.scss';


// import axios from 'axios';
import { Link } from 'react-router-dom';


const Rest = props => {

        return(
            <Link to={'/rests/'+props.menuData.id} id="restCard">
            <div className="rest">
                
                <img src={props.menuData.image} className="rest__img" alt="rest__img"/>
                <span>{props.menuData.name}</span>
                <p>{props.menuData.catag}</p>
            </div>
            </Link>
        )

  }

export default Rest;