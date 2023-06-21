import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
 
                
function App() {
  return (
    <div className="app" style={{margin:'20px', backgroundColor: '#dddddd', display:'flex', flexDirection:'column'}}>
        <Header />
        <div style={{display:'flex'}}>
            <Navigation />
            <Main>
                <SubContents />
                <SubContents />
                <SubContents />
                <Advertisement />
            </Main>
        </div>
    </div>
  );
}
                
export default App;
