import './App.css';
import Documentation from './Documentation';
import Counter from './Counter';
import Employee from './Employee';
import NewCounter from './NewCounter';
import React, { useState } from 'react';
import TodoList from './TodoList';
import { Switch, Route, useHistory, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

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

  // 7
  const history = useHistory();

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

          {/* (6)
          <TodoList/> */}

          <div>
            {/* <button onClick={()=> history.push("/page1")}>Page 1</button>
            <button onClick={()=> history.push("/page2")}>Page 2</button>
            <button onClick={()=> history.push("/page3")}>Page 3</button> */}
            <Link to="/page1">Page 1</Link>
            <Link to="/page2">Page 2</Link>
            <Link to="/page3">Page 3</Link>
          </div>

          <Switch>
            <Route path="/page1">
              <Page1/>
            </Route>

            <Route path="/page2">
              <Page2/>
            </Route>

            <Route path="/page3">
              <Page3/>
            </Route>
          </Switch>

      </header>
    </div>
  )
}

export default App;
