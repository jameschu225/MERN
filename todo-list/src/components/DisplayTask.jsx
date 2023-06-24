import React from 'react'

const DisplayTask = (props) => {
    // const [modifyTaskList, setmodifyTaskList] = useState()
    const {newTaskList, setnewTaskList, setmodNewTaskList} = props;
    // const styleSelector = (idx) => {
    //     const overalldonelist = document.querySelector(`.a${idx}`);
    //     console.log(overalldonelist);
                // if (overalldonelist.checked === false) {
                //     return "item";
                // } else if (overalldonelist.checked === true){
                // return "styleitem";
                // }
            // }
    const handleDelete = (idx) => {
        
        const newList = newTaskList.filter((item, id) => (id !== idx))
        console.log(newList)        
        // setmodNewTaskList(newList);
    }

    
    return (
            newTaskList.map((item, idx) => (
                                <div className="taskitem" key={idx}>
                                    <div className= "{`${ styleSelector(idx) }`}">{item}</div>
                                    <input type="checkbox" className= {`a${idx}`}/>
                                    <button className="taskbtn" onClick={handleDelete(idx)}>Delete</button>
                                </div>       
                                ))
  )
}

export default DisplayTask