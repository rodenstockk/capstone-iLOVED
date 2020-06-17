import React from 'react';
import logoTrans from '../../assets/logoTrans.PNG';
import logoLock from '../../assets/icon/lock.png';

import './Header.scss';
import Modal from 'react-modal';

import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


class Header extends React.Component {

  state={
    showModal: false
  }

    openModal = (e) => {
        this.setState({ showModal: true });
      }
      
    closeModal = (e) => {
        this.setState({ showModal: false });
      }

  render() {
    return (
      <header>
        <Link to="/" id="navLink"><img src={logoTrans} className="logo" alt="Logo"/></Link>
        <nav className="nav">
            <ul className="nav__bar">
                <li><NavLink to='/iLOVED!' activeClassName='active'>iLOVED!</NavLink></li>
                <li><NavLink to='/about' activeClassName='active'>ABOUT</NavLink></li>
            </ul>
        </nav>


        <div className="logIn">
          <img src={logoLock} id="lock" onClick={this.openModal}></img>
          <h1 onClick={this.openModal}>Signed in as {this.props.signName}</h1>
        
          <Modal     
              style={{
                overlay: {
                  width: '24%',
                  height: '25%',
                  position: 'absolute',
                  backgroundColor: 'none',
                  top: '5px',
                  left: '1090px'
                },
                content: {
                  padding: '8.8px',
                  margin: '8px',
                  borderRadius: '10px'
                }
              }}   
              isOpen={this.state.showModal}
              contentLabel="Whatever"
              shouldCloseOnOverlayClick={true}
              onRequestClose={this.closeModal}
              >
              <div className="modal">
              <img src={this.props.signImage} id="modalImage-login"/>
              <div className="modal__cont">
              <h1>Hi! {this.props.signName}</h1>
              <button onClick={this.props.signOut} id="modalButton-login">SIGN OUT</button>
              </div>
              </div>
          </Modal> 

        </div>

      </header>
    ); 
  }

  }


export default Header;