import './App.css';
import { useState } from "react";
import CreateTask from "./components/CreateTask";
import DisplayTask from "./components/DisplayTask";

function App() {
  const [newTaskList, setnewTaskList] = useState([])
  const [modNewTaskList, setmodNewTaskList] =useState(newTaskList)
  return (
    <div className="App">
      <CreateTask newTaskList={newTaskList} setnewTaskList={setnewTaskList} modNewTaskList={modNewTaskList}/>
      <DisplayTask newTaskList={newTaskList} setnewTaskList={setnewTaskList} setmodNewTaskList={setmodNewTaskList}/>
    </div>
  );
}

export default App;
