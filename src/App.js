import React , {useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home'; 
import  Checkout from './Checkout'; 
import  Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import {BrowserRouter as Router, Routes ,Route } from "react-router-dom";
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
      // only runs once app component loads

      auth.onAuthStateChanged(authUser =>{
        console.log('The User is >>>',authUser);

        if(authUser){
          //if user is logged /was logged in
          dispatch({
            type:'SET_USER',
            user: authUser
          })
        }else{
          //the user is logged out
          dispatch({
            type:'SET_USER',
            user: null
          })

        }

      })
  },[])

  return (
    //BEM
    <Router>
      <Header />
    <div className="app">
      <Routes>
        <Route path="/login" element={<><Login /></> } >
        </Route>
        <Route path="/checkout" element={<><Checkout /></> } >
        </Route>
        <Route path="" element={<><Home /></> } >
        </Route>
        
       
       
        
      
      </Routes>
      </div>
    </Router>
  );
}

export default App;
