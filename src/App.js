import './App.css';
import TodoList from './components/TodoList';
import React, { useState} from 'react';
import LoginForm from './components/LoginForm'
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin123"
  // }

  // const [user, setUser] = useState({name: "", email: ""});
  // const [error, setError] = useState ("");

  // const Login = details => {
  //   console.log(details);
    
  //   if (details.email == adminUser.email && details.password == adminUser.password){
  //     console.log("Logged in");
  //     setUser({
  //       name: details.name,
  //       email:details.email
  //     });
  //   } else {
  //     console.log("Email/Password salah!");
  //     setError("Email/Password salah!")
  //     }
  // }

  // const Logout = () => {
  //   setUser({ name: "", email:""});
  //   console.log("Logout");
  // }
  
  return(
    <Router>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </Router>
   );
  }
   
export default App;
 