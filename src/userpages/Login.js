import React, { useState } from 'react';
import axios from 'axios';
import '../style.css'
import { useNavigate } from 'react-router-dom';


export default function JobSeekerLogin() 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleLogin = () => {
    navigate('/registration');
    
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2123/checkuserlogin', formData);
      if (response.data!=null) 
      {
        console.log(response.data)
        navigate("/home");
        
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div >
      
      {
        message ? <h4 align="center" style={{color:"white"}}>{message}</h4> : <h4 align="center" style={{color:"white"}}>{error}</h4>
      }
      <h3 align="center" style={{color:"white",marginTop:"200px"}}>Enter Your Credentials</h3>
      <form onSubmit={handleSubmit} className='forms'>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
          <button type="submit" className="button">Login</button>
        </div>
        
      </form>
      <p style={{textAlign:"center",color:"white"}}>
                    New User ? <button className="button" value="Submit" onClick={handleLogin}>Register Here</button></p>
    </div>
  );
}