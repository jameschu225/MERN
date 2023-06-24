import React, {useState} from 'react'

const CreateTask = (props) => {
    const {newTaskList, setnewTaskList, modNewTaskList} = props;
    const [newTask,setnewTask] = useState("");
     const handleSubmit = (e) => {
        e.preventDefault()
        setnewTaskList([...newTaskList, newTask])
        // console.log( `newtask ${newTask}`)
        // console.log(`newTaskList ${newTaskList}`)
        setnewTask("")
     }
    
  return (
    <div>
        <form action="submit" onSubmit={handleSubmit}>
        <input type="text" id='addtask' value={newTask} onChange={(e)=> setnewTask(e.target.value)}/>
        <button type="" className="addtask btn">Add</button>
        </form>

    </div>
  )
}

export default CreateTask