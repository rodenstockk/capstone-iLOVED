import React from 'react';
import './Menu.scss';
import Meal from '../Meal/Meal';
import Exp from '../Exp/Exp'
import backArrow from '../../assets/icon/back.png';
import theImage from '../../assets/image/in.jpg'
// import phone from '../../assets/icon/phone.png'
import loca from '../../assets/icon/loca.png';
import phone from '../../assets/icon/phone.png';


import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:8080';

class Menu extends React.Component {

    state = {
        restData: {
           menu: [],
           experience: [],
        }

      };


    firstMount = (id) => {
        axios.get(`${API_URL}/restaurants/${id}`)
        .then(response => {
            console.log(response.data.menu)
            this.setState({
                restData: response.data,
            })
        })
        .catch(error  => {
            console.log(error)
        })
    }



    componentDidMount() {
        this.firstMount(this.props.match.params.id)
    }  
    
    expHandler = (e) => {
        e.preventDefault();
  
        // if (typeof dynamicURL === "undefined") {
        //   dynamicURL = '1af0jruup5gu'}
        axios 
          .post(`${API_URL}/restaurants/${this.props.match.params.id}/experience`, {
            "experience" : e.target.inputValue.value,
            "date" : Date.now(),
          })
          .then(() => {
            this.firstMount(this.props.match.params.id);
          })
          .catch(err => {
            console.log(err)
          }) 
          e.target.reset();
      }


    render() {
        console.log("menu data", this.state.restData.menu)
        return(
            <div className="restDetail">
                <section>
                    
                    <div className='mealHero'>
                        <Link to="/rests">
                            <img src={backArrow} alt="back arrow" id="backArrow"/>
                            {/* <h1>{this.state.restData.name}</h1>  */}
                        </Link>                        
                        <h1>{this.state.restData.name}</h1>

                        <div className="rests-icon">
                                <img className="rests-icon__logo-phone" src={phone} />
                                <span>{this.state.restData.phone}</span>
                        </div>
                        <div className="rests-icon">
                            <img className="rests-icon__logo-loca" src={loca} />
                            <span>{this.state.restData.address}</span>
                        </div>

                        
                        
                        <p>{this.state.restData.intro}</p>

                    </div>
                    <img src={this.state.restData.image}  id='mealHero'></img>
                </section>                
 
                <div className="menu">{
                this.state.restData.menu.map((dataArray, index)=>
                <Meal 
                key={index}
                mealData={dataArray}
                restId={this.state.restData.id}
                resetState={this.firstMount}
                resetId={this.props.match.params.id}
                />
                )}
                </div>


                <div className="conversation">
                    <div className="conversation-image"></div>
                    <form className="conversation-content" onSubmit={this.expHandler}>
                        <label htmlFor="comment-input">RECORD YOUR EXPERIENCE</label>
                        <div className="conversation-content__boxes">
                        <textarea id="comment-input" rows="5" cols="20" placeholder="Record your experience here" name="inputValue"></textarea> 
                        <button type="submit" id="submit" >RECORD</button>
                        </div>
                    </form>
                </div>


                <div id = 'exp'>{
                    this.state.restData.experience.map((array, index)=>
                    <Exp 
                    key={index}
                    exp={array}
                    />
                    ).reverse()
                }
                </div>            
            
            </div>
        )
    }
  }

export default Menu;