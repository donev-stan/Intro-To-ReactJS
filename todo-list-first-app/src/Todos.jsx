import axios from 'axios';
import React, {useEffect, useState} from 'react';
// import {CircularProgress} from '@material-ui/core';
import TodoCard from './TodoCard';

const Todos = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/todos`)
            .then(response => {
                const responseTodos = response.data;
                setTodos(responseTodos);
            }); 
    }, []); // ,[] => will run as soon as the component is mounted

    console.log(todos);

    return (
        <>
                {todos && todos.map(todo => <TodoCard todo={todo} />)}
        </>
    )
}

export default Todos

// Material-ui A.K.A trash shit not working
// {todos ? 
//     (
//         <div>
//             {todos.map(todo => <TodoCard todo={todo} />)}
//         </div>
//     ) : <CircularProgress/>}