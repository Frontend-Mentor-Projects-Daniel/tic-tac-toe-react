import React from 'react';
import Logo from '../Logo';
import iconRestart from '../../assets/icon-restart.svg';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

const iconX = (
  <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z'
      fill='#A8BFC9'
      fill-rule='evenodd'
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

function GameBoard() {
  return (
    <>
      {/* game header */}
      <div className='flex items-center justify-between'>
        <Logo width={72} height={32} alt='tic tac toe game logo' />

        <div className='flex items-center gap-1 rounded bg-header-turn-bg px-4 py-2 shadow-[inset_0px_-4px_0px_#10212A]'>
          <div className='w-[20px]'>
            <svg
              className='inline-block h-full w-full'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 75 75'
            >
              <path
                d='M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z'
                fill='#A8BFC9'
                fill-rule='evenodd'
              />
            </svg>
          </div>
          <span className='text-sm font-bold uppercase tracking-widest text-header-turn-text md:text-base'>
            turn
          </span>
        </div>
        <button className='cursor-pointer rounded border-none bg-header-restartBtn-bg p-3 shadow-[inset_0px_-4px_0px_#6B8997]'>
          <img src={iconRestart} alt='Restart the game' />
        </button>
      </div>

      {/* grid */}
      <div></div>

      {/* game footer */}
      <div></div>
    </>
  );
}

export default GameBoard;
