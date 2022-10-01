import React from 'react';
import './register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className='registerInput' placeholder='Enter Your username'
        onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input type="text" className='registerInput' placeholder='Enter Your Email'
        onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input type="password" className='registerInput'
        placeholder='Enter Your Password'
        onChange={e => setPassword(e.target.value)}
        />
        <button
          type='submit'
          className="registerButton">Register</button>
        {error && <span style={{color:'red',marginTop:'10px'}}>Something Went Wrong</span>} 
        <button
          className="registerLoginButton">
           <Link className='link' to={'/login'}>Log In</Link>
        </button>
      </form>
    </div>
  )
}
