import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalAdd from "../components/ModalAdd";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Dashboard = () => {
    const [isAddMode, setIsAddMode] = useState(false);
    const [todos, setTodos] = useState();

    useEffect(() => {
        axios.get('https://paw-kelompok-6.herokuapp.com/users/'+ localStorage.getItem('id') +'/activities', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
        }).then(response => {
            console.log(response.data.data);
            setTodos(response.data.data);
        }).catch(error => {
            console.log(error.response);
        })
    }, [todos]);

    return (
        <div>
            <TodoList  data={todos ? todos : [] } onCLick={() => setIsAddMode(!isAddMode)}/>
            <ModalAdd isVisible/>
        </div>
    )
}

export default Dashboard;