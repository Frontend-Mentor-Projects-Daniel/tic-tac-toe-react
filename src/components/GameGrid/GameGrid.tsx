import React from 'react';

import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';

import GameButton from '../GameButton/GameButton';

import { range } from '../../utils/helpers';

/**
The grid itself with all the logic for actually playing the game
@returns JSX.Element
*/
function GameGrid(): JSX.Element {
  const [board, setBoard] = React.useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXisNext] = React.useState<boolean>(true);
  const winner: string | null = calculateWinner(board);

  /**
   * handleClick function that handles user clicks on the GameButton component
   * @param e React.MouseEvent<HTMLButtonElement, MouseEvent> The mouse event object
   * @param index number The index of the button that was clicked
   * @returns void
   */
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ): void => {
    const target = e.target;
    if (target instanceof HTMLButtonElement) {
      const boardCopy: (string | null)[] = [...board];

      // If user click an occupied square or if game is won, return
      if (winner || boardCopy[index]) return;
      // Put an X or an O in the clicked square
      boardCopy[index] = xIsNext ? xIcon : oIcon;

      setBoard(boardCopy);
      setXisNext(!xIsNext);
    }
  };

  return (
    <div className='my-5 grid grid-cols-3 justify-items-center gap-y-5 gap-x-5'>
      {range(9).map((i: number) => {
        return (
          <GameButton
            key={i}
            handleClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleClick(e, i)
            }
            index={i}
            board={board}
            xIsNext={xIsNext}
          />
        );
      })}
    </div>
  );
}

/**

calculateWinner function that checks the board for a winner
@param squares (string | null)[] An array of strings representing the state of the game board
@returns string | null The winner of the game or null if there is no winner
*/
function calculateWinner(squares: (string | null)[]): string | null {
  const lines: number[][] = [
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

export default GameGrid;
