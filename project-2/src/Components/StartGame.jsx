import React, { useState } from 'react';

const Start = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [diceNumber, setDiceNumber] = useState(1);
  const [userNumber, setUserNumber] = useState(null);
  const [showRules, setShowRules] = useState(false);

  const handleNumberClick = (number) => {
    setUserNumber(number);
  };

  const rollDice = () => {
    if (userNumber !== null) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(randomNumber);

      if (userNumber === randomNumber) {
        setTotalScore((prevTotal) => prevTotal + userNumber);
      } else {
        setTotalScore((prevTotal) => prevTotal - 2);
      }
      
      // Reset userNumber after dice roll
      setUserNumber(null);
    } else {
      alert("Please select a number first.");
    }
  };

  const resetScore = () => {
    setTotalScore(0);
  };

  const toggleRules = () => {
    setShowRules((prevShowRules) => !prevShowRules);
  };

  return (
    <div id='game'>
      <div>
        <span>{totalScore}</span>
        <h2>Total Score</h2>
      </div>
      <div onClick={rollDice} style={{ cursor: 'pointer' }} id='img'>
        <img src={`/image/dice_${diceNumber}.png`} alt={`dice-${diceNumber}`} />
      </div>
      <button onClick={resetScore} id='reset-btn'>Reset</button>
      <button onClick={toggleRules} id='rule-btn'>Show Rules</button>
      {showRules && (
        <div id="rules">
          <h3>How to play dice game</h3>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            After clicking on the dice, if the selected number is equal to the dice number you will get the same points as the dice.
          </p>
          <p>If you get the wrong guess, then 2 points will be deducted.</p>
        </div>
      )}
      <ul>
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <li
            key={number}
            onClick={() => handleNumberClick(number)}
            style={{ cursor: 'pointer', fontWeight: userNumber === number ? 'bold' : 'normal' }}
          >
            {number}
          </li>
        ))}
      </ul>
      <h3>Select a number and then click on the dice</h3>
    </div>
  );
};

export default Start;
