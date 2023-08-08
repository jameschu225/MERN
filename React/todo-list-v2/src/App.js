import './App.css';
import { useState } from "react";
function App() {
  
    const [newTaskList, setnewTaskList] = useState([])
    const [newTask,setnewTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        setnewTaskList([...newTaskList, newTask])
        setnewTask("")
    }
    const handleDelete = (idx) => {
        const newList = newTaskList.filter((item, id) => (id !== idx))
          setnewTaskList(newList);
    }



  return (
    <div className="App">
        <form action="submit" onSubmit={handleSubmit}>
        <input type="text" id='addtask' value={newTask} onChange={(e)=> setnewTask(e.target.value)}/>
        <button type="" className="addtask btn">Add</button>
        </form>
        {newTaskList.map((item, idx) => (
          <div className="taskitem" key={idx}>
              <div className= "">{item}</div>
              <input type="checkbox" className=""/>
              <button className="taskbtn" onClick={(e) => {handleDelete(idx)}}>Delete</button>
          </div>       
          ))
        }

    </div>
  )
}

export default App;
