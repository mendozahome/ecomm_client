import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import './Login.scss'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { storeUser } from './../../helpers'

const initialUser = {password: "", identifier: ""}

const Login = () => {
 
const [user, setUser] = useState(initialUser)
const navigate = useNavigate();

const handleChange = ({ target }) => {

setUser((currentUser) =>({
...currentUser,
[target.name]: target.value,
}))
};

const handleLogin = async () => {
  const url = `https://ecomm-server-app.onrender.com/api/auth/local`;
try{
if(user.identifier && user.password){
  const {data} = await axios.post(url, user);
  if(data.jwt){
    storeUser(data);
    toast.success('Logged in Successfully',{
      hideProgressBar:true,
    })
setUser(initialUser)
navigate('/')
  }
}
}catch(error){
toast.error(error.message, {
  hideProgressBar: true,
})
  
}
};

  return (
    <Row className="login">
      
      <Col className='fcontainer'>
      <h2>Log In</h2>
<div >
  <div >                                                      
    <FormGroup className="formGroup">

<Input 
className="finput"
type="email" 
name="identifier" 
value={user.identifier} 
onChange={handleChange} 

placeholder= "Email..."/>



<Input 
type="password" 
name="password"  
value={user.password} 
className="finput" 
placeholder='password'
onChange={handleChange} 
 />
 </FormGroup>
</div>
<div className="loginBottom">
<Button type="button" className='fbutton' onClick={handleLogin}>Login</Button>
<span className="loginspan">Click <Link to='/signin'>Here</Link> To sign up</span>
</div>
</div>
</Col>
    </Row>
  )

}

export default Login