import React, { useReducer, useState } from 'react'; 
import { Link } from 'react-router-dom';
import Button from "../Components/Button";
const Register = ()=>{
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [passWord,setPassWord]=useState('')
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
  const validateLogin =()=>{
    Emailid();
    Passno(); 
  }

  return(
    <div>
      <h1>
        Create New Account
      </h1>
      <input type ="text" placeholder='FirstName' onKeyUp={(e)=>setFirstName(e.target.value)} ></input>
     <div></div>
     <input type ="text" placeholder='LastName' onKeyUp={(e)=>setLastName(e.target.value)} ></input>
     <div></div>
        <input type ="text" placeholder='Email@gmail.com' onKeyUp={(e)=>setEmail(e.target.value)} ></input>
     <div>{errorMsg}</div>
     <input type ="text" placeholder='Password'
     onKeyUp={(e)=>setPassWord(e.target.value)}></input>
     <div>{errorPass}</div>
      {/* <button onClick = {()=>validateLogin()}>Login</button> */}
      <Button name='CreateNewAccount'>CreateNewAccount</Button>
          <Link to="/">Sign in</Link>

    </div>
  )
}
export default Register;
