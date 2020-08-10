import React from 'react';
import './App.css';
import { Missions } from './components/missions';
import { AddUser } from './components/addUser'; 

function App() {
  return (
      <div className="App">
        <Missions />
        <AddUser />
      </div>
  );
}

export default App;
