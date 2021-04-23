import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from './components/AddTask';

function App() {
    const [showAddTask, setShowAddTask] = useState(false); 
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        }

        getTasks();
    }, [])

    // Fetch Tasks
    const fetchTasks = () => {
        return fetch('http://localhost:5000/tasks')
            .then(response => response.json())
            .then(data => data);
    }

    // Fetch Task
    const fetchTask = (id) => {
        return fetch(`http://localhost:5000/tasks/${id}`)
            .then(response => response.json())
            .then(data => data);
    }

    // ADD Task
    const addTask = (task) => {
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: { 'Content-type' : 'application/json'},
            body: JSON.stringify(task)
        }).then(response => response.json()).then(data => {
            setTasks([...tasks, data]);
        })

        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTask = { id, ...task};
        // setTasks([...tasks, newTask]);
    }

    // DELETE Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        });

        setTasks(tasks.filter((task) => task.id !== id));
    }

    // TOGGLE Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder};
        const response = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-type' : 'application/json'},
            body: JSON.stringify(updatedTask)
        });
        const data = await response.json();


        setTasks(tasks.map(task => task.id === id ? {...task, reminder: !data.reminder} : task));
    }

    return (
        <div className="container">
            <Header 
                onAdd={()=> setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />

            {tasks.length > 0 
                ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
                : 'No Task To Show'}

            { showAddTask && <AddTask onAdd={addTask} /> }
        </div>
    );
}

export default App;
