import React from 'react';

const Main = ({ toggle }) => {
  return (
    <div id="main">
      <div id="h-b">
        <h1>Dice Game</h1>
        <button onClick={toggle}>Play Now</button>
      </div>
      <div id="dice">
        <img src="/image/dice.png" alt="dice-logo" />
      </div>
    </div>
  );
}

export default Main;
