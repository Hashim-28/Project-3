import React, { useState } from 'react';
import './App.css';
import Main from './Components/mainpage';
import Start from './Components/StartGame';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <Start /> : <Main toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
