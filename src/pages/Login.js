import React from "react"
import styled from "styled-components"
import LoginForm from "../components/LoginForm"
import { Navigate, Link } from 'react-router-dom';

const Login = () => {
    

    if (localStorage.getItem('token')) {
        return <Navigate to="/dashboard"/>
    }

    return (
        <Container>
            <LoginForm/>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 auto;
    width: 60%;
`
export default Login