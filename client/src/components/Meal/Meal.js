import React from 'react';
import './Meal.scss'

import Modal from 'react-modal';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import axios from 'axios';
// import { Link } from 'react-router-dom';

Modal.setAppElement('#root')
const API_URL = '';

class Meal extends React.Component {    

state = {
      showModal: false
    };


    
    componentDidMount() {
      if (this.props.mealData.showModal === true) {
        axios 
        .put(`${API_URL}/restaurants/${this.props.restId}/menu/${this.props.mealData.name}`, {
            showModal: false
        })
        this.setState({showModal: true})
      }
    }




    openModal = (e) => {
        this.setState({ showModal: true });
      }
      
    closeModal = (e) => {
        this.setState({ showModal: false });
      }
  

        
        createFav = (e) => {
            e.preventDefault();
            if(!eval(e.target.iLoved.value) && 
                !eval(e.target.willLove.value) && 
                !eval(e.target.enough.value)) {

                  axios
                  .delete(`${API_URL}/favorite/${this.props.mealData.name}`, {
      
                  })
                  .then(response => {
                    console.log("deleted from Fav:", response.data);
                    this.closeModal(); 
                  })
                  .then( res => {
                    this.props.resetState(this.props.resetId)
                  })
                  .catch(err => {
                    console.log(err)
                  })    

                } else {

                  axios 
                  .post(`${API_URL}/favorite`, {
                    "id": this.props.restId,
                    "name": this.props.mealData.name,
                    "price": this.props.mealData.price,
                    "intro": this.props.mealData.intro,
                    "catag": this.props.mealData.catag,
                    "image": this.props.mealData.image,
                    "iLoved": eval(e.target.iLoved.value),
                    "willLove": eval(e.target.willLove.value),
                    "enough": eval(e.target.enough.value),
                    "date" : Date.now()
                  })
                  .then(response => {
                    console.log("Added to Fav:", response.data);
                    this.closeModal(); 
                  })
                  .catch(err => {
                    console.log(err)
                  })

                }
            
              axios 
                .put(`${API_URL}/restaurants/${this.props.restId}/menu/${this.props.mealData.name}`, {
                  "iLoved": eval(e.target.iLoved.value),
                  "willLove": eval(e.target.willLove.value),
                  "enough": eval(e.target.enough.value),
                })
                .then( res => {
                  this.props.resetState(this.props.resetId)
                }
                ) 
            //   e.target.reset();
          }
    




  render() {
  let circle = <img src={this.props.mealData.image} id="mealImage"/>
  let icon = <div></div>
    if (this.props.mealData.iLoved) {
      circle = <img src={this.props.mealData.image} id="mealImageBlue"/>
      icon = <div id="heartIcon"></div>
    } 
    else if (this.props.mealData.willLove === true) {
      circle = <img src={this.props.mealData.image} id="mealImageYellow"/>
      icon = <div id="starIcon"></div>
    } else if (this.props.mealData.enough === true) {
      circle = <img src={this.props.mealData.image} id="mealImageGrey"/>
      icon = <div id="enoughIcon"></div>
    }
    return(
        <>
        <div ref={node => { this.node = node; }}>

        <div className="meal" onClick={this.openModal}>
            {circle}
            {icon}                 
        </div>


        <Modal
            style={ {
                overlay: {
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(101,101,101, 0.5)'
                },
                content: {
                  width: '100%',
                  maxWidth: '500px',
                  height: '550px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: 0,
                  margin: 0,
                  boxSizing: 'border-box',
                  borderRadius: '10px'
                }
            }}
            isOpen={this.state.showModal}
            contentLabel="Whatever"
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.closeModal}
            >
            <form onSubmit={this.createFav} id="mealForm">
              <div id="modalTop">
                <img src={this.props.mealData.image} className="modalImage"/>
                <div className="modalName">
                <h1>{this.props.mealData.name}</h1> 
                <span>PRICE: {this.props.mealData.price}</span> 
                
                </div>
              </div>
  
              <p>{this.props.mealData.intro}</p>
              
              <ToggleSwitch switchLabel="fav"
              mealData = {this.props.mealData}

              />     
              <div onClick={this.closeModal} id="modalBack">Back</div>
              <button id="modalSave">Save</button>
            </form>
        </Modal>


        </div>
        </>
    )
}

}


export default Meal;