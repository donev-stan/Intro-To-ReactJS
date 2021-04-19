import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState();

    // componentDidMount
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/todos`)
            .then(response => {
                const responseTodos = response.data;
                setTodos(responseTodos);
            });
    }, []);



    return (
        <div>
            <h1>Todo List</h1>
            {todos && todos.map(todo => {
                const {userId, title} = todo;
                return (
                    <>
                        <h3>{title}</h3>
                        <p>Assigned to user: {userId}</p>
                    </>
                )
            })}
        </div>
    )
}

export default TodoList;
