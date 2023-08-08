import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Number from "./components/Number";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/:num/:txtColor/:backColor" element={<Number />}/>
            </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
