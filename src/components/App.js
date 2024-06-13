import { useState } from "react";
import TaskList from './TaskList';

function App() {
  const [tasks,setTasks]=useState([]);
  const [newTask,setNewtask]=useState('');
  function addTask(){
    if(newTask)
      {
        setTasks([...tasks,{id:Date.now(),text:newTask,completed:false}]);
        setNewtask('');
      }
  }

  function completeTask(taskId)
  {
      setTasks((prevTasks)=>
      prevTasks.map((task)=>(
        task.id===taskId?{ ...task, completed: !task.completed } : task
      )
      )
      )
  }
  function removeTask(taskId)
  {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  
  return (
    <div className="App">
      <h1>To-do List</h1>
      <input 
      type="text"
      value={newTask}
      onChange={(e)=>setNewtask(e.target.value)}
      placeholder="Add your todo"  
      />
      <button onClick={addTask}>Add</button>
      <TaskList tasks={tasks} onTaskComplete={completeTask} onTaskRemove={removeTask}/>
    </div>
  );
}

export default App;
