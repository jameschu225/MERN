import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [getName, setgetName] = useState([]);


    useEffect (() => {
     
     axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      //    .then(response => {
      //      // not the actual JSON response body but the entire HTTP response
      //      return response.json();
      //  })
         .then(response => {
           // we now run another promise to parse the HTTP response into usable JSON
           setgetName(response.data.results)
       })
         .catch(err=>{
           console.log(err);
       })
   }, []);
  
  return (
    <div className="App">
      
      {getName.map((item, idx) =>(
          <div key={idx}>{idx+1},{item.name}</div>
            ))}
    </div>
  );
}

export default App;
