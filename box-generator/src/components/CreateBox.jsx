import React from 'react'
import { useState } from "react";

const CreateBox = () => {
  const [boxColor, setboxColor] = useState("");
  const [newBox, setnewBox] = useState([]);
  const [boxHeight, setboxHeight] = useState("");
  const [boxWidth, setboxWidth] = useState("");


  const handlesubmit = (e) => {
      e.preventDefault();

      let addBox = {
        width: boxWidth + 'px',
        height: boxHeight + 'px',
        backgroundColor: boxColor,
        marginRight: '20px',
      }
      console.log(addBox)
      setnewBox([...newBox, addBox]);
      setboxColor("");
      setboxWidth("");
      setboxHeight("");
    }          



  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label htmlFor="color">Color</label>
            <input type="text" id='color' value={boxColor} onChange={(e) => setboxColor(e.target.value)}/>
            <label htmlFor="width">Width</label>
            <input type="text" id='width' value={boxWidth} onChange={(e) => setboxWidth(e.target.value)}/>
            <label htmlFor="height">Height</label>
            <input type="text" id='height' value={boxHeight} onChange={(e) => setboxHeight(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
        <div style={{display: 'flex', flexDirection: 'row', flexwrap: 'wrap'}}>{
          newBox.map((box, idx) => 
          <div key={idx} style={box}></div>        
          )
        }
        </div>
    </div>
  )
}
export default CreateBox;