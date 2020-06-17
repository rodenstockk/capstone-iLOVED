import React from 'react';
import './Main.scss'
import ct from '../../assets/image/ct.jpg'
import dd from '../../assets/image/dd.jpg'
import dtd from '../../assets/image/dtd.jpg'
import km from '../../assets/image/km.jpg'
import kw from '../../assets/image/kw.jpg'
import qe from '../../assets/image/qe.jpg'
import qw from '../../assets/image/qw.jpg'
import yv from '../../assets/image/yv.jpg'
import ke from '../../assets/image/ke.jpg'
import eg from '../../assets/image/eg.jpg'
import kt from '../../assets/image/kt.JPG'
import bw from '../../assets/image/bw.jpg'

import arrow from '../../assets/icon/arrow.png'
import h1 from '../../assets/icon/h1.png'
import h2 from '../../assets/icon/h2.png'
import h3 from '../../assets/icon/h3.png'

// import axios from 'axios';
import { Link } from 'react-router-dom';

let titles = [
    "Get ready to fall in love with your neighborhood!",
    "Track meals you tried, LOVED, and revisit with your LOVED ones!!", 
    "iLOVED! Record meals you LOVED, and record your experience",
]

let img = [
    h1,
    h2, 
    h3,
]

class Main extends React.Component {
    state = {
        title: "Get ready to fall in love with your neighborhood!", img: h1,  
    }


    clickHandler = (e) => {
        e.preventDefault();
        
        if(this.state.title === titles[0]) {
            this.setState({
                title: titles[1],
                img: img[1]
            })
        }
        else if (this.state.title === titles[1]) {
            this.setState({
                title: titles[2],
                img: img[2]
            })
        }
        else if (this.state.title === titles[2]) {
            this.setState({
                title: titles[0],
                img: img[0]
            })
        } 
    }


    render() {

      return (
        <>
        <section>
            
            <div className='sideHero'>
                <img src={this.state.img} className="sideHero__icon"/>
                <h1>{this.state.title}</h1>
                {/* <h1>Track all your favorite meals you tried, LOVED, and revisit with your LOVED ones!!</h1>
                <h1>iLOVED! Record meals you LOVED, and record your experience</h1> */}
                <img src={arrow} className="sideHero__img" onClick={this.clickHandler}/>
            </div>
            <div className='hero'></div>
        </section>
        <main>
            <div className="area">
            <Link to="/rests" id="restLink"><img className="area__img" src={ct}></img><h3>CHINA TOWN</h3></Link> 
            <Link to="/rests" id="restLink"><img className="area__img" src={ke}></img><h3>KING EAST</h3></Link>
            <Link to="/rests" id="restLink"><img className="area__img" src={dd}></img><h3>DISTILLERY</h3></Link>
            <Link to="/rests" id="restLink"><img className="area__img" src={dtd}></img><h3>DOWNTOWN</h3></Link>
            <Link to="/rests" id="restLink"><img className="area__img" src={km}></img><h3>KENSINGTON</h3></Link>
            <Link to="/rests" id="restLink"><img className="area__img" src={qe}></img><h3>QUEEN EAST</h3></Link>
            <Link to="/rests" id="restLink"><img className="area__img" src={kw}></img><h3>KING WEST</h3></Link>
            <Link to="/rests" id="restLink"><img className="area__img" src={yv}></img><h3>YORKVILLE</h3></Link>
            <Link to="/rests" id="restLink"><img className="area__img" src={qw}></img><h3>QUEEN WEST</h3></Link>
            <Link to="/rests" id="restLink"><img className="area__img" src={eg}></img><h3>EGLINTON</h3></Link>
            <Link to="/rests" id="restLink"><img className="area__img" src={kt}></img><h3>K-TOWN</h3></Link>
            <Link to="/rests" id="restLink"><img className="area__img" src={bw}></img><h3>BLOOR WEST</h3></Link>
            </div>
        </main>
        </>
        )
    };  
  }

export default Main;