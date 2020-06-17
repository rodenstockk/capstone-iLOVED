import React from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Rests from './components/Rests/Rests'
import Menu from './components/Menu/Menu';
import Fav from './components/Fav/Fav';
import mainLogo from './assets/mainLogo.png';
import './App.scss'
// import About from './components/About/About'

import {Switch, Route, Redirect} from 'react-router-dom';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyBEsGknGqeK3X3ubaQ9eCvhIbASkchmhFY",
  authDomain: "iloved-61257.firebaseapp.com"
})



class App extends React.Component {

  state= {isSigned: false}

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  
  componentDidMount= ()=> {
 
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSigned: !!user})
    })
  }

render () {
  return (
    <div className="App">



        {this.state.isSigned ? (
        <>
        {/* <div>Signed In!</div>
        <button onClick={()=>firebase.auth().signOut()}>Sign out</button>
        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
        <img src={firebase.auth().currentUser.photoURL} /> */}

        <Header 
        signOut={()=>firebase.auth().signOut()} 
        signName={firebase.auth().currentUser.displayName}
        signImage={firebase.auth().currentUser.photoURL}
        />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/rests" exact component={Rests} />
          <Route path="/rests/:id" exact component={Menu} /> 
          <Route path="/iLOVED!" exact component={Fav} />
          {/* <Route path="/about" exact component={About} /> */}
        </Switch> 
        </>
        
         ) : (
          <div class="mainLogin rainbow">
            <img src={mainLogo} className="shake"/>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          {/* Reference firefly effect - Mike Golus December 6, 2018 */}
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>            
          </div> 
         )}     
         
    </div>
  );
}


}

export default App;
