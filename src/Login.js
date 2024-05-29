import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate =useNavigate();
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const signIn = e =>{
    e.preventDefault();

    
      signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if(auth){
          navigate('/');
        }
      })
      .catch(error => alert(error.message))
  }
  const register = e => {
    e.preventDefault();

    /*auth
      .createUserWithEmailAndPassword(email, password )
      .then((auth) => {
        //it successfully created
        //const user = auth.user;
        console.log(auth);
      }) 
      .catch(error => alert(error.message))
  }*/
  createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // It successfully created a new user with email and password
        if(auth){
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className = "login">
       <Link to = '/'>
        <img className="login__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
        <div className= 'login__container'>
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input type = 'text' value ={email} onChange={e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type = 'password' value ={password} onChange={e => setPassword(e.target.value)}/>

            <button type ='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
          </form>
          <p>
            By signing-in you agree to Amazon'signing
            Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice
            and our Interest Based Ads
            Notce.
          </p>
          <button onClick = {register} className='login__registerButton'>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login