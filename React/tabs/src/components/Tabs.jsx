import React from 'react'
import { useState } from "react";

const Tabs = ({settab}) => {
    const [colortTab1, setcolorTab1]=useState("white");
    const [colortTab2, setcolorTab2]=useState("white");
    const [colortTab3, setcolorTab3]=useState("white");
    const [fontColorTab1, setFontcolorTab1]=useState("black");
    const [fontColorTab2, setFontcolorTab2]=useState("black");
    const [fontColorTab3, setFontcolorTab3]=useState("black");

    const tab1Contents = " Tab 1 Content is showing here.";
    const tab2Contents = " Tab 2 Content is showing here.";
    const tab3Contents = " Tab 3 Content is showing here.";

    const handleClick = (e)=> {
        if (e.target.className === "tab1") {
          setcolorTab1("black");
          setcolorTab2("white");
          setcolorTab3("white");  
          setFontcolorTab1("white");
          setFontcolorTab2("black");
          setFontcolorTab3("black");  
          settab(tab1Contents);      

        } else if (e.target.className === "tab2"){
          setcolorTab1("white");
          setcolorTab2("black");
          setcolorTab3("white");  
          setFontcolorTab1("black");
          setFontcolorTab2("white");
          setFontcolorTab3("black");  
          settab(tab2Contents); 

        } else if (e.target.className === "tab3"){
          setcolorTab1("white");
          setcolorTab2("white");
          setcolorTab3("black");  
          setFontcolorTab1("black");
          setFontcolorTab2("black");
          setFontcolorTab3("white");  
          settab(tab3Contents); 
        }

    }


  return (
    <div>
        <button style={{backgroundColor: colortTab1, color: fontColorTab1}} className='tab1' onClick={handleClick}>Tab1</button>
        <button style={{backgroundColor: colortTab2, color: fontColorTab2}} className='tab2' onClick={handleClick}>Tab2</button>
        <button style={{backgroundColor: colortTab3, color: fontColorTab3}} className='tab3' onClick={handleClick}>Tab3</button>        
    </div>
    )
}

export default Tabs