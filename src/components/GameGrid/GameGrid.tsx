import React from 'react';

import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';
import { convertStringToNum, sleep } from '../../utils/helpers';
import GameButton from '../GameButton/GameButton';

function GameGrid() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = React.useState(true);
  const winner = calculateWinner(board);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target;
    if (target instanceof HTMLButtonElement) {
      const buttonPositionString = target.dataset.position;

      if (buttonPositionString) {
        const buttonPositionNum = convertStringToNum(buttonPositionString);

        const boardCopy = [...board];

        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[buttonPositionNum]) return;
        // Put an X or an O in the clicked square
        boardCopy[buttonPositionNum] = xIsNext ? xIcon : oIcon;

        setBoard(boardCopy);
        setXisNext(!xIsNext);
      }
    }
  };

  return (
    // <GameButton />
    <div className='my-5 grid grid-cols-3 justify-items-center gap-y-5 gap-x-5'>
      <button
        data-position='0'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        <img src={board[0]} alt='' />
      </button>
      <button
        data-position='1'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        <img src={board[1]} alt='' />
      </button>
      <button
        data-position='2'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        <img src={board[2]} alt='' />
      </button>

      <button
        data-position='3'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        <img src={board[3]} alt='' />
      </button>
      <button
        data-position='4'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        <img src={board[4]} alt='' />
      </button>
      <button
        data-position='5'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        <img src={board[5]} alt='' />
      </button>

      <button
        data-position='6'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        <img src={board[6]} alt='' />
      </button>
      <button
        data-position='7'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        <img src={board[7]} alt='' />
      </button>
      <button
        data-position='8'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        <img src={board[8]} alt='' />
      </button>
    </div>
  );
}

export default GameGrid;

// @ts-ignore
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
