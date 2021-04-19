import React from 'react'

const Employee = (props) => {
    // console.log(props);

    const {name, age: employeeAge} = props;

    
    return (
        <div>
            <p>This is an Employee, {props.name} - {employeeAge} </p>
        </div>
    )
}

export default Employee;
