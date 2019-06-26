import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavigationBar, NavItems, Routes, PlusMenu } from './components';

function App() {
  const [popEl, setPopEl] = useState(null);
  const [type, setType] = useState('');
  const handleClick = event => {
    setPopEl(event.currentTarget);
  };
  const handleClose = () => {
    setPopEl(null);
  };

  const open = Boolean(popEl);
  const id = open ? 'popover' : undefined;
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <NavigationBar setType={setType} id={id} handleClick={handleClick} />
        <Routes />
      </Router>
      <NavItems id={id} popEl={popEl} open={open} handleClose={handleClose}>
        <PlusMenu type={type} />
      </NavItems>
    </div>
  );
}

export default App;
