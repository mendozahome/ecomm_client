import React, {useState} from 'react'
import {  toast } from 'react-toastify';
import axios from 'axios';
import './Signin.scss'
import { Col, Row, Button, FormGroup, Input } from 'reactstrap'
import { useNavigate } from 'react-router-dom';


const initialUser = {email: "", password:"", username: "" }

function Signin(){

  const [user,setUser] = useState(initialUser)
 
  const navigate = useNavigate();

  const signUp = async () =>{
    try{
      const url = `https://ecomm-server-app.onrender.com/api/auth/local/register`
    if(user.username && user.email && user.password){
    const res = await axios.post(url, user);
    if (res){
    setUser(initialUser);
    navigate("/login")
      }
      
    }
  }catch(error){
    toast.error(error.message, {
    hideProgressBar: true,
})
}
};

  const handleUserChange = ({ target }) =>{
    const {name, value} = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
  }))
}

return (
  <div className="signin" >
    <Row >
      <Col className="fcontainer">
     
<h2>Sign up:</h2>
<FormGroup className="formGroup">
<Input
className="finput"
type="text"
name="username"
value={user.username}
onChange={handleUserChange}
placeholder="Enter Your full name"
/>
</FormGroup>
<FormGroup className="formGroup">
<Input className="finput"  
type="email"
name="email"
value={user.email}
onChange={handleUserChange}
placeholder="Enter your email"
/>
</FormGroup>
<FormGroup className="formGroup">
<Input  className="finput"
type="password"
name="password"
value={user.password}
onChange={handleUserChange}
placeholder="Enter Password"
/>
</FormGroup>
<Button className="fbutton" onClick={signUp}>Sign up</Button>

</Col>
    </Row>
</div>
)
}

export default Signin