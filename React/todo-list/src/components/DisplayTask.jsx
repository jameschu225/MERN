import React from 'react'

const DisplayTask = (props) => {
    const {newTaskList, setnewTaskList} = props;
    const styleSelector = (status) => {
                if (status === false) {
                    return "item";
                } else if (status === true){
                return "styleitem";
                }
            }
    const handleDelete = (idx) => {
        const newList = newTaskList.filter((item, id) => (id !== idx))
        setnewTaskList(newList);
    }
    const handleComplete = (idx) => {
        let completeList = [...newTaskList]
        if (completeList[idx].complete === true){
            completeList[idx].complete = false
        } else if (completeList[idx].complete === false){
            completeList[idx].complete = true;
        }
        setnewTaskList(completeList);
    }
    
    return (
            newTaskList.map((item, idx) => (
                                <div className="taskitem" key={idx}>
                                    <div className= {`${ styleSelector(item.complete) }`}>{item.item}</div>
                                    <input type="checkbox" onClick={(e) => handleComplete(idx)}/>
                                    <button className="taskbtn" onClick={(e) => {handleDelete(idx)}}>Delete</button>
                                </div>       
                                ))
  )
}

export default DisplayTask