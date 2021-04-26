import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { useState } from "react";
import AddTask from './Components/AddTask'

function App() {
  const [showAddTask, setShowAddTask]=useState(true)
  const  [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th at 2:30 PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Code war",
      day: "Aug 7th at 7:30 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Dating with Emaye",
      day: "Jan 5th at 2:00 PM",
      reminder: false,
    },
  ])

  //Add Task
  const addTask = (task)=>{
    //console.log(task);
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }

  //Delete task
  const deleteTask = (id)=>{
    //console.log('delete',id);
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  //Toggle Reminder
  const toggleReminder = (id)=>{
    //console.log(id);
    
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
    
  }

  return (
    <div className="container">
      <Header title='Task Tracker' 
      onAdd={()=>setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0?<Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />:<h3 className='App'>No Task</h3>}
    </div>
  );
}

export default App;
