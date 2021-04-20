import React from "react";
import {useHistory} from 'react-router-dom';

const TodoCard = (props) => {
    const { title, completed, id } = props.todo;
    let history = useHistory();

    return (
        <div style={{backgroundColor: 'lightblue', cursor: 'pointer'}}
             onClick={()=> history.push(`/todo/${id}`)}>

            <h4>{title}</h4>
            <h6>{`Completed: ${completed}`}</h6>
        </div>
    );
};

export default TodoCard;
