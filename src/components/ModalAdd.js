import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";


const ModalAdd = ({isVisible}) => {
    const [data, setData] = useState({
        status: false,
    });
    const addTodo = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post('https://paw-kelompok-6.herokuapp.com/activities', data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => {
            console.log(response.data.data);
        }).catch(error => {
            console.log(error.response);
        })
    }
    return (
        <ModalContainer visible={isVisible}>
            <form onSubmit={addTodo}>
                <div className="form-inner">
                    <h2>Add Todo</h2>
                    <div className=" form-group">
                        <label htmlFor="title">Title :</label>
                        <input type="text" name="title" id="title" onChange={e=> setData({...data,title:e.target.value})} value={data.title} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" id="description" onChange={e=> setData({...data,description:e.target.value})} value={data.description} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="deadline">Deadline:</label>
                        <input type="date" name="deadline" id="deadline" onChange={e=> setData({...data,deadline:e.target.value})} value={data.deadline} required/>
                    </div>
                    <input type="submit" value="Add Todo"/>
                </div>
            </form>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    display: ${props => props.visible ? "block" : "none"};
    width: 50%;
    margin: auto;
`;
export default ModalAdd;