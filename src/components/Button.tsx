import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../stores';

const Button = () => {
  const { stateGame, changeStateGame } = useContext(StoreContext);
  const [gameMode, setGameMode] = useState(stateGame);

  const changeModeGame = () => {
    setGameMode(!gameMode);
    changeStateGame(!stateGame);
  };

  return (
    <div>
      <button onClick={changeModeGame}>Change text</button>
    </div>
  );
};

export default Button;
