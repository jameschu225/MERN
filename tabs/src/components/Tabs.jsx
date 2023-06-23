import React from 'react'

const Tabs = ({settab}) => {
    // const {settab} = props;
    const tab1Contents = " Tab 1 Content is showing here.";
    const tab2Contents = " Tab 2 Content is showing here.";
    const tab3Contents = " Tab 3 Content is showing here.";

  return (
    <div>
        <button className='tab' onClick={() => {settab(tab1Contents)}}>Tab1</button>
        <button className='tab' onClick={() => {settab(tab2Contents)}}>Tab2</button>
        <button className='tab' onClick={() => {settab(tab3Contents)}}>Tab3</button>        
    </div>
    )
}

export default Tabs