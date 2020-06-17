import React from 'react';
import './Exp.scss'

// import axios from 'axios';
// import { Link } from 'react-router-dom';

const timeConverter = (timeStampFromApi) => {
    var seconds = Math.floor((new Date() - timeStampFromApi) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }


const Exp = props => {    

    
    return(
        <div className="comments">
            <div className="comments-image"></div>
            <div className="comments-content" >
                <div className="comments-content__intro">
                    <div className="comments-content__intro-name">{props.exp.name}</div>
                    <div className="comments-content__intro-date">{timeConverter(props.exp.date)}</div>
                </div>
                <div className="comments-content__detail">{props.exp.experience}</div>
            </div>
        </div>
    )
}


export default Exp;