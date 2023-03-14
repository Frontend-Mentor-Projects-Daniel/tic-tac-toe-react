import React from 'react';
import Logo from '../Logo';

import TurnDisplay from '../TurnDisplay';
import RestartButton from '../RestartButton';
import ScoreBlock from '../ScoreBlock';
import GameGrid from '../GameGrid';

const iconX = (
  <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z'
      fill='#A8BFC9'
      fillRule='evenodd'
    />
  </svg>
);

const iconO = (
  <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z'
      fill='#A8BFC9'
    />
  </svg>
);

// TODO:
// 0) Delete iconO/X when they're not needed
// 1) Complete grid logic first
// 2) Complete header logic second
// 3) Complete scoreBoard logic last

function GameBoard() {
  return (
    <>
      {/* game header */}
      <div className='flex items-center justify-between'>
        <Logo width={72} height={32} alt='tic tac toe game logo' />

        <TurnDisplay />

        <RestartButton />
      </div>

      {/* grid */}
      <GameGrid />

      {/* scoreboard */}
      <div className='flex justify-between gap-5'>
        <ScoreBlock />
      </div>
    </>
  );
}

export default GameBoard;
