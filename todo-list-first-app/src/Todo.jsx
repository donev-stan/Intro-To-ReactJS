import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
// import {CircularProgress} from '@material-ui/core';

const Todo = () => {
    const {id} = useParams();

    const [todoDetails, setTodoDetails] = useState();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => {
                setTodoDetails(response.data);
            }); 
    }, []); // ,[] => will run as soon as the component is mounted

    const {id: todoId, userId, title, completed} = todoDetails || {};
    // id todoDetails is undefined - we will pull an empty object

    return (
        <div>
            <div> 
                <h1>{`ID: ${todoId}`}</h1>
                <h1>{`UserID: ${userId}`}</h1>
                <h1>{`Title: ${title}`}</h1>
                <h1>{`Completed: ${completed}`}</h1>
            </div>
        </div>
    )
}

export default Todo


// {
//     todoDetails ? (
//         <div> 
//             <h1>{`ID: ${todoId}`}</h1>
//         </div>
//     ) : (<CircularProgress/>)
// }