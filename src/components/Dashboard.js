import React, {useState,useEffect} from 'react'
import axios from "axios";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [exp, setExpire] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    regreshToken();
  },[]);

  const regreshToken = async() =>{
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.date.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);

    } catch (error) {
      if(error.response){
        navigate('/');
      }
    }
  }
  const getUser = async()=>{
    const response = await axios.get('http://localhost:5000/user')
  }

  return (
    <div className='container mt-5'>
        <h1>Welcome Back: {name}</h1>
        <button onClick={getUser} className='button is-primary'>Get Users</button>
    </div>
  )
}

export default Dashboard