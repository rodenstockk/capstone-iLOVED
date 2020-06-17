import React from 'react';
import './Fav.scss'
// import LovedMeal from '../LovedMeal/LovedMeal'
// import WillLoveMeal from '../WillLoveMeal/WillLoveMeal'
// import EnoughMeal from '../EnoughMeal/EnoughMeal'
import FavLovedMeal from '../FavLovedMeal/FavLovedMeal';
import FavWillMeal from '../FavWillMeal/FavWillMeal';
import FavEnoughMeal from '../FavEnoughMeal/FavEnoughMeal';



import axios from 'axios';
import { Link, withRouter, BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';


const API_URL = 'http://localhost:8080';

class Fav extends React.Component {    


    state = {
           favMeal: []
        }
    

    componentDidMount() {
        axios.get(`${API_URL}/favorite`)
        .then(response => {
            // if(response.data.iLoved == true)
            console.log(response.data)
            this.setState({
                favMeal: response.data,
            })
        })
        .catch(error  => {
            console.log(error)
        })
    } 




    linkHandler = (id, name, e, l) => {
        axios 
        .put(`${API_URL}/restaurants/${id}/menu/${name}`, {
            showModal: true
        })
        .then((result)=> {
            console.log(result, "fav route")
            const { history: { push } } = this.props;
            e.preventDefault();
            push(l)
        })

    }
     


    
    render() {
        console.log(this.props.match)
        return(
            <BrowserRouter>
            <div className="favList">

            <div className="subHeader">
            <NavLink to={`${this.props.match.path}/iLoved`}> 
            <div className="favLovedListTop">    
                <div id="favHeartIcon"></div>    
                <h1 id="favLovedH1">iLoved</h1>
            </div>
            </NavLink>     
            
            <NavLink to={`${this.props.match.path}/iWilliLove`}>
            <div className="favWillListTop">    
                <div id="favStarIcon"></div>    
                <h1 id="favWillH1">iWillLove</h1>
            </div>
            </NavLink>

            <NavLink to={`${this.props.match.path}/Enough`}>
            <div className="favEnoughListTop">    
                <div id="favEnoughIcon"></div>    
                <h1 id="favEnoughH1">Enough</h1>
            </div> 
            </NavLink>
            </div>


            <Switch>
                <Route exact path={`${this.props.match.path}`} exact  
                  render={(props) => <FavLovedMeal {...props} favMealData = {this.state.favMeal} linkHandler= {this.linkHandler} />}/>
                  
                <Route path={`${this.props.match.path}/iLoved`}  
                  render={(props) => <FavLovedMeal {...props} favMealData = {this.state.favMeal} linkHandler= {this.linkHandler}/>}/>

                <Route path={`${this.props.match.path}/iWilliLove`} 
                  render={(props) => <FavWillMeal {...props} favMealData = {this.state.favMeal} linkHandler= {this.linkHandler}/>}/>

                <Route path={`${this.props.match.path}/Enough`} 
                  render={(props) => <FavEnoughMeal {...props} favMealData = {this.state.favMeal} linkHandler= {this.linkHandler}/>}/>

            </Switch>


            {/* <FavLovedMeal
                favMealData = {this.state.favMeal}
                />   */}

            {/* <div className="favMeal">{
                this.state.favMeal.filter(data => data.iLoved == true).map((arry, index) =>
                <div to={`/rests/${arry.id}`} onClick = {(e) => this.linkHandler(arry.id, arry.name, e, `/rests/${arry.id}`)}> 
                <LovedMeal
                key={index}
                lovedMealData={arry}    
                />
                </div>
                )
                }
            </div> */}
     


            {/* <FavWillMeal 
            favMealData = {this.state.favMeal}
            /> */}
            {/* <div className="favMeal">{
                this.state.favMeal.filter(data => data.willLove == true).map((arry, index) =>
                <div to={`/rests/${arry.id}`} onClick = {(e) => this.linkHandler(arry.id, arry.name, e, `/rests/${arry.id}`)}> 
                <WillLoveMeal
                key={index}
                lovedMealData={arry}    
                />
                </div>
                )
                }
            </div> */}
    

            {/* <FavEnoughMeal 
            favMealData = {this.state.favMeal}
            />             */}
            {/* <div className="favMeal">{
                this.state.favMeal.filter(data => data.enough == true).map((arry, index) =>
                <div to={`/rests/${arry.id}`} onClick = {(e) => this.linkHandler(arry.id, arry.name, e, `/rests/${arry.id}`)}>
                <EnoughMeal
                key={index}
                lovedMealData={arry}    
                />
                </div>
                )
                }
            </div> */}

      



            </div>
            </BrowserRouter>
        )
    }

}


export default withRouter(Fav);