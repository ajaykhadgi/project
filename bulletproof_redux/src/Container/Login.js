import React, { useReducer, useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Login.css';
import Button from "../Components/Button";

const  Login=()=> {
    const [email,setEmail]=useState('')
    const [passWord,setpassword]=useState('')
    const [errorMsg,setErrorMsg]=useState('')
    const [errorPass,setErrorPass]=useState('')



    const Emailid=()=>{
      const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      let error ="";
      const test = regex.test(email)
      if(!email){
        error="email is required"
        setErrorMsg(error)
      }
      else if(test === true){
        error="email is valid"
        setErrorMsg(error)
      }
      else if(test === false){
        error="invalid email"
        setErrorMsg(error)
      }
      return error
    }
    const Passno = ()=>{
      let errorpaaa =""
      if(!passWord){
        errorpaaa = "Password is required"
        setErrorPass(errorpaaa)
      }
      else if(passWord.length < 10){
        errorpaaa = "Password must be greater than 10 digit"
        setErrorPass(errorpaaa)
      }
      else if(passWord.length >= 10){
        errorpaaa = "Password is OK"
        setErrorPass(errorpaaa)
      }
      return errorpaaa
  
    } 

  return (
    <div>
      <h1>
        Login
        </h1>
        <h2>
        <input type ="text" placeholder='Email@gmail.com' onKeyUp={(e)=>setEmail(e.target.value)} ></input>
          </h2>
          <h3>
          <input type ="text" placeholder='Password' onKeyUp={(e)=>setpassword(e.target.value)}></input>
          </h3>
          <Button name='login'>login</Button>
          <Link to="/register">Create new account</Link>
          <br/>
          <Link to="/recover">Forgot your Password?</Link>
    </div>
  );
}

export default Login;
