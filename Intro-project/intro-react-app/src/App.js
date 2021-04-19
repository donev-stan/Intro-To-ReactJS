import './App.css';
import Documentation from './Documentation';
import Counter from './Counter';
import Employee from './Employee';
import NewCounter from './NewCounter';
import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {

  // 3
  const employeeInfo = [
    {
      name: 'Stan',
      age: 21,
      employee_id: 1
    },
    {
      name: 'Martin',
      age: 22,
      employee_id: 2
    },
    {
      name: 'Viktor',
      age: 25,
      employee_id: 3
    }
  ];

  // 4
  const [showCounter, setShowCounter] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
          {/* (2)
            <h2>Counter Application :)</h2>
            <Counter/> */}

          {/* (3)
          <h1>Company Directory</h1>
          <Employee name="Stan" age={21}/>
          <Employee name="Viktor" age={25}/>
          <Employee name="Martin"/>
          <Employee name="Dobry"/> */}

          {/* (3)
          {employeeInfo.map(employee => {
            const {name, age: employeeAge} = employee;

            return (
                <div>
                    <p>This is an Employee, {name} - {employeeAge} </p>
                </div>
            )
          })} */}

          {/* {employeeInfo.map(({name, age}) => <Employee name={name} age={age}/> )} */}
          {/* {employeeInfo.map(employee => <Employee key={employee['employee_id']} {...employee}/> )} */}

          {/* (4)(5)
          <button onClick={()=> setShowCounter(!showCounter)}>{showCounter ? "Hide Counter" : "Show Counter"}</button>
          {showCounter && <NewCounter/>} */}

          <TodoList/>
      </header>
    </div>
  )
}

export default App;
