import './App.css';
import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorsDisplay from './Components/AuthorsDisplay';
import NewAuthors from './Components/NewAuthors';
import AuthorUpdate from './Components/AuthorUpdate'

function App() {
  const [authors, setAuthors] = useState([]);


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/authors" element={<AuthorsDisplay authors={authors} setAuthors={setAuthors}/>} />
          <Route path="/authors/new" element={<NewAuthors authors={authors} setAuthors={setAuthors}/>} />
          <Route path="/authors/:id/edit" element={<AuthorUpdate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
