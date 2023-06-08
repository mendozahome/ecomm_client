import React, {useEffect} from 'react'
import "./SignLogin.scss"
import { useNavigate } from 'react-router-dom'
import { userData } from '../../helpers';




function SignLogin() {

function logOut(){
  localStorage.clear();
  navigate('/');
}



  const navigate = useNavigate();
    const {username} = userData();
    

      const navigateTologin = () => {
        navigate('/login');
  };
      const navigateTosignin = () => {
        navigate('/signin');
 };



  return (
  <div className='signlogin'>
    <h2>Welcome, <br/>{ username ? username : "Visitor" }</h2>
   
      <div className='contain'>
        
        {!localStorage.getItem('user')? <> <button onClick={navigateTosignin}>Sign In</button> <button onClick={navigateTologin}>Log In</button></>: null }
       {localStorage.getItem('user')? <button onClick={logOut}>Logout</button> : null }
      </div>
  </div>
  )
}

export default SignLogin