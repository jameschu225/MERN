import './App.css';
import { useState} from "react";
import Tabs from "./components/Tabs";
import TabDisplay from "./components/TabDisplay";

function App() {

const [tab,settab] = useState("")

  return (
    <div className="App">
      <Tabs settab={settab}/>
      <TabDisplay tab={tab}/>
    </div>
  );
}

export default App;
