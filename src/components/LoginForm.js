import axios from 'axios';
import React, {useState} from 'react'
import { Navigate, Link } from 'react-router-dom';

function LoginForm() {
   
    const [data, setData]= useState({email:"", password: ""}); 
    const [error, setError] = useState("");
    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://paw-kelompok-6.herokuapp.com/users/login', data)
        .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('id', response.data.data.id);
            localStorage.setItem('email', response.data.data.email);
            localStorage.setItem('name', response.data.data.name);
        }).catch(error => {
            console.log(error.response);
            setError("Email/Password Salah");
        })
    }

    if (localStorage.getItem('token')) {
        return <Navigate to="/dashboard"/>
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? ( <div className="error"><span>{error}</span></div> ) : ""}
                {/* <div className=" form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"onChange={e=> setData({...data,name:e.target.value})} value={data.name}/>
                </div> */}
                <div className=" form-group">
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="email" id="email" onChange={e=> setData({...data,email:e.target.value})} value={data.email} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e=> setData({...data,password:e.target.value})} value={data.password} required/>
                </div>
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
}

export default LoginForm
