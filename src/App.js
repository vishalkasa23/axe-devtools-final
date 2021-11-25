import React, {useState,useEffect} from "react";
import Login from './Componets/Login';
import UITransfer from './Componets/UITransfer';
import './App.css';

const App = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [userExist,setUserExist]=useState('')

  const handleLogin =() =>{
    localStorage.setItem("User_Exist",true)
    setUserExist(localStorage.getItem("User_Exist"))
  };



  const authListener =()=>{
    setUserExist(localStorage.getItem("User_Exist"))
  };
  useEffect(()=>{
      authListener();
  }, [authListener]); 

 
  return (
    <div className="App">
      {userExist ? ( <UITransfer />) :
      (
        <Login 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin}
      />
      )}
      
    </div>
    
  );
};

export default App;
