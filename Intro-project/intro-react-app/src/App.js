import './App.css';
import Documentation from './Documentation';
import Counter from './Counter';
import Employee from './Employee';

function App() {

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


          {/* {employeeInfo.map(({name, age}) => <Employee name={name} age={age}/> )} */}
          {employeeInfo.map(employee => <Employee key={employee['employee_id']} {...employee}/> )}

      </header>
    </div>
  )
}

export default App;
