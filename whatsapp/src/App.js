import React from 'react';
import './app.css';
import Sidebar from './components/SideBars/Sidebar';
import MainChats from './components/mainChat/MainChats';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <MainChats />
      </div>
    </div>
  );
}

export default App;
